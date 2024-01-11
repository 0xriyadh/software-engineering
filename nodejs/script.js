const fetchPostsBtn = document.getElementById("fetch-post");
const container = document.getElementById("container");

// Bad Approach (less readable)
const fetchPosts1 = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => console.log("FetchPosts1: ", posts));
};
// Better Approach
const fetchPosts2 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // response.json() returns a promise. This is used to catch the js
    const posts = await response.json();
    console.log("FetchPosts2: ", posts);
};

fetchPostsBtn.addEventListener("click", fetchPosts1);
fetchPostsBtn.addEventListener("click", fetchPosts2);