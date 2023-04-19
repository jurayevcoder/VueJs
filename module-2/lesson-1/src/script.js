const app = Vue.createApp({
    data() {
        return {
            text: "Hello Vue.js",
            number: 0,
        }
    },

    methods: {
        getSay() {
            console.log("Hello world");
        },
        INCREMENT() {
            this.number += 1
        },
        DECREMENT() {
            this.number -= 1
        }
    }
})

app.mount(document.getElementById('root'));