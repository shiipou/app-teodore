'use strict'

const userService = require("../services/users");


module.exports = async (props, event, api) => {
    const user = await userService.one(api, { id: '@me' })
    console.log(props, user)
    user.currentTask = props._id
    return userService.update(api, user)
}
