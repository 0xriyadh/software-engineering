for (var i = 0; i < 3; i++) {
    const myFunc = () => {
        console.log(i);
    };
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 1000);
}

for (let i = 0; i < 3; i++) {
    const myFunc = () => {
        console.log(i);
    };
    console.log(i);
    console.dir(myFunc);
    setTimeout(myFunc, 1000);
}
