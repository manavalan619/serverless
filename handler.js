'use strict';
const student = require('./service/studentService.js');
const mongoose = require('mongoose');
var merge = require('lodash.merge');
// const { response } = require('express');
require('dotenv').config({ path: './.env' });


class App {
    constructor() {
        this.mongoUrl = process.env.MONGO_DB_URL
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        mongoose.Promise = global.Promise;

    }
}



module.exports.GpSearch = (event, context, callback) => {
    new App(event, context, callback);
    console.log('info', 'Enter into studentController.js: GpSearch');
    student.GpSearch(event, context, (error, response) => {
        console.log('info', 'Exit from studentController.ts: GpSearch');
        callback(error, response);
    })
}



module.exports.GpDelete = (event, context, callback) => {
    new App(event, context, callback);
    console.log('info', 'Enter into studentController.ts: GpSearchForUpdate');
    student.GpDelete(event, context, (error, response) => {
        // context.callbackWaitsForEmptyEventLoop = false;
        console.log('info', 'Exits into studentController.ts: GpSearchForUpdate');
        callback(error, response);
    })
}


module.exports.GpCreate = (event, context, callback) => {
    new App(event, context, callback);
    console.log('info', 'Enter into studentController.ts: GpSearchForUpdate');
    student.GpCreate(event, context, (error, response) => {
        context.callbackWaitsForEmptyEventLoop = false;
        callback(error, response);

    })
}

module.exports.GpUpdate = (event, context, callback) => {
    new App(event, context, callback);
    student.GpUpdate(event, context, (error, response) => {
        console.log('info', 'Enter into studentController.ts: GpSearchForUpdate');
        callback(error, response);

    })
}

module.exports.GpSearchForUpdate = (event, context, callback) => {
    new App(event, context, callback);
    console.log('info', 'Enter into studentController.ts: GpSearchForUpdate');
    student.GpSearchForUpdate(event, context, (error, response) => {
        console.log('info', 'Exits into studentController.ts: GpSearchForUpdate');
        callback(error, response);

    })
}


module.exports.GpGetNounById = (event, context, callback) => {
    new App(event, context, callback);
    student.GpGetNounById(event, context, (error, response) => {
        console.log('info', 'Enter into studentController.ts: GpSearchForUpdate');
        callback(error, response);

    })
}

module.exports.GpGetAllValues = (event, context, callback) => {
    new App(event, context, callback);
    student.GpGetAllValues(event, context, (error, response) => {

        callback(error, response);
        console.log("--------------------------------", typeof(response))

    })
}