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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const todo_schema_1 = require("./schemas/todo.schema");
let TodoRepository = class TodoRepository {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    async findOne(todoFilterQuery) {
        return this.todoModel.findOne(todoFilterQuery);
    }
    async find(todoFilterQuery) {
        return await this.todoModel.find(todoFilterQuery);
    }
    async create(todo) {
        const newTodo = new this.todoModel(todo);
        return newTodo.save();
    }
    async findOneAndUpdate(todoFilterQuery, todo) {
        return this.todoModel.findOneAndUpdate(todoFilterQuery, todo, { new: true });
    }
    async findOneAndDelete(todoFilterQuery) {
        this.todoModel.deleteOne(todoFilterQuery).exec();
        console.log("ITEM DELETED");
        return;
    }
};
TodoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(todo_schema_1.Todo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TodoRepository);
exports.TodoRepository = TodoRepository;
//# sourceMappingURL=todo.repository.js.map