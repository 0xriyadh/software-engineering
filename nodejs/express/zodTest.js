const { z } = require("zod");

const schema = z.coerce.string();
const result = schema.safeParse(JSON.stringify({ arr: [1, 2, 3], name: "John" }));
console.log(result);