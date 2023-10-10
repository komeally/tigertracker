// src/services/product.js

const applicationModel = require('../../models/Application');

/**
 * Stores a new product into the database.
 * @param {Object} application application object to create.
 * @throws {Error} If the application is not provided.
 */
module.exports.create = async (application) => {
    if (!application)
        throw new Error('Missing application');

    await applicationModel.create(application);
}