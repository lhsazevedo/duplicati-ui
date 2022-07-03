// import * as api from '@/services/api'
// import store from '@/store'

function createServerState () {

}

f

const longpolltime = 5 * 60 * 1000

let longPollRetryTimer = null

const longpoll = function (fastcall) {
  if (longPollRetryTimer != null) {
    window.clearInterval(longPollRetryTimer)
    longPollRetryTimer = null
  }

  // @TODO
  // if (state.connectionState != 'connected') {
  //   state.connectionState = 'connecting';
  //   $rootScope.$broadcast('serverstatechanged');
  // }

  const url = '/serverstate/?lasteventid=' + parseInt(state.lastEventId) + '&longpoll=' + (((!fastcall) && (state.lastEventId > 0)) ? 'true' : 'false') + '&duration=' + parseInt((longpolltime - 1000) / 1000) + 's'
  AppService.get(url, { timeout: state.lastEventId > 0 ? longpolltime : 5000 }).then(
    function (response) {
      const oldEventId = state.lastEventId
      var anychanged =
        notifyIfChanged(response.data, 'LastEventID', 'lastEventId') |
        notifyIfChanged(response.data, 'LastDataUpdateID', 'lastDataUpdateId') |
        notifyIfChanged(response.data, 'LastNotificationUpdateID', 'lastNotificationUpdateId') |
        notifyIfChanged(response.data, 'ActiveTask', 'activeTask') |
        notifyIfChanged(response.data, 'ProgramState', 'programState') |
        notifyIfChanged(response.data, 'EstimatedPauseEnd', 'estimatedPauseEnd') |
        notifyIfChanged(response.data, 'UpdaterState', 'updaterState') |
        notifyIfChanged(response.data, 'UpdateReady', 'updateReady') |
        notifyIfChanged(response.data, 'UpdatedVersion', 'updatedVersion') |
        notifyIfChanged(response.data, 'UpdateDownloadProgress', 'updateDownloadProgress')

      if (!angular.equals(state.proposedSchedule, response.data.ProposedSchedule)) {
        state.proposedSchedule.length = 0
        state.proposedSchedule.push.apply(state.proposedSchedule, response.data.ProposedSchedule)
        $rootScope.$broadcast('serverstatechanged.proposedSchedule', state.proposedSchedule)
        anychanged = true
      }

      if (!angular.equals(state.schedulerQueueIds, response.data.SchedulerQueueIds)) {
        state.schedulerQueueIds.length = 0
        state.schedulerQueueIds.push.apply(state.schedulerQueueIds, response.data.SchedulerQueueIds)
        $rootScope.$broadcast('serverstatechanged.schedulerQueueIds', state.schedulerQueueIds)
        anychanged = true
      }

      // Clear error indicators
      state.failedConnectionAttempts = 0
      state.xsfrerror = false

      if (state.connectionState != 'connected') {
        state.connectionState = 'connected'
        $rootScope.$broadcast('serverstatechanged.connectionState', state.connectionState)
        anychanged = true

        // Reload page, server restarted
        if (oldEventId > state.lastEventId) { location.reload(true) }
      }

      anychanged |= pauseTimerUpdater(true)

      if (anychanged) { $rootScope.$broadcast('serverstatechanged') }

      if (state.activeTask != null) { startUpdateProgressPoll() }

      longpoll(false)
    },

    function (response) {
      var oldxsfrstate = state.xsfrerror
      state.failedConnectionAttempts++
      state.xsfrerror = response.statusText.toLowerCase().indexOf('xsrf') >= 0

      // First failure, we ignore
      if (state.connectionState == 'connected' && state.failedConnectionAttempts == 1) {
        // Try again
        longpoll(true)
      } else {
        state.connectionState = 'disconnected'

        // If we got a new XSRF token this time, quickly retry
        if (state.xsfrerror && !oldxsfrstate) {
          longpoll(true)
        } else {
          // Otherwise, start countdown to next try
          countdownForForReLongPoll(function () { longpoll(true) })
        }
      }

      // Notify
      $rootScope.$broadcast('serverstatechanged')
    }
  )
}

this.reconnect = function () { longpoll(true) }

longpoll(true)
