<template>
    <div class="ui three column stackable grid">
    	<div class="column">
				<h3>Pendentes ({{pendingTodo.length}})</h3>
				<create-todo />
				<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in pendingTodo" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>		
    	<div class="column">
    		<h3>Em Andamento ({{progressTodo.length}})</h3>
				<todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in progressTodo" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>
		<div class="column">
    		<h3>Finalizadas ({{doneTodo.length}})</h3>
    		<todo v-on:delete-todo="deleteTodo"  v-for="todo in doneTodo" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>
    </div>
    
</template>

<script type = "text/javascript" >

import Todo from './Todo'
import CreateTodo from './CreateTodo'

export default {
  name : 'TodoList',
  components: { 
    Todo,
		CreateTodo
  },
  computed : {
		todos(){
			return this.$store.state.todos; 
		},
		pendingTodo(){
			return this.$store.getters.pendingTodo;
		},
		progressTodo(){
			return this.$store.getters.progressTodo;
		},
		doneTodo(){
			return this.$store.getters.doneTodo;
		}
	},
	created() {
		this.$store.dispatch('getTodo')
	},
	methods: {
    deleteTodo(todo) {
      this.$store.dispatch('removeTodo',todo)
    },
		completeTodo(todo) {
      this.$store.dispatch('completeTodo',todo)
    },
  },

};

</script>

<style>
</style>