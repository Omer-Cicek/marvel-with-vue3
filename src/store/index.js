import { createStore } from "vuex";

export default createStore({
    state: {
        detailData:{}
    },
    mutations: {
        addDetailData(state, item) {
            console.log( item , "itemmm");
            state.detailData = item
        },
        deleteDetailData(state) {
            state.detailData= {}
        }
    }
});