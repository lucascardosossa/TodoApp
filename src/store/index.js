import Vue from 'vue'  
import Vuex from 'Vuex'
import TodoService from '@/api/todoService'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({  
    state: {
      todos: []
    },
    mutations: {
      getTodo (state, payload) {
        state.todos = payload
      },
      addTodo(state,payload){
          state.todos.push(payload)
      },
      editTodo(state,payload){
          var modifiedTodo = state.todos.find(t => t.id === payload.id)
          modifiedTodo = payload
      },
      removeTodo(state,payload){
          const index = state.todos.indexOf(payload)
          state.todos.splice(index,1)
      },
      completeTodo(state,payload){
          const index = state.todos.indexOf(payload)
          state.todos[index].done += 1
      }

    },
    getters: {
        pendingTodo: state => {
            return state.todos.filter(todo => !todo.done )
        },
        progressTodo: state => {
            return state.todos.filter(todo => todo.done == 1)
        },
        doneTodo: state => {
            return state.todos.filter(todo => todo.done == 2)
        }

    },
    actions:{
        getTodo(context){
            TodoService.getTodo(todos => {
                context.commit('getTodo', todos)
            })
        },
        addTodo({commit},todo){
            commit('addTodo',todo)
        },
        editTodo({commit},todo){
            commit('editTodo',todo)
        },
        removeTodo({commit}, todo){
            commit('removeTodo',todo)
        },
        completeTodo({commit}, todo){
            commit('completeTodo',todo)
        }
    }
  })