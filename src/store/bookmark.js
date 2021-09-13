
const state = {
    model: {},
};

const actions = {
    //  get the bookmark object from the local storage if it's exist 
    getBookMarks({ commit }) {
        if (localStorage.getItem("bookmarks")) {
            try {
                let bookmarkModel = JSON.parse(localStorage.getItem("bookmarks"));
                commit("setBookmarkModel", bookmarkModel)
            } catch (e) {
                localStorage.removeItem("bookmarks");
            }
        }
    },

    // push the new article to the model object 
    addArticle({ state, dispatch }, articalMode) {
        if (!state.model) return;
        state.model[articalMode.uri] = articalMode;
        // called to save the model after updating  it 
        dispatch("saveBookmarks")
        dispatch("getBookMarks")
    },
    removeArticle({ state, dispatch }, articalMode) {
        dispatch("getBookMarks")
        delete state.model[articalMode.uri];
        dispatch("saveBookmarks")
    },
    // the local storage save unit I call it after any update in the model to save 
    saveBookmarks() {
        let parsed = JSON.stringify(state.model);
        localStorage.setItem("bookmarks", parsed);
    }

};

const mutations = {
    setBookmarkModel(state, model) {
        state.model = model;
    }

};
const getters = {};

export const Bookmark = {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
