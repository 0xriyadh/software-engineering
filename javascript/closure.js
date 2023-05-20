var name = "John Doe";
var age = 42;

var printPersonDetails = function () { 
    console.log("Name: " + name + ", Age: " + age);
}

printPersonDetails();

// The above code is the simplest example of a closure. We can think of closure as a child who has access to the properties of its parent. In the above example, the function printPersonDetails is a child of the global scope. It has access to the variables name and age, which are defined in the global scope. This is sometimes known as lexical scoping.
// Through console.dir(printPersonDetails), we can see that the function printPersonDetails has access to the global scope. This means a child always carries a reference to its parent. This is the reason why we can access the variables name and age inside the function printPersonDetails.

var printPersonDetails2 = function () { 
    return function () { 
        console.log("Name: " + name + ", Age: " + age);
    }
}

var print = printPersonDetails2();
