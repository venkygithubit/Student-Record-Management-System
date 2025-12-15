const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    collegeRegistrationNumber: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    rank: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
