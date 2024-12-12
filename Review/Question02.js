/** 2. async/await, Error Handling, and Default Parameters
 * Write an async function that fetches JSON data from a URL (mocked with Promise.resolve).
 * If no URL is provided, use a default URL.
 * Handle errors by logging "Failed to fetch data" and returning an empty object. */

async function fetchData(url = "https://jsonplaceholder.typicode.com/posts") {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data");
        return {};
    }
}

const data = await fetchData();
console.log(data[0]);
