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

import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
  name : 'TodoList',
  components: { 
    Todo,
		CreateTodo
  },
  data() {
		return {
			todos:[
				{
          id: 1,
					title: 'Aprender REACT',
					project: 'PWA',
					done: 1,
				},
				{
          id: 2,
					title: 'Aprender VUE',
					project: 'PWA',
					done: 0,
				},
				{
          id: 3,
					title: 'Aprender VUEX',
					project: 'PWA',
					done: 2,
				}
			],
		};
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