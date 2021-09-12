
const state = {
    model: {},
};

const actions = {
    getBookMarks({ state }) {
        if (localStorage.getItem("bookmarks")) {
            try {
                state.model = JSON.parse(localStorage.getItem("bookmarks"));
            } catch (e) {
                localStorage.removeItem("bookmarks");
            }
        }
    },
    addArtical({ state }, articalMode) {
        if (!state.model) return;
        state.model[articalMode.uri] = articalMode;
        let parsed = JSON.stringify(state.model);
        localStorage.setItem("bookmarks", parsed);
    },
    isInBookmarks({ state }, key) {
        if (state.model[key]) return state.model[key] != null
        return false;
    },
    removeAtrical({ state }, articalMode) {
        delete state.model[articalMode.uri];
        let parsed = JSON.stringify(state.model);
        localStorage.setItem("bookmarks", parsed);
    },

};

const mutations = {
    setHomeModel(state) {
        state.model = localStorage.getItem("bookMarks");
    },
};
const getters = {};

export const Bookmark = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
