'use strict'

const apiService = require('../services/api');
const todoService = require('../services/todo');
const userService = require('../services/todo');


module.exports = async (props, event, api) => {
    await todoService.create(api, {
        body: "Exemple",
        inProgress: true,
        archived: false,
        user: "@me",
        parent: null
    })
    await userService.create(api, {
        id: "@me",
        currentTask: null
    })

    return {};
}
