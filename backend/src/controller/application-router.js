const express = require('express');
const {createApplication, getApplications} = require('./application-api');
const router = express.Router()

router.get('/', async (res) => {
    try {
        res.json(await getApplications())
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.post("/", async (req, res) => {
    const {role, jobType, experienceLevel, company, location, appliedDate, status, notes} = req.body
    try {
        const {applicationId} = await createApplication(role, jobType, experienceLevel, company, location, appliedDate, status, notes)
        res.json({applicationId})
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

module.exports = router