const Application = require("../models/Application")

module.exports = {
    createApplication: async function (role, jobType, experienceLevel, company, location, appliedDate, status, notes) {
        try {
            const existingApplication = await Application.findOne({role: role, company: company})
            if (existingApplication) {
                throw new Error(`An application with company: ${company} and role: ${role} already exists.`)
            }

            const newApplication = new Application({
                role,
                jobType,
                experienceLevel,
                company,
                location,
                appliedDate,
                status,
                notes
            })
            await newApplication.save()

            return {
                applicationId: newApplication._id
            }

        } catch (error) {
            throw error
        }
    },
    getApplications: async function () {
        return await Application.find({})
    }
}