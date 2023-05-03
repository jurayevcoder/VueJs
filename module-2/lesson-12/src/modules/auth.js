import axios from '../services/axios';

const authstore = {
    state: () => ({
        loading: true,
        errorMessage: "",
        username: "",
    }),
    mutations: {
        SET_LOAD(state) {
            state.loading = false;
        },
        SET_ERROR(state, err) {
            state.errorMessage = err;
        },
        SET_USERNAME(state, username) {
            state.username = username;
        }
    },

    actions: {
        async signin({ commit }, payload) {
            try {
                const response = await axios.post("/user/login", payload)
                localStorage.setItem('token', response?.data?.tokens?.access_token);
                commit('SET_USERNAME', response.data.first_name);
                commit("SET_LOAD");
                return response
            } catch (err) {
                commit('SET_ERROR', err);
            }
        }
    }
}

export default authstore;