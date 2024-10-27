function debounce(func, delay) {
    let timeoutId;
    console.log("debounce");
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

const debounceSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
    // Make API call with the search query
}, 300);

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", (event) => {
    debounceSearch(event.target.value);
});
