const mongoose = require('mongoose')
const Schema = mongoose.Schema

// application(role, type, location, company, status, notes)

const applicationSchema = new Schema (
    {
        role: String,
        jobType: String,
        experienceLevel: String, 
        company: String,
        location: [],
        appliedDate: {
            type: Date,
            default: null
        },
        status: String,
        notes: String
    }
)
module.exports = mongoose.model("Application", applicationSchema)