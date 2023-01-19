'use strict'

const { default: axios } = require("axios");
const apiService = require("./api");

module.exports = {
    all(api) {
        return apiService.executeQuery(api, "todo", {});
    },
    create(api, todo) {
        return apiService.createDoc(api, "todo", todo);
    },
    update(api, todo) {
        return apiService.updateDoc(api, "todo", todo);
    },
    delete(api, todo) {
        return apiService.deleteDoc(api, "todo", todo);
    }
}
