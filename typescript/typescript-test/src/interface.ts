interface USER {
    name: string;
    age: number;
    email: string;
}

function isLegal(user: USER): boolean {
    return user.age >= 18;
}

const user: USER = {
    name: "John Doe",
    age: 25,
    email: "johndoe@gmail.com",
};

console.log(isLegal(user)); // true