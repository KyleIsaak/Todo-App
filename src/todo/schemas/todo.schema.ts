import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose";

export type TodoDocument = Todo & Document;

/* Be careful not to accidentally import the MUI schema here*/
@Schema()
export class Todo{
    @Prop()
    todoID: string;

    @Prop()
    task: string;
}

/*Export to make usable by todo.module*/
export const TodoSchema = SchemaFactory.createForClass(Todo)