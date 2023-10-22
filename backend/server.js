const express = require('express');
const app = express();

const applicationRouter = require('./src/controller/application-router.js');

app.use('/application', applicationRouter);

app.get('/', async (req, res) => {
    try {
        res.json({
            message: "Hi, you're in!"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port:", port);
});
