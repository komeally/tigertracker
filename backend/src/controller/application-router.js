const { Router } = require('express');
const { createApplication, getApplications } = require('./application-api.js');

const router = Router();

router.get('/', async (req, res) => {
    try {
        res.json(await getApplications());
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { applicationId } = await createApplication(req.body.role, req.body.jobType, req.body.experienceLevel, 
        req.body.company, req.body.location, req.body.appliedDate, req.body.status, req.body.notes);
        res.status(201).json({ applicationId });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

module.exports = router;