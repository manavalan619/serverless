const student = require('../dao/studentDao.js');

module.exports.GpSearch = (event, context, callback) => {
    console.log('info', 'Enter into studentService.ts: GpSearch');
    // const studentData = event.body;
    // console.log("Here body---------------->>>>>>>>>", studentData)
    student.GpSearch(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpSearch');
        console.log('I am from responce----------->>>>', response)
        callback(error, response);
    })
}



module.exports.GpDelete = (event, context, callback) => {
    console.log('info', 'Enter into studentService.ts: GpDelete');
    student.GpDelete(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpDelete');
        callback(error, response);
    });
}


module.exports.GpCreate = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('info', 'Enter into studentService.ts: GpCreate');
    // const studentData = event.body;
    console.log('--------- values at service----------', event.body)
    student.GpCreate(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpCreate');
        console.log('<<<<<<<<<----------- responce at service>>>>>>>>>>>', response);
        callback(error, response);
    });
}

module.exports.GpUpdate = (event, context, callback) => {
    console.log('info', 'Enter into studentService.ts: GpUpdate');
    // const studentData = event.body;
    student.GpUpdate(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpUpdate');
        callback(error, response);
    });
}

module.exports.GpSearchForUpdate = (event, context, callback) => {
    console.log('info', 'Enter into studentService.ts: GpUpdate');
    student.GpSearchForUpdate(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpUpdate');
        callback(error, response);
    });
}


module.exports.GpGetAllValues = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    // console.log('info', 'Enter into studentService.ts: GpGetAllValues');
    student.GpGetAllValues(event, context, (error, response) => {
        // console.log('-----------  service -----------', response);
        // console.log('info', 'Exit from studentService.ts: GpGetAllValues');
        callback(error, response);
    });

}


module.exports.GpGetNounById = (event, context, callback) => {
    console.log('info', 'Enter into studentService.ts: GpGetNounById');
    // const studentId = event.pathParameters.id;
    student.GpGetNounById(event, context, (error, response) => {
        console.log('info', 'Exit from studentService.ts: GpGetNounById');
        callback(error, response);
    });
}