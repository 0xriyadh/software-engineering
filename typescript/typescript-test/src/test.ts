const greetUser = (name: string) => {
    console.log(`Hello, ${name}!`);
}

function callAfterDelay(callback: () => void, delay: number) {
    setTimeout(callback, delay);
}

callAfterDelay(() => greetUser("Alice"), 1000);
