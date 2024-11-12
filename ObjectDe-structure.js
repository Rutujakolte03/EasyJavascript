const course = {
    id: "209",
    Instructor : "Rutuja",
    coursename: "Javascript"

}
//course.coursename
const {coursename} = course
console.log(coursename);

const {courseInstructor: instructor} = course 
//console.log(instructor);
console.log(instructor);      //Here, {coursename} = course is an example of object destructuring. It pulls the value of the coursename property directly from course and assigns it to a variable called coursename.

/*{
    "name": "Rutuja",
    "course": "EasyJavascript",
    "price": "free"
}*/

const array = [{}, {}, {}];

// Assign properties to each object
array[0] = { name: "Rutuja", age: 25, job: "Engineer" };
array[1] = { name: "Siddharth", age: 30, job: "Designer" };
array[2] = { name: "Shraddha", age: 22, job: "Developer" };

console.log(array);
