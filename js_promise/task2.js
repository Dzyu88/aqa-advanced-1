// Part1
function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => response.json());
}
getTodoById(1).then((value) => console.log(value));
getTodoById(2).then((value) => console.log(value));
getTodoById(3).then((value) => console.log(value));
getTodoById(4).then((value) => console.log(value));
getTodoById(5).then((value) => console.log(value));

//Part2
function getTodoByUserId(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json());
}
getTodoByUserId(1).then((value) => console.log(value));
getTodoByUserId(2).then((value) => console.log(value));
getTodoByUserId(3).then((value) => console.log(value));
getTodoByUserId(4).then((value) => console.log(value));
getTodoByUserId(5).then((value) => console.log(value));

//Part3
const promise1 = Promise.all([getTodoById(1),
    getTodoById(2), getTodoById(3), getTodoById(4), getTodoById(5)]);
promise1.then((results1) => console.log(results1));

//Part4
const promise2 = Promise.race([getTodoByUserId(1),
    getTodoByUserId(2), getTodoByUserId(3), getTodoByUserId(4), getTodoByUserId(5)]);
promise2.then((results2) => console.log(results2));


