const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRouter = require('./routes/employeeRouters.js');
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB connected");
})
.catch((error) => {
    console.log(error);
});

app.get('/venky', (req, res) => {
    res.send("venky is the hero");
});

app.use('/employee', employeeRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
