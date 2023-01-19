'use strict'

const apiService = require('../services/api');
const todoService = require('../services/todo');    


module.exports = async (props, event, api) => {
    await todoService.create(api, {
        body: "Exemple",
        inProgress: true,
        user: "@me"
    })


    return {};
}