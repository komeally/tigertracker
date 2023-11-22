<template>
  <div>
    <table class="table table-bordered table-hover">
      <thead class="thead-dark">
        <tr>
          <th>Role</th>
          <th>Company</th>
          <th>Location</th>
          <th>Applied Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="application in Applications" :key="application._id">
          <td>{{ application.role }}</td>
          <td>{{ application.company }}</td>
          <td>{{ application.location }}</td>
          <td>{{ new Date(application.appliedDate).toLocaleDateString() }}</td>
          <td>{{ application.status }}</td>
          <td>
            <router-link :to="{ name: 'update', params: { id: application._id } }" class="btn btn-success">Edit</router-link>
            <button @click.prevent="deleteApplication(application._id)" class="btn btn-danger">Delete</button>
            <button @click="showDetailsModal(application)" class="btn btn-secondary">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ViewApplication v-if="showDetails" :application="selectedApplication"></ViewApplication>
  </div>
</template>

<script>
import axios from "axios";
import ViewApplication from "./ViewApplication.vue";
import { useModalStore } from "../stores/ModalStore"; // Ensure correct import

export default {
  data() {
    return {
      Applications: [],
    };
  },

  created() {
    let apiURL = "http://localhost:3000/application";
    axios.get(apiURL).then((res) => {
      this.Applications = res.data;
    }).catch((error) => {
      console.log(error.message);
    });
  },

  methods: {
    deleteApplication(id) {
      let apiURL = `http://localhost:3000/application/${id}`;
      let indexOfArrayItem = this.Applications.findIndex((i) => i._id === id);

      if (window.confirm("Do you really want to delete?")) {
        axios.delete(apiURL).then(() => {
          this.Applications.splice(indexOfArrayItem, 1);
        }).catch((error) => {
          console.log(error);
        });
      }
    },

    showDetailsModal(application) {
      const modalStore = useModalStore();
      modalStore.openModal(application);
    },

    closeModal() {
      const modalStore = useModalStore();
      modalStore.closeModal();
    },
  },

  computed: {
    showDetails() {
      const modalStore = useModalStore();
      return modalStore.showDetails;
    },

    selectedApplication() {
      const modalStore = useModalStore();
      return modalStore.selectedApplication;
    },
  },

  components: {
    ViewApplication,
  },
};
</script>

<style scoped>
  .table {
    width: 80%;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
  }
</style>
