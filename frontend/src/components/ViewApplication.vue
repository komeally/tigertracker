<template>
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-container">
        <div class="modal-content">
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
          <button @click="closeModal" class="btn btn-primary">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // ViewApplication.vue
import { useModalStore } from '../stores/ModalStore'; // Change the import to get the default export

export default {
  props: {
    application: Object,
  },

  computed: {
    showDetails() {
        const ModalStore = useModalStore();
        return ModalStore.showDetails; // Use Pinia store for modal visibility
    },

    displayedApplication() {
        const ModalStore = useModalStore();
        return ModalStore.selectedApplication; // Use Pinia store for selected application
    },

    showModal() {
      // Define showModal logic if needed
      // For example, you can return true when showDetails is true.
      return this.showDetails;
    },
  },

  methods: {
    closeModal() {
        const ModalStore = useModalStore();
        ModalStore.closeModal(); // Use Pinia store to close modal
    },
  },
};
</script>
<style scoped>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Darkened overlay */
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease; /* Fade-in animation */
    }

    .modal-container {
        background: white;
        border-radius: 5px;
        padding: 20px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }

    .modal-content {
    /* Customize modal content styles if needed */
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>