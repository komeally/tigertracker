<template>
    <table class="table table-bordered table-hover ">
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
                    <router-link :to="{name: 'update', params: { id: application._id }}" class="btn btn-success">Edit</router-link>
                    <button @click.prevent="deleteApplication(application._id)" class="btn btn-danger">Delete</button>
                    <button @click.prevent="showDetails(application._id)" class="btn btn-secondary">View Details</button>  
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
    import axios from "axios";
    import ViewApplication from "./ViewApplication.vue";
    export default {
        data() {
            return {
                Applications: [],
                showDetailsModal: false,
                selectedApplication: null,
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
        methods: {
            deleteApplication(id) {
                let apiURL = `http://localhost:3000/application/${id}`;
                let indexOfArrayItem = this.Applications.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Applications.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        },
        components: {
            ViewApplication
        }
    }
</script>
<style scoped>
    .table {
        width: 80%;
        margin-top: 2em;
        margin-left: auto;
        margin-right: auto;
    }
</style>