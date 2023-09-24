const users = [
    {name: "Sasha", email: "Sasha@test.com", age: 34},
    {name: "Ksyusha", email: "Ksyusha@test.com", age: 27},
    {name: "Maksim", email: "Maksim@test.com", age: 29},
    {name: "Marina", email: "Marina@test.com", age: 23}
];
for (const {name, age, email} of users) {
    console.log(`${name} is ${age} years old and has email: ${email}`);
}