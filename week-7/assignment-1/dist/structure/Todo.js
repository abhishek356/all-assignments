"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor({ title, description, done, userId }) {
        this.title = title,
            this.description = description,
            this.done = done,
            this.userId = userId;
    }
}
exports.Todo = Todo;
