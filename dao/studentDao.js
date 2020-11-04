"use strict";
const student = require("../models/student.js");


module.exports.GpSearch = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("Here body--------->>>>", event.queryStringParameters)
    console.log('info', 'Enter into studentDao.ts: GpSearch');
    let andkey;
    let and_obj = {};
    let orkey;
    let or_obj = {};;
    Object.entries(event.queryStringParameters).forEach(([key, value]) => {
        if (value !== '') {
            andkey = key;
            and_obj[andkey] = value;
        } else {
            orkey = key;
            or_obj[orkey] = { $ne: '' };
        }
    });;;
    student.find({
            $and: [{
                    $or: [
                        or_obj
                    ]
                },
                and_obj
            ]
        }).then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })

        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );

}
module.exports.GpDelete = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('info', 'Enter into studentdeleteDAO.ts: GpDelete');
    student.findByIdAndRemove(event.pathParameters.id)
        .then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Removed note with id: ' + note._id,
                    note: note
                })
            })

        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not fetch the notes.'
            })
        );

}


module.exports.GpSearchForUpdate = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('info', 'Enter into studentDao.ts: GpUpdate');
    context.callbackWaitsForEmptyEventLoop = false;
    student.findByIdAndUpdate(event.queryStringParameters._id, (event.queryStringParameters), {
            new: true
        }).then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })
        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );
}



module.exports.GpUpdate = (event, context, callback) => {
    console.log('info', 'Enter into studentDao.ts: GpUpdate');
    context.callbackWaitsForEmptyEventLoop = false;
    student.findByIdAndUpdate(event.queryStringParameters._id, (event.queryStringParameters), {
            new: true
        }).then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })
        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );
}

module.exports.GpCreate = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('<<<<<<---------------- Create Dao -------->>>>>>', event.body)
    student.create(JSON.parse(event.body)).then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })
        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );
}

module.exports.GpGetAllValues = (event, context, callback) => {
    student.find()
        .then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })
        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );
}

module.exports.GpGetNounById = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log("Here Id of the given body---->>>>", event.pathParameters.id)
    student.findById(event.pathParameters.id).then(note =>
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(note)
            })
        )
        .catch(err =>
            callback(null, {
                statusCode: err.statusCode || 500,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Could not create the note.'
            })
        );
}