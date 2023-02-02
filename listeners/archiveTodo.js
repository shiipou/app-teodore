'use strict'

const todoService = require("../services/todo");


module.exports = async (props, event, api) => {
    props.archived = true
    return todoService.update(api, props)
}
