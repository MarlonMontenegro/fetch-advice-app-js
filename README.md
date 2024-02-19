# Frontend Mentor - Advice generator app

![Design preview for the Advice generator app coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](![image](https://github.com/MarlonMontenegro/fetch-advice-app-js/assets/103525183/51367a25-239d-4af7-aecb-47c64a6559f6))

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- javascript
- JavaScript Fetch API


### What I learned

Throughout this project, I gained valuable skills in utilizing JavaScript's fetch function with a third-party API. I learned to effectively make HTTP requests, handle responses, and dynamically update my application's content based on the received data. This experience provided me with a solid understanding of interacting with external APIs, enhancing the overall interactivity of my web applications.

```js
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
```

### Useful resources

- [MDN WEB DOCS](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This helped me to understand how to use fetch API in javascript

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Marlon Montenegr]([https://www.your-site.com](https://marlonmontenegro.github.io/montenegro-portfolio/))
- Frontend Mentor - [@MarlonMontenegro]([https://www.frontendmentor.io/profile/yourusername](https://www.frontendmentor.io/profile/MarlonMontenegro))

