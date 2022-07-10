import axios from "@/axios";
import { useStore } from "@/store";

export async function createServerStatus () {
  let lastEventId = -1

  async function pollServerState(long = false) {
    // TODO Timeout
    const { data } = await axios.get(`/serverstate/?lasteventid=${lastEventId}&longpoll=${long}&duration=300s`)
  
    if (lastEventId > data.LastEventID) {
      location.reload(true);
    }

    lastEventId = data.LastEventID

    const store = useStore()
    store.serverState = data
  }

  // TODO: Handle exceptions
  await pollServerState()

  for (;;) {
    await pollServerState(true)

    // TODO: Handle exceptions
  }
}
