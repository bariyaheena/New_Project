const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: [true, "Email is a required"],
        trim: true,
        lowercase: true,
        unique: true
    },
    mobile: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    education: {
        type: String,
        require: true
    },
    source: {
        type: String,
        require: true,
        enum:['indeed','linkdin']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})

const student = new mongoose.model("student", studentSchema);

module.exports = student;
