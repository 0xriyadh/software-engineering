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
    if (keyPressed === KeyInput.UP) {
        console.log("UP");
    } else if (keyPressed === KeyInput.DOWN) {
        console.log("DOWN");
    }
}