<template>
  <div class="modal-dialog modal-lg">
    <div class="bg-white rounded-sm" style="pointer-events: auto;">
      <div class="p-4">
        <div class="h5 font-weight-bold mb-3">First run setup</div>

        <div class="text-muted" style="font-size: .875rem;">
          <p>If your machine is in a multi-user environment (i.e. the machine has more than one account), you need to set a password to prevent other users from accessing data on your account.</p>
          <p>Do you want to set a password now?</p>
        </div>
      </div>

      <!-- <div class="modal-header">
        <div class="h5 modal-title">First run setup</div>
      </div>

      <div class="modal-body text-muted">
        <p>If your machine is in a multi-user environment (i.e. the machine has more than one account), you need to set a password to prevent other users from accessing data on your account.</p>
        <p>Do you want to set a password now?</p>
      </div> -->

      <div class="text-right px-3 py-3 bg-light">
        <button type="button" class="btn btn-white" data-dismiss="modal">No, my machine has only a single account</button>
        <button type="button" class="btn btn-primary ml-2">Yes</button>
      </div>
    </div>
  </div>
</template>
