export default async function getHandler(){

    async function makeRequest (){
        
        // Make HTTP GET request to todo.controller functions
        return fetch('http://localhost:3000/todo/todo',
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        // if the results are valid, update the list
        .then((results) => {
        if (results.ok){
            return results.json();
        } 
        })
        .then((data) => {
            let listItems = data;
            return listItems;
        })
    }

    var resultsOfRequest = makeRequest ();

    //console.log("returned data"); // Testing
    //console.log("resultsOfRequest: ", resultsOfRequest); // Testing
    
    return resultsOfRequest;
}