const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

mongoose.model('Department', departmentSchema);