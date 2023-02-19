"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const todo_repository_1 = require("./todo.repository");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async getTodoByID(todoID) {
        return this.todoRepository.findOne({ todoID });
    }
    async getTodos() {
        return this.todoRepository.find({});
    }
    async createTodo(task) {
        return this.todoRepository.create({
            todoID: (0, uuid_1.v4)(),
            task
        });
    }
    async updateTodo(todoID, todoUpdates) {
        return this.todoRepository.findOneAndUpdate({ todoID }, todoUpdates);
    }
    async deleteTodo(todoID) {
        this.todoRepository.findOneAndDelete({ todoID });
        return;
    }
};
TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [todo_repository_1.TodoRepository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map