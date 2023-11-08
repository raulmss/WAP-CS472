// 1. using 5 ways to fix the errors which will print below in the console:
// Our Group: John
// Our Group: Pete
// Our Group: Alice

console.log("Arrow Function-----------------")
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            console.log(this.title + ": " + student
            );
        });
    }
};
group.showList() 

console.log("Self-----------------")
let group2 = {
    title: "Our Group2",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        let self = this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student
            );
        });
    }
};

group2.showList()

console.log("Bind-----------------")
let group3 = {
    title: "Our Group3",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student
            );
        }.bind(this));
    }
};

group3.showList()

console.log("Apply & Call-----------------")
let group4 = {
    title: "Our Group4",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        var self =  this
        var innerFunction = function (student) {
            console.log(this.title + ": " + student);
        };

        this.students.forEach(function (student) {
            innerFunction.apply(self, [student]);
        });
        this.students.forEach(function (student) {
            innerFunction.call(self, student);
        });
    }
};

group4.showList();


// 2.  In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.
// What is console.log going to show?

// let i = 0;

// setTimeout(() => console.log(i), 100); // ?

// // assume that the time to execute this function is >100ms

// for(let j = 0; j < 100000000; j++) {

//   i++;

// }