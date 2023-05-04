import { createRouter } from 'vuex'

const store = createRouter({
  state() {
    return { number: 0 };
  },

  mutations: {
    INCREMENT(state) {
      state.number++
    }
  }
})

export default store