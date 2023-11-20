<template>
    <table class="table table-bordered table-hover ">
        <thead class="thead-dark">
            <tr>
                <th>Role</th>
                <th>Company</th>
                <th>Location</th>
                <th>Applied Date</th>
                <th>Status</th>
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
                </td>
            </tr>
        </tbody>
    </table>
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
<style scoped>
    .table {
        width: 80%;
        margin-top: 2em;
        margin-left: auto;
        margin-right: auto;
    }
</style>