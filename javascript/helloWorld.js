let message = "This is in the Global Scope";

{
    let message = "This is inside a block scope";
}

function myMessage() { 
    let message = "This is inside a function scope";
    return message;
}