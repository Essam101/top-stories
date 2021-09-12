
import axios from 'axios';
const apiKey = "apPJiGPuOHy0VaUpaSYprUPHNEl55nwZ";
const state = {
    homeModel: [],
    articaleModel: {}
};

const actions = {
    async getHomeModel({ commit }, urlQuery = "home.json") {
        axios
            .get(`https://api.nytimes.com/svc/topstories/v2/${urlQuery}?api-key=${apiKey}`)
            .then(response => commit("setHomeModel", response.data)).catch(error => console.log(error))

    },
    articaleDetails({ commit }, articaleModel) {
        commit("setAtricaleModel", articaleModel)
    }
};

const mutations = {
    setHomeModel(state, model) {
        state.homeModel = model;
    },
    setAtricaleModel(state, model) {
        state.articaleModel = model;

    },
};
const getters = {};

export const Home = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
