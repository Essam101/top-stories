
import axios from 'axios';
import router from '../router';
const apiKey = "apPJiGPuOHy0VaUpaSYprUPHNEl55nwZ";
const state = {
    homeModel: [],
    articleModel: {},
    isLoading: false,
};

const actions = {
    // I do call this function every time I want to bring a new different section 
    async getHomeModel({ commit, state }) {
        let urlQuery = router.history.current.query["section"] != undefined ? router.history.current.query["section"] : "home"
        state.isLoading = true;
        await axios
            .get(`https://api.nytimes.com/svc/topstories/v2/${urlQuery}.json?api-key=${apiKey}`)
            .then(response => commit("setHomeModel", response.data)).catch(error => console.log(error))
        state.isLoading = false;

    },
    // set the article in my state  so I can assess it from a different screen
    articleDetails({ commit }, articleModel) {
        commit("setAtricaleModel", articleModel)
    }
};

const mutations = {
    setHomeModel(state, model) {
        state.homeModel = model;
    },
    setAtricaleModel(state, model) {
        state.articleModel = model;

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
