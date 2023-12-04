<template>
  <ApplicationForm :application="application" :handleSubmit="handleUpdateForm" formMode="edit" />
</template>

<script>
import ApplicationForm from "./ApplicationForm.vue";
import axios from "axios";

export default {
  data() {
    return {
      application: {},
    };
  },

  created() {
    let apiURL = `http://localhost:3000/application/${this.$route.params.id}`;
    axios.get(apiURL).then((res) => {
      this.application = res.data;
    });
  },

  methods: {
    handleUpdateForm() {
      let apiURL = `http://localhost:3000/application/${this.$route.params.id}`;
      axios.put(apiURL, this.application).then(() => {
        this.$router.push("/");
      });
    },
  },

  components: {
    ApplicationForm,
  },
};
</script>
