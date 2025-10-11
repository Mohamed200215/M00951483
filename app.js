// Pull out the createApp function from Vue
const { createApp } = Vue;

// Create a new Vue app
createApp({
  // The data function holds the app’s information
  data() {
    return {
      // The website name shown in the heading
      siteName: "After School Classes",

      // A list of lessons to display on the page
      lessons: [
        { id: 1, subject: "Math", location: "Hendon", price: 100, spaces: 5 },
        { id: 2, subject: "Science", location: "Colindale", price: 90, spaces: 5 },
        { id: 3, subject: "Music", location: "Brent Cross", price: 80, spaces: 5 }
      ]
    };
  }
  // Mount the Vue app to the HTML element with id="app"
}).mount("#app");
