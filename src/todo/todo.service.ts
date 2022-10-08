import { Injectable } from "@nestjs/common";
import { UpdateTodoDto } from "./dto/update-todo.dto"
import { v4 as uuidv4 } from "uuid";

import { Todo } from "./schemas/todo.schema";
import { TodoRepository } from "./todo.repository";

@Injectable()
export class TodoService{
    constructor(private readonly todoRepository: TodoRepository){}

    async getTodoByID(todoID: string): Promise<Todo>{
        return this.todoRepository.findOne({todoID})
    }


    async getTodos(): Promise<Todo[]>{
        return this.todoRepository.find({});
    }

    async createTodo(task: string): Promise<Todo>{
        return this.todoRepository.create({
            todoID: uuidv4(), // Generates random id
            task
        })
    }

    async updateTodo(todoID: string, todoUpdates: UpdateTodoDto): Promise<Todo>{
        return this.todoRepository.findOneAndUpdate({todoID}, todoUpdates);
    }

    async deleteTodo(todoID: string): Promise<Todo>{
        this.todoRepository.findOneAndDelete({todoID});
        return
    }

}


