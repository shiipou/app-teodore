'use strict'

const todoService = require("../services/todo");
const userService = require("../services/users");


module.exports = async (props, event, api) => {
    const res = await userService.all(api)
    const user = res.data[0]
    console.log(event, res.data)
    return todoService.create(api, {
        body: event.value.todoBody,
        inProgress: true,
        archived: false,
        user: "@me",
        parent: user.currentTask
    })
}
