import Vue from 'vue'  
import Vuex from 'Vuex'
import TodoService from '@/api/todoService'
import { stat } from 'fs';
import axios from "axios";

Vue.use(Vuex)

const url = "http://localhost:5000/api/todo"
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
          state.todos[index].status += 1
      }

    },
    getters: {
        pendingTodo: state => {
            return state.todos.filter(todo => !todo.status )
        },
        progressTodo: state => {
            return state.todos.filter(todo => todo.status == 1)
        },
        doneTodo: state => {
            return state.todos.filter(todo => todo.status == 2)
        }

    },
    actions:{
        getTodo({commit}){
            axios.get(url).then(response => {
                commit('getTodo', response.data.data)
            });
        },
        addTodo({commit},todo){
            axios.post(url,todo).then(response => {
                commit('addTodo', todo)
            });
        },
        editTodo({commit},todo){
            axios.put(url,todo).then(response => {
                commit('editTodo',todo)
            });
        },
        removeTodo({commit}, todo){
            axios.delete(url + "/" + todo.todoId).then(response => {
                commit('removeTodo',todo)
            });
        },
        completeTodo({commit}, todo){
            commit('completeTodo',todo)
        }
    }
  })