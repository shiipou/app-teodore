'use strict'

const apiService = require("./api");

module.exports = {
    async all(api) {
        return (await apiService.executeQuery(api, "users", {})).data;
    },
    async one(api, id) {
        return (await apiService.executeQuery(api, "users", { id: id } )).data[0];
    },
    async create(api, user) {
        return (await apiService.createDoc(api, "users", user)).data;
    },
    async update(api, user) {
        return (await apiService.updateDoc(api, "users", user)).data;
    }
}
