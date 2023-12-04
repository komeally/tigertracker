<template>
  <header>
    <div class="wrapper">
      <nav>
        <h1>TigerTracker</h1>
        <h2 v-if="subheading">{{ subheading }}</h2>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      subheading: "",
    };
  },
  watch: {
    $route(to, from) {
      // Update subheading based on the route
      this.updateSubheading(to);
    },
  },
  mounted() {
    // Set initial subheading based on the current route
    this.updateSubheading(this.$route);
  },
  methods: {
    updateSubheading(route) {
      // Customize subheading based on the route
      switch (route.name) {
        case "home":
          this.subheading = "View Your Applications";
          break;
        case "create":
          this.subheading = "Add an Application";
          break;
        case "update":
          this.subheading = "Edit Your Application";
          break;
        default:
          this.subheading = "";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
  text-align: center;
  font-weight: bold;
}

h2 {
  font-family: "Helvetica Neue", "Helvetica", "Roboto", "Arial", sans-serif;
  text-align: center;
  font-weight: normal;
  color: #777;
}
</style>