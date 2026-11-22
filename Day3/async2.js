async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();


//posts is an array! Let's grab the first 3
const firstThree = posts.slice(0,3);

//Let's loop through them and print their titles
firstThree.forEach(post => {
    console.log(`Title: ${post.title}`)
});
}

fetchPosts();