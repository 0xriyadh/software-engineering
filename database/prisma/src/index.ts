import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insetUser() {
    await prisma.user.create({
        data: {
            firstName: "Alice",
            lastName: "Smith",
            email: "alice@gmail.com",
            password: "123456",
        },
    });

    await prisma.user.create({
        data: {
            firstName: "Bob",
            lastName: "Smith",
            email: "bob@gma.com",
            password: "123456",
        },
    });

    await prisma.user.create({
        data: {
            firstName: "John",
            lastName: "Smith",
            email: "john@fgasfd.com",
            password: "123456",
        },
    });
}

async function getAllUsers() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
        },
    });
    console.log(users);
}

// insetUser()
//     .catch((e) => {
//         throw e;
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     });

getAllUsers()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
