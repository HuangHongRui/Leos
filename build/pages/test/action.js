"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionType = require("./actionType");
exports.addTodo = () => ({
    type: ActionType.ADD
});
exports.deleteTodo = () => ({
    type: ActionType.DELETE
});
