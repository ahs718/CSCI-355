const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("joke-btn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// Using async/await
async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };

    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
}
