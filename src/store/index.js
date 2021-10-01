import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      user:{

         user_id:null,
         customer_id:null,
         reqkey : null ,
         reqvalue : null , 


         
      }
    },
    getters: {
      id(state) {
        return state.user.user_id;
      },
      customer(state){
        return state.user.customer_id;
      },
      Reqkey(state){
        return state.user.reqkey;
      },
      Reqvalue(state){
        return state.user.reqvalue;
      }
    },
    mutations: {
          SET_ID(state, val) {
            state.user.user_id = val;
          },

          SET_CUSTOMER_ID(state,val){
            state.user.customer_id = val;
          } ,

          set_key(state,val){
            state.user.reqkey = val;
          } ,

          set_value(state,val){
            state.user.reqvalue = val;
          } ,


    },
    actions: {
    }
   });