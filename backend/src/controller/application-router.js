const { Router } = require('express');
const applicationApi = require('./application-api.js');
const Application = require('../models/application');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const applications = await applicationApi.listApplications();

        if (!applications) {
            return res.status(404).json({
                message: 'Application not found',
            });
        }
        console.log("Got!");
        return res.json(applications);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const application = await applicationApi.listApplications(id);

        if (!application) {
            return res.status(404).json({
                message: 'Application not found',
            });
        }

        res.json(application);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const { applicationId } = await applicationApi.createApplication(req.body.role, req.body.jobType, req.body.experienceLevel, 
        req.body.company, req.body.location, req.body.appliedDate, req.body.status, req.body.notes);
        res.status(201).json({ applicationId });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
})

router.patch('/:id', getApplication, async (req, res) => {
    reqData = ['role', 'jobType', 'experienceLevel', 'company', 'location', 'appliedDate', 'status', 'notes']

    try {
        reqData.forEach((data) => {
            if (req.body[data] !== null && req.body[data] !== undefined) {
                res.application[data] = req.body[data]
            }
        });
        const updatedApplication = await res.application.save()
        res.json(updatedApplication)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
})
  
// Delete One
router.delete('/:id', getApplication, async (req, res) => {
    try {
        await Application.findByIdAndRemove(res.application._id);
        res.json({ message: 'Deleted application' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


//Middleware function to check if application exists
async function getApplication(req, res, next) {
    let application
    try {
      application = await Application.findById(req.params.id)
      if (application == null) {
        return res.status(404).json({ message: 'Cannot find application' })
      }
    } catch (err) {
        console.log(err);
      return res.status(500).json({ message: err.message })
    }
  
    res.application = application
    next()
}
module.exports = router