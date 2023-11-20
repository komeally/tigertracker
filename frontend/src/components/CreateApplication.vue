<template>
    <form @submit.prevent="handleCreateForm">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="role" placeholder="Role" v-model="application.role" required>
            <label for="role">Role</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="company" placeholder="Company" v-model="application.company" required>
            <label for="company">Company</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="location" placeholder="Location" v-model="application.location" required>
            <label for="location" class="form-label">Location</label>
        </div>
        <div class="form-floating mb-3">
            <input type="date" class="form-control" id="appliedDate" placeholder="Applied Date" v-model="application.appliedDate" required>
            <label for="location" class="form-label">Applied Date</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="status" name="status" v-model="application.status" required>
                <option value="Submitted">Submitted 📥</option>
                <option value="Under Review">Under Review 🤔</option>
                <option value="Pending Decision">Pending Decision ⏳</option>
                <option value="Rejected">Rejected ❌</option>
                <option value="Offered">Offered 🎉</option>
                <option value="Accepted">Accepted ✅</option>
                <option value="Declined">Declined 😞</option>
                <option value="Interviewing">Interviewing 🧑‍💼</option>
                <option value="Hired">Hired 💼</option>
            </select>
            <label for="status" class="form-label">Status</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="jobType" name="jobType" v-model="application.jobType" required>
                <option value="Part-Time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
            </select>
            <label for="jobType" class="form-label">Job Type</label>
        </div>
        <div class="form-floating mb-3">
            <select class="form-select" id="experienceLevel" name="experienceLevel" v-model="application.experienceLevel" required>
                <option value="Senior">Senior</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Entry-Level">Entry-Level</option>
                <option value="Internship">Internship</option>
                <option value="Co-Op">Co-Op</option>
            </select>
            <label for="experienceLevel" class="form-label">Experience Level</label>
        </div>
        <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Notes" id="notes" v-model="application.notes" style="height: 100px"></textarea>
            <label for="notes">Notes</label>
        </div>
        <div class="mb-3">
            <button class="btn btn-success btn-block">Create</button>
        </div>
    </form>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                application: {
                   role: '',
                   company: '',
                   location: '',
                   appliedDate: '',
                   status: '',
                   jobType: '',
                   experienceLevel: '',
                   notes: ''
                }
            }
        },
        methods: {
            handleCreateForm() {
                let apiURL = 'http://localhost:3000/application';
                
                axios.post(apiURL, this.application).then(() => {
                  this.$router.push('/')
                  this.application = {
                    role: '',
                    company: '',
                    location: '',
                    appliedDate: '',
                    status: '',
                    jobType: '',
                    experienceLevel: '',
                    notes: ''
                  }
                  console.log(this.application);
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>