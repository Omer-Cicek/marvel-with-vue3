import { createStore } from "vuex";
import createPersistedState from "vuex-plugin-persistedstate";

export default createStore({
    state: {
        detailData:{}
    },
    mutations: {
        addDetailData(state, item) {
            state.detailData = item
        },
        deleteDetailData(state) {
            state.detailData= {}
        }
    },
    plugins: [createPersistedState()], //to not be delete store data when reload
});