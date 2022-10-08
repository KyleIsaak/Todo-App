export default async function deleteHandler(ID){

    async function makeRequest (ID){

        const path1 = 'http://localhost:3000/todo/todo/';
        const newPath = path1 + ID;

        //console.log("Path: ", newPath)
        //console.log(ID)
        
        // Make HTTP DELETE request to todo.controller functions
        fetch(newPath,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
    }

    makeRequest (ID)

    console.log("*** Item ", ID, " deleted! ***")
    return;
}