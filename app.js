const { createApp } = Vue;

createApp({
  data() {
    return {
      siteName: "After School Classes",
      cart: JSON.parse(localStorage.getItem("cart") || "[]"), // persist
      lessons: [
        { id: 1, subject: "Math",    location: "Location: Hendon",     price: 100, spaces: 5, image: "images/math.jpg" },
        { id: 2, subject: "Science", location: "Location: Colindale",  price: 90,  spaces: 5, image: "images/science.jpg" },
        { id: 3, subject: "Music",   location: "Location: Brent Cross",price: 80,  spaces: 5, image: "images/music.jpg" }
      ]
    };
  },
  computed: {
    cartCount() { return this.cart.length; }
  },
  watch: {
    cart: {
      handler(v){ localStorage.setItem("cart", JSON.stringify(v)); },
      deep: true
    }
  },
  methods: {
    book(lesson) {
      if (lesson.spaces <= 0) return;
      this.cart.push({ id: lesson.id, subject: lesson.subject, price: lesson.price });
      lesson.spaces--;
    },
    viewCart() {
      const total = this.cart.reduce((s,i)=>s+i.price,0);
      alert(`🛒 ${this.cart.length} item(s)\n` +
            this.cart.map(i=>`• ${i.subject} (£${i.price})`).join("\n") +
            `\n\nTotal: £${total}`);
    }
  }
}).mount("#app");
