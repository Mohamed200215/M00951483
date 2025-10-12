const { createApp } = Vue;

createApp({
  data() {
    return {
      siteName: "After School Classes",
      lessons: [
        { id: 1, subject: "Math", location: "Location: Hendon", price: 100, image: "images/math.jpg" },
        { id: 2, subject: "Science", location: "Location: Colindale", price: 90, image: "images/science.jpg" },
        { id: 3, subject: "Music", location: "Location: Brent Cross", price: 80, image: "images/music.jpg" }
      ]
    };
  },
  methods: {
    book(lesson) {
      alert(`Booked: ${lesson.subject} in ${lesson.location} (£${lesson.price})`);
    }
  }
}).mount("#app");

