var NewStudent = require ('./newStudent.js');
var prompt = require('prompt');
var fs = require ('fs');
var Bus = require ('./bus.js');

//========================================

var studentList = new NewStudent ();
var busChatter = new Bus ();

//========================================

prompt.start();

prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) {

    // console.log('Command-line input received:');
    // console.log('  Please enter student\'s name: ' + result.name);
    // console.log('  Please enter your gender: ' + result.gender);
    // console.log('  Please enter your grade for this class: ' + result.grade);
    // console.log('  Please enter your GPA: ' + result.GPA);
    // console.log('  Please enter your number of detentions: ' + result.detentions);
    // console.log('  Did you ever sleep in class: ' + result.sleepingInClass);
    // console.log('  What\'s your catch phrase: '  + result.catchPhrase);

    studentList.addStudent(result.name, result.price, result.gender, result.grade, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
    //busChatter.addBus(result.catchPhrase);
    //studentList.canStudentHaveFun();
    // Print Student List

    console.log("students list", studentList.student)
    //console.log("bus chatter: ", result.catchPhrase)
    // Add to student list

    fs.appendFile('newStudent.txt', JSON.stringify(studentList.student) + "\r\n", function (err){
    	if (err){
    		throw err;
    	} else {
    		console.log("Student added to the list");
    	}
    })






    // Read student File and Run commanc
    // fs.readFile('newStudent.txt', 'UTF-8', function (err, readResults){
    // 	if(err){
    // 		throw err;
    // 	} else{
    // 		var students = readResults.split('\r\n');

    // 		for  (var = 0; i < students.length; i++){
    // 			var studentJSON = JSON.parse(students[i].replace(/[\[\]']+/g,''));
    // 			if(result.name == studentJSON.name){
    // 				if((parseFloat(studentJSON.GPA>2)) && (parseFloat(studentJSON.detentions<10)){
    // 					console.log (studentJSON + " ")
    // 				}

    // 			}
    // 		}
    // 	}
    // })

    
  });