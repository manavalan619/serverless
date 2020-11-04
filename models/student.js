"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    Studentname: String,
    Studentid: String,
    Studentsection: String,
    Studentdob: String
});
module.exports = mongoose.model('student', studentSchema);