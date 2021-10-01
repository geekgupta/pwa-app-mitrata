import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      user:{
    user_id:null,
    customer_id:null
      }
    },
    getters: {
      id(state) {
        return state.user.user_id;
      },
      customer(state){
        return state.user.customer_id;
      }
    },
    mutations: {
          SET_ID(state, val) {
            state.user.user_id = val;
          },
          SET_CUSTOMER_ID(state,val){
            state.user.customer_id = val;
          }

    },
    actions: {
    }
   });