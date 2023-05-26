// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],

    devtools: {
        enabled: true
    },

    app: {
        head: {
            title: "Fakestore APP in Nuxt 3",
            link: [
                { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.main.css" },
                { rel: "icon", href: "./public/favicon.ico" }
            ],
            meta: [
                { name: "description", content: "Fakestore APP in Nuxt 3" },
                { name: "author", content: "Nuxt 3 app" }
            ]
        }
    }
})
