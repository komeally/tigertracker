<script setup></script>

<template>
  <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Role</th>
                        <th>Job Type</th>
                        <th>Experience Level</th>
                        <th>Company</th>
                        <th>Location</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="application in Applications" :key="application._id">
                        <td>{{ application.role }}</td>
                        <td>{{ application.jobType }}</td>
                        <td>{{ application.experienceLevel }}</td>
                        <td>{{ application.company }}</td>
                        <td>{{ application.location.join(", ") }}</td>
                        <td>{{ application.appliedDate }}</td>
                        <td>{{ application.status }}</td>
                        <td>{{ application.notes }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Applications: []
            }
        },
        created() {
            let apiURL = 'http://localhost:3000/application';
            axios.get(apiURL).then(res => {
                this.Applications = res.data;
            }).catch(error => {
                console.log(error.message)
            });
        },
        methods: {}
    }
</script>
<style scoped></style>
