type KeyInputWithoutEnums = "UP" | "DOWN" | "LEFT" | "RIGHT";

function doSomethingWithoutEnums(keyPressed: KeyInputWithoutEnums) {
    console.log(keyPressed);
}

// making it more readable
enum KeyInput {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
function doSomething(keyPressed: KeyInput) {
    console.log(keyPressed);
}