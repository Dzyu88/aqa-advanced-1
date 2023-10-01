//Part1
class TodoController {
    constructor(baseUrl1) {
        this._baseUrl1 = baseUrl1
    }
    async getTodoById(id) {
        const response1= await fetch(`${this._baseUrl1}/todos/${id}`)
        const todo = await response1.json()
        return todo
    }

}
const controller1 = new TodoController("https://jsonplaceholder.typicode.com")
controller1.getTodoById(1).then((value1) => console.log(value1));
controller1.getTodoById(2).then((value1) => console.log(value1));
controller1.getTodoById(3).then((value1) => console.log(value1));

//Part2
class UserController {
    constructor(baseUrl2) {
        this._baseUrl2 = baseUrl2
    }
    async getUserById(userId) {
        const response2= await fetch(`${this._baseUrl2}/users/${userId}`)
        const user = await response2.json()
        return user
    }

}
const controller2 = new UserController("https://jsonplaceholder.typicode.com")
controller2.getUserById(1).then((value2) => console.log(value2));
controller2.getUserById(2).then((value2) => console.log(value2));
controller2.getUserById(3).then((value2) => console.log(value2));