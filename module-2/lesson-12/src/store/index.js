import { createStore } from 'vuex'
import authstore from '../modules/auth'

export const store = createStore({
    modules: {
        authstore
    }
})