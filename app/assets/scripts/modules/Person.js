/*function Person(fullName, color) {
  this.fullName = fullName;
  this.color = color;
  this.greet = function () {
    console.log("Hello, my name is " + this.fullName + " and my favorite color is " + this.color + ".");
  };
}
*/

class Person {
  constructor(fullName, color) {
    this.fullName = fullName;
    this.color = color;
  }

  getFullName() {
    return this.fullName;
  }

  greet() {
    console.log("Hello, my name is " + this.fullName + " and my favorite color is " + this.color + ".");
  }
}


// module.exports = Person;
export default Person;
