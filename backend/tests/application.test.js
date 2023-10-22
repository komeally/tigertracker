const mongoose = require('mongoose');
const { connect, clearDatabase, closeDatabase } = require('./db-handler');
const { create } = require('../src/services/application');
const Application = require('../src/models/Application');
const { createApplication } = require('../src/controller/application-api');


/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await closeDatabase());

/**
 * Product test suite.
 */
describe('application ', () => {
    /**
     * Tests that a valid application can be created through the applicationService without throwing any errors.
     */
    it('can be created correctly', async () => {
        const applicationForm = {
            role: 'Full-Stack Engineer',
            jobType: 'Full-Time',
            experienceLevel: 'Co-Op',
            company: 'FactSet',
            location: ['New York', 'Connecticut', 'Chicago'],
            appliedDate: Date.now(),
            status: 'Offered',
            notes: "Working on creating a job description, verbal offer."
        };

        const application = await createApplication(applicationForm.role, applicationForm.jobType, applicationForm.experienceLevel, applicationForm.company,
            applicationForm.location, applicationForm.appliedDate, applicationForm.status, applicationForm.notes)

        expect(application.role).toEqual(applicationForm.role)
    });
});

/**
 * Complete application example.
 */
