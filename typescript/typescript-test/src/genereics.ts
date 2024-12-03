type Input = number | string;

function firstElement(arr: Input[]): Input {
    return arr[0];
}

// we don't want these to compile:
// we want error here
// we want either all numbers or all strings
// however as we set the type of the array to be Input[], the values can be either number or string
// that's why ts is unable to infer the type of the array
const value = firstElement([1, 2, "Riyadh"]);

const firstName = firstElement(["Riyadh", "John", "Doe"]);
// also here we can't infer the type of the array, even though we have passed an array of strings
// as a result we won't able to perform any string operations on the values of the array
// console.log(firstName.toUpperCase()); // error

// ⭐️ First Fix
type InputFix = number[] | string[];
function firstElementFix1(arr: InputFix): Input {
    return arr[0];
}

// const valueFix1 = firstElementFix1([1, 2, "Riyadh"]); // error ❌, as we expected

const firstNameFix1 = firstElementFix1(["Riyadh", "John", "Doe"]);
// console.log(firstNameFix1.toUpperCase()); // however still getting error here, error ❌

// ⭐️ Better Fix
// generic function
// creating multiple variations of the function, maybe one for numbers and one for strings
function firstElementFix<T>(arr: T[]): T {
    return arr[0];
}

const firstNumber = firstElementFix<number>([1, 2, 3]); // number
console.log(firstNumber / 2); // no error

const firstString = firstElementFix<string>(["Riyadh", "John", "Doe"]); // string
console.log(firstString.toUpperCase()); // no error

const firstBoolean = firstElementFix<boolean>([true, false, true]); // boolean
console.log(firstBoolean); // no error

interface User {
    name: string;
    age: number;
    email?: string;
}

const users: User[] = [
    {
        name: "Riyadh",
        age: 25,
        email: "riyadh@gmail.com",
    },
    {
        name: "John",
        age: 30,
    },
    {
        name: "Doe",
        age: 35,
        email: "does@gmail.com",
    },
];

const firstUser = firstElementFix<User>(users); // User
console.log(firstUser.name.toLowerCase()); // no error