//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;c
	}
}
get name(){
	return this.name;
}
set age(){
	 this.age=age;
}

class Student extends Person {
	name(){
		console.log(this.name + "is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log("this.name"+"is teaching");
	}
}
// create a Person object
const p = new Person("Alice", 25);

// get the name using the getter method
console.log(p.name); // Alice

// set the age using the setter method
p.age = 30;

// create a Student object
const s = new Student("Bob", 20);

// call the study method
s.study(); // Bob is studying

// create a Teacher object
const t = new Teacher("Carol", 35);

// call the teach method
t.teach(); // Carol is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
