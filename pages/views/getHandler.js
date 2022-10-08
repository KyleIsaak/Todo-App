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
            //console.log('Succesfully returned', results.json())
            return results.json();
        } 
        })
        .then((data) => {
            let listItems = data;
            //console.log(listItems);

            return listItems;
        })
    }

    var resultsOfRequest = makeRequest ()

    //console.log("returned data")
    //console.log("resultsOfRequest: ", resultsOfRequest)
    return resultsOfRequest;
}