async function fetchWithErrorHandling() {
    try{
        console.log("Trying to fetch data...")

        //This URL will fail (404 error)
        const response = await fetch('https://jsonplaceholder.typicode.com/this_data_does_not_exist');

        if(!response.ok){
            throw new Error("server responded with an error!");
        }

        const data = await response.json();
        console.log(data);

    }catch (error) {
        //if ANYTHING fails in the 'try' block, the code jumps down here 
        console.log("Oops! Something went wrong.");
        console.log("The error is:", error.message);
    }
    
}

fetchWithErrorHandling();