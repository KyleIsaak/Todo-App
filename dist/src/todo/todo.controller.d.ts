import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo } from "./schemas/todo.schema";
import { TodoService } from "./todo.service";
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getTodo(todoID: string): Promise<Todo>;
    getTodos(): Promise<Todo[]>;
    createTodo(CreateTodoDto: CreateTodoDto): Promise<Todo>;
    updateTodo(todoID: string, UpdateTodoDto: UpdateTodoDto): Promise<Todo>;
    deleteTodo(todoID: string): Promise<Todo>;
}
