
if( 5 > 3 ) {
    console.log("is greater than");
}

if( "cat".length === 3 ) {
    console.log("is the length");
}

if( "cat" != "dog" ) {
    console.log("not the same");
}
var person = {
    name: "Bobby",
    age: 12
  }
if(person.age >= 18 ) {
    console.log(person.name +  "is allowd to go to the movies");
} else {
  console.log(person.name +  "is not allowd to go to the movies");
}
if( person.name.charAt(0) === "B" ) {
    console.log( person.name + " is allowed to go to the movie");
} else {
    console.log( person.name + " is allowed to go to the movie");
}
if( person.name.charAt(0) === "B" && person.age >=18 ) {
    console.log( person.name + " is allowed to go to the movie");
} else {
    console.log( person.name + " is allowed to go to the movie");
}

if( 1 === "1" ) {
    console.log("Strict");
} else if( 1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}
if( 1 <= 2 && 2 === 4) {
    console.log("yes");
} else {
    console.log("no");
}
if( typeof "dog" === "string") {
    console.log("This is a String")
}
if( typeof "true" === "boolean") {
    console.log("This is a Boolean");
} else {
    console.log("This is not a Boolean")
}

var myNum = "10";

if( typeof myNum !== "undefined") {
    console.log("This variable is defined");
} else {
    console.log("This variable is not defined")
}
if( "s" > 12) {
    console.log("This is True");
} else {
    console.log("This is False")
}
var myNum = 20;

20 % 2 === 0 ? console.log("The number is Even") : console.log("The number is Odd")