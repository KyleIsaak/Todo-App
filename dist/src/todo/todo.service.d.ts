import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Todo } from "./schemas/todo.schema";
import { TodoRepository } from "./todo.repository";
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: TodoRepository);
    getTodoByID(todoID: string): Promise<Todo>;
    getTodos(): Promise<Todo[]>;
    createTodo(task: string): Promise<Todo>;
    updateTodo(todoID: string, todoUpdates: UpdateTodoDto): Promise<Todo>;
    deleteTodo(todoID: string): Promise<Todo>;
}
