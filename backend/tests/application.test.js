const mongoose = require('mongoose');

const dbHandler = require('./db-handler');
const applicationService = require('../src/services/application');
const applicationModel = require('../models/Application');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe('application ', () => {

    /**
     * Tests that a valid application can be created through the applicationService without throwing any errors.
     */
    it('can be created correctly', async () => {
        expect(async () => await applicationService.create(applicationComplete))
            .not
            .toThrow();
    });
});

/**
 * Complete application example.
 */
const applicationComplete = {
    role: 'Full-Stack Engineer',
    jobType: 'Full-Time',
    experienceLevel: 'Co-Op',
    company: 'FactSet',
    location: ['New York', 'Connecticut', 'Chicago'],
    appliedDate: Date.now(),
    status: 'Offered',
    notes: "Working on creating a job description, verbal offer."
};