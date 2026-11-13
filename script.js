const jokeElement = document.getElementById("joke");
const punchlineElement = document.getElementById("punchline");
const jokeBtn = document.querySelector(".joke-btn");

const apiUrl = "https://dumbapis.com/joke";
// const apiUrl = "https://v2.jokeapi.dev/joke/Any?type=single&safe-mode";


async function getJoke() {
    try {
        jokeBtn.disabled = true;
        jokeBtn.textContent = "Loading...";

        const response = await fetch(apiUrl);

        if(!response.ok){
            throw new Error("API Request Faild");
        }

        const data = await response.json();
        if(data.error){
            throw new Error("Joke Not Found");
        }

        jokeElement.textContent = data.joke;
        punchlineElement.textContent = "";
        

    } catch (error) {
        jokeElement.textContent = "Oops! Something went wrong.";
        punchlineElement.textContent = "Please try again.";

        console.log(error);
    } finally {
        jokeBtn.disabled = false;
        jokeBtn.textContent = "New Joke";
    }
    
}

jokeBtn.addEventListener("click", getJoke);

// First joke when page loads
getJoke();
