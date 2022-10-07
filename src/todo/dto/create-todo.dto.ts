/* Using a dto to reduce number of operations 
   (This doesn't make much difference in this application,
    but would be very useful in a larger or scalable applicaiton)
*/

// ID is not needed here as it will be set automatically in todo.service
export class CreateTodoDto{
    task: string;
}