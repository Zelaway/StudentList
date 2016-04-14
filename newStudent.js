var Student = require('./student.js');

var NewStudent = function(){
	this.student = [];
	this.addStudent = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
		this.student.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
		this.canStudentHaveFun = function (){  //can student have fun function
			if ((this.student[3] > 2) && (this.student[4] <10)){
			console.log("the student can have fun");
			} else {
			console.log("you need to study more");
			}

		}
		this.canStudentHaveFun(); // can the student have fun is called after object is created in main.js file

	}
}

module.exports = NewStudent;