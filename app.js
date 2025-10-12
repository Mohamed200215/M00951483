const { createApp } = Vue;

createApp({
  data() {
    return {
      siteName: "After School Classes",
      lessons: [
        { id: 1, subject: "Math", location: "Hendon", price: 100, image: "images/math.jpg" },
        { id: 2, subject: "Science", location: "Colindale", price: 90, image: "images/science.jpg" },
        { id: 3, subject: "Music", location: "Brent Cross", price: 80, image: "images/music.jpg" }
      ]
    };
  }
}).mount("#app");
