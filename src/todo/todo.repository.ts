import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model, _FilterQuery } from "mongoose";
import { Todo, TodoDocument } from "./schemas/todo.schema";


@Injectable()
export class TodoRepository{
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

    /*Additional DB functions*/    
    async findOne(todoFilterQuery: FilterQuery<Todo>): Promise<Todo>{
        return this.todoModel.findOne(todoFilterQuery);
    }

    async find(todoFilterQuery: _FilterQuery<Todo>): Promise<Todo[]>{
        return await this.todoModel.find(todoFilterQuery)
    }

    async create(todo: Todo): Promise<Todo>{
        const newTodo = new this.todoModel(todo);
        return newTodo.save()
    }

    async findOneAndUpdate(todoFilterQuery: FilterQuery<Todo>, todo: Partial<Todo>): Promise<Todo>{
        return this.todoModel.findOneAndUpdate(todoFilterQuery, todo, {new: true});
    }

    async findOneAndDelete(todoFilterQuery: FilterQuery<Todo>){
        this.todoModel.deleteOne(todoFilterQuery).exec();
        console.log("ITEM DELETED")
        return
    }

}