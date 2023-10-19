const express = require("express")
const app = express()

const applicationRouter = require('./src/controller/application-router')

app.use('/application', applicationRouter)

const port = 3000 || process.env.PORT
app.listen(port, () => {
    console.log("Listening on port:", port);
})