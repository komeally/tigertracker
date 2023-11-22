import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore =  defineStore('modal', () => {
  const showDetails = ref(false) // Track modal visibility
  const selectedApplication = ref(null) // Store selected application details

  function openModal(application) {
    showDetails.value = true // Open modal
    selectedApplication.value = application // Update selected application
  }

  function closeModal() {
    showDetails.value = false // Close modal
    selectedApplication.value = null // Reset selected application
  }

  return { showDetails, selectedApplication, openModal, closeModal }
})