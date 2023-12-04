const mongoose = require('mongoose');
const Schema = mongoose.Schema

// application(role, type, location, company, status, notes)

const applicationSchema = new Schema (
    {
        role: String, // type of role e.g. Full-Stack Engineer
        jobType: String, // type of job e.g. Part-Time or Full-Time
        experienceLevel: String, // level of experience e.g. Senior/Internship
        company: String, // name of company e.g. Google
        location: String, // Rochester, Syracuse, New York
        appliedDate: String, // Applied date, mm/dd/yyyy
        status: String, // status of application e.g. applied, rejected
        notes: String // general notes about the application
    }
)
module.exports = mongoose.model("Application", applicationSchema)