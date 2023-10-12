const mongoose = require('mongoose');

const db = require('./db-handler');
const applicationService = require('../src/services/application');
const applicationModel = require('../src/models/Application');

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await db.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await db.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await db.closeDatabase());

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