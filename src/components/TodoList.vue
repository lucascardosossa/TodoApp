<template>
    <div class="ui three column stackable grid">
    	<div class="column">
				<h3>Pendentes ({{todos.filter(todo => {return !todo.done }).length}})</h3>
				<create-todo v-on:add-todo="addTodo"/>
				<todo v-on:delete-todo="deleteTodo" v-for="todo in todos.filter(todo => {return !todo.done })" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>		
    	<div class="column">
    		<h3>Em Andamento (0)</h3>
    	</div>
		<div class="column">
    		<h3>Finalizadas ({{todos.filter(todo => {return todo.done  }).length}})</h3>
    		<todo v-on:delete-todo="deleteTodo"  v-for="todo in todos.filter(todo => {return todo.done })" :key="todo.id" v-bind:todo="todo"></todo>
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
					done: true,
				},
				{
                    id: 2,
					title: 'Aprender VUE',
					project: 'PWA',
					done: false,
				},
				{
                    id: 3,
					title: 'Aprender VUEX',
					project: 'PWA',
					done: false,
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
        done: false,
      });
    },
  },

};

</script>

<style>
</style>