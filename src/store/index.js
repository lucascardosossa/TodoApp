import Vue from 'vue'  
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
      todos: {
        id: '',
        title: '',
        project: '',
        done: ''
      }
    },
    mutations: {
      addTodo (state, obj) {
        state.todos = obj
      }
    },
    actions:{
        addTodo(context){
            context.commit('addTodo')
        }
    }
  })