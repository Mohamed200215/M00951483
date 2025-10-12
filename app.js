/* 
  app.js
  This is the JavaScript file that controls how Vue works on the page.
  It stores the data for each lesson (like subject, location, price, image)
  and connects that data to the HTML automatically.
*/

// Pull the createApp function from Vue (used to make a Vue app)
const { createApp } = Vue;

// Create the Vue app
createApp({
  // Data section: holds all variables and lesson info
  data() {
    return {
      siteName: "After School Classes", // Website title shown at the top

      // Array of lessons shown as boxes
      lessons: [
        // Each object below is one lesson box
        { id: 1, subject: "Math", location: "Location: Hendon", price: 100, image: "images/math.jpg" },
        { id: 2, subject: "Science", location: "Location: Colindale", price: 90, image: "images/science.jpg" },
        { id: 3, subject: "Music", location: "Location: Brent Cross", price: 80, image: "images/music.jpg" }
      ]
    };
  }
  // Mounts the Vue app to the <div id="app"> in index.html
}).mount("#app");
