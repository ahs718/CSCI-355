/** 6. Promise.all, fetch, and Error Propagation
 * Write a function that fetches data from three mock URLs (use Promise.resolve to simulate).
 * Use Promise.all to handle the requests simultaneously and log "One of the requests failed" if any of them fail. */

function fetchData() {
    // Simulate fetch with Promise.resolve and Promise.reject
    const requests = [
        Promise.resolve("Data from URL 1"),
        Promise.resolve("Data from URL 2"),
        Promise.reject("Failed to fetch data from URL 3"),
    ];

    // Using Promise.all to handle all requests
    Promise.all(requests)
        .then(responses => {
            console.log("All requests succeeded");
        })
        .catch(error => {
            console.log("One of the requests failed");
        });
}

fetchData(); // One of the requests failed
