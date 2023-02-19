import { FilterQuery, Model, _FilterQuery } from "mongoose";
import { Todo, TodoDocument } from "./schemas/todo.schema";
export declare class TodoRepository {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    findOne(todoFilterQuery: FilterQuery<Todo>): Promise<Todo>;
    find(todoFilterQuery: _FilterQuery<Todo>): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    findOneAndUpdate(todoFilterQuery: FilterQuery<Todo>, todo: Partial<Todo>): Promise<Todo>;
    findOneAndDelete(todoFilterQuery: FilterQuery<Todo>): Promise<void>;
}
