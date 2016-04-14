//--Student Constructor File

var Student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
	this.name 			= name;
	this.gender 		=gender;
	this.grade 			= grade;
	this.GPA 			= GPA;
	this.detentions 	= detentions;
	this.sleepingInClass= false;
	this.catchPhrase 	= catchPhrase;
	// this.canStudentHaveFun = function () {
	// 	if ((this.detentions < 10) && (this.GPA > 2)) {
	// 		console.log("the student can have fun");
	// 	} else {
	// 		console.log("you need to study more");
	// 	}
	// }

}

module.exports = Student;

//var adam = new StudentBuilder("Adam", "M", "A", 3, 4, false, "new catchPhrase");
