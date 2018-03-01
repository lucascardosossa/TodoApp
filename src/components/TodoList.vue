<template>
  
    <div class="ui three column stackable grid">
    	<div class="column">
    		<h3>Pendentes ({{todos.filter(todo => {return todo.done === false}).length}})</h3>
				<todo  v-for="todo in todos.filter(todo => {return todo.done === false})" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>		
    	<div class="column">
    		<h3>Em Andamento (0)</h3>
    	</div>
		<div class="column">
    		<h3>Finalizadas ({{todos.filter(todo => {return todo.done === true}).length}})</h3>
    		<todo  v-for="todo in todos.filter(todo => {return todo.done === true})" :key="todo.id" v-bind:todo="todo"></todo>
    	</div>
    </div>
    
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  props: ['todos'],
  components: {
    Todo,
  },
};

</script>

<style>
</style>