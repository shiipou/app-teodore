'use strict'

const apiService = require("./api");

module.exports = {
    async all(api) {
        return (await apiService.executeQuery(api, "todo", {})).data;
    },
    async create(api, todo) {
        return (await apiService.createDoc(api, "todo", todo)).data;
    },
    async update(api, todo) {
        return (await apiService.updateDoc(api, "todo", todo)).data;
    },
    async delete(api, todo) {
        return (await apiService.deleteDoc(api, "todo", todo)).data;
    },
    async getRoot(api) {
        // get any item with no parent
        return (await apiService.executeQuery(api, "todo", { filter: { parent: null } })).data;
    },
    async childrenOf(api, todo) {
        // get any item with the given parent
        return (await apiService.executeQuery(api, "todo", { filter: { parent: todo._id } })).data;
    }
}
