//part1
async function getTodoById(id) {
    const response= await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const todo = await response.json()
    return todo
}
getTodoById(1).then(value => console.log(value));
getTodoById(2).then(value => console.log(value));
getTodoById(3).then(value => console.log(value));

//Part2
async function getTodoByUserId(userId) {
    const response2= await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const user = await response2.json()
    return user
}
getTodoByUserId(1).then(value => console.log(value));
getTodoByUserId(2).then(value => console.log(value));
getTodoByUserId(3).then(value => console.log(value));

