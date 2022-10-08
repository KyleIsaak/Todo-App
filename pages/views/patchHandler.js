var currentText;

export function updateEditText(newText){
    currentText = newText;
    //console.log("updated text to: ", textToAdd)
}

export default async function patchHandler(ID, newText){

    

    async function makeRequest (ID, currentText){

        const path1 = 'http://localhost:3000/todo/todo/';
        const newPath = path1 + ID;

        //console.log("Path: ", newPath)
        //console.log(ID)
        
        // Make HTTP DELETE request to todo.controller functions
        fetch(newPath,
        {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "task": currentText
              }),
        })
    }

    makeRequest (ID, currentText)

    console.log("*** Item ", ID, " deleted! ***")
    return;
}