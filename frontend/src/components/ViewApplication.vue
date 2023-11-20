<template>
    <div class="modal fade" id="appInfo" tabindex="-1" aria-labelledby="appInfoLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="appInfoLabel">Application Details</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <ul>
                    <li>Role: {{ application.role }}</li>
                    <li>Job Type: {{ application.jobType }}</li>
                    <li>Experience Level: {{ application.experienceLevel }}</li>
                    <li>Company: {{ application.company }}</li>
                    <li>Location: {{ application.location }}</li>
                    <li>Applied Date: {{ application.appliedDate }}</li>
                    <li>Status: {{ application.status }}</li>
                    <li>Notes: {{ application.notes }}</li>
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    let apiURL = `http://localhost:3000/application/${application._id}`;
    axios.get(apiURL).then((res) => {
      this.application = res.data;
    });
  },

  props: {
    application: Object
  }
};
</script>