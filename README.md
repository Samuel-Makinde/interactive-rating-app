# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot
![desktop-design](https://user-images.githubusercontent.com/79846013/223248127-28915f9c-b6ff-46e7-92ed-eb8dbf2724d6.jpg)
![desktop-thank-you-state](https://user-images.githubusercontent.com/79846013/223248418-0bcc28e3-4fa2-4073-bdc4-b99d195c455b.jpg)


### Links

- Solution URL: []
- Live Site URL: [https://fabulous-zuccutto-47b6d2.netlify.app/]

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javscript ForEach

### What I learned

This project help me to practice forEach() method and it can loop through html tag name


```js
const proudOfThisFunc = () => {
  spans.forEach(span =>{
    span.addEventListener("click", () =>{
        spans.forEach( span =>{
            span.classList.remove("active");
        })
        span.classList.add("active");
        messageEl.textContent = `You selected ${span.textContent} out of 5`;
    })
})
}
```
## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Samuel-Makinde)


