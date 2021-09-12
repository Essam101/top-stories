import Vue from "vue";
import Vuex from "vuex";


import { Bookmark } from "@/store/bookmark";
import { Home } from "@/store/home";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Bookmark,
        Home
    }
});
