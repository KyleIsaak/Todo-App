import {Body, Controller, Get, Param, Patch, Post, Delete} from "@nestjs/common"
import { CreateTodoDto } from "./dto/create-todo.dto"
import { UpdateTodoDto } from "./dto/update-todo.dto"

import { Todo } from "./schemas/todo.schema"
import { TodoService } from "./todo.service"


// The following functions allow interactions with the DB
// The Get, Post, Patch decorators make it easy to use a
// program such as postman to make external requests
@Controller('todo')
export class TodoController{
    constructor(private readonly todoService: TodoService){}
    
    @Get(':todoID')
    async getTodo(@Param('todoID') todoID: string): Promise<Todo>{
        return this.todoService.getTodoByID(todoID);
    }

    @Get()
    async getTodos(): Promise<Todo[]>{
        return this.todoService.getTodos();
    }

    // Create and Update will use a DTO to reduce the # of operations
    @Post()
    async createTodo(@Body() CreateTodoDto: CreateTodoDto): Promise<Todo>{
        return this.todoService.createTodo(CreateTodoDto.task)
    }

    @Patch(':todoID')
    async updateTodo(@Param('todoID') todoID: string, @Body() UpdateTodoDto: UpdateTodoDto): Promise<Todo>{
        return this.todoService.updateTodo(todoID, UpdateTodoDto)
    }

    @Delete(':todoID')
    async deleteTodo(@Param('todoID') todoID: string): Promise<Todo>{
        this.todoService.deleteTodo(todoID)
        return
    }

}
