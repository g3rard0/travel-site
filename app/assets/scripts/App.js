var $ = require('jquery');
// var Person = require("./modules/Person");
import Person from "./modules/Person";


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


$("h1").hide();
