// Get references to DOM elements
const counterElement = document.getElementById("counter");
const quoteElement = document.getElementById("quote");

// Initialize a counter
let counter = 0;

// URL of the API to fetch advice
const url = "https://api.adviceslip.com/advice";

/**
 * Async function to fetch advice from the API.
 * Updates the counter and displays the advice on the webpage.
 */
async function getAdvice() {
    try {
        // Make a request to the API and await the response
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 200) {
            // Extract the advice from the response and update the counter
            const adviceFromApi = data.slip.advice;
            incrementCounterByOne();
            // Display the advice in the DOM element
            quoteElement.textContent = `"${adviceFromApi}"`;

        } else {
            console.log('Server Error', data.error.message);
        }
    } catch (error) {
        console.log('Fetch Error', error);
    }
}

/**
 * Function to increment the counter and update the corresponding DOM element.
 */
function incrementCounterByOne() {

    counter++;
    counterElement.textContent = `Advice #${counter}`;
}



