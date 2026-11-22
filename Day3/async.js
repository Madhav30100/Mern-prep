async function fetchUserData() {
    console.log("1.Starting to fetch data....(This takes time)")

//'await' means: pause this function, but let the rest of the program run while we wait for the internet.
const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

// The response comes back as a raw data. we convert it into javascript object using .json()
const data = await response.json();

console.log("2.Data received")
console.log(`User's Name: ${data.name}`)
console.log(`User's Email: ${data.email}`)
console.log("3. Done");
}

fetchUserData();

//we will put this outside the function to prove it doesn't wait.
console.log("I am at the bottom of the file ,but I will print FIRST");