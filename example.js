// Another example
const userLoggedIn = (ms) => new Promise ((resolve) => setTimeout(resolve, ms));
​
userLoggedIn(3000)
    .then(() => console.log('We\'re logging you in!'));
​
let loadSite = () => {
    console.log('loading the site');
};
​
​
loadSite();