<template>
    <div class="ui three column stackable grid">
    	<div class="column">
				<h3>Pendentes ({{todos.filter(todo => {return !todo.done }).length}})</h3>
				<create-todo v-on:add-todo="addTodo"/>
				<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos.filter(todo => {return !todo.done })" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>		
    	<div class="column">
    		<h3>Em Andamento ({{todos.filter(todo => {return todo.done == 1 }).length}})</h3>
				<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos.filter(todo => {return todo.done == 1 })" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>
		<div class="column">
    		<h3>Finalizadas ({{todos.filter(todo => {return todo.done == 2 }).length}})</h3>
    		<todo v-on:delete-todo="deleteTodo"  v-for="todo in todos.filter(todo => {return todo.done == 2 })" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>
    </div>
    
</template>

<script type = "text/javascript" >

import Todo from './Todo'
import CreateTodo from './CreateTodo'
import TodoService from '@/api/todoService'
import store from '@/store/index'
export default {
  name : 'TodoList',
  components: { 
    Todo,
		CreateTodo
  },
  computed : {
		todos(){
			return store.state.todos; 
		}
	},
	created() {
		TodoService.getTodo(todos => {
			store.commit('addTodo', todos);
		})
	},
	methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
		addTodo(payload) {
      this.todos.push({
        title: payload.title,
				project: payload.project,
        done: payload.done,
      });
    },
		completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done += 1;
    },
  },

};

</script>

<style>
</style>