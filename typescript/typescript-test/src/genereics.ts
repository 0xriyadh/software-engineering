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
function firstElementFix<T>(arr: T[]): T {
    return arr[0];
}

const valueFix = firstElementFix([1, 2, 3]); // number
console.log(valueFix / 2); // no error

const firstNameFix = firstElementFix(["Riyadh", "John", "Doe"]); // string
console.log(firstNameFix.toUpperCase()); // no error