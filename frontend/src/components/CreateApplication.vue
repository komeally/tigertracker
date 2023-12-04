<template>
    <ApplicationForm :application="application" :handleSubmit="handleCreateForm" formMode="create" />
</template>
  
<script>
  import ApplicationForm from "./ApplicationForm.vue";
  import axios from "axios";
  
  export default {
    data() {
      return {
        application: {
          role: "",
          company: "",
          location: "",
          appliedDate: "",
          status: "",
          jobType: "",
          experienceLevel: "",
          notes: "",
        },
      };
    },
  
    methods: {
      handleCreateForm() {
        let apiURL = "http://localhost:3000/application";
  
        axios.post(apiURL, this.application)
          .then(() => {
            this.$router.push("/");
            // Reset the application data
            this.application = {
              role: "",
              company: "",
              location: "",
              appliedDate: "",
              status: "",
              jobType: "",
              experienceLevel: "",
              notes: "",
            };
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
  
    components: {
      ApplicationForm,
    },
  };
</script>  