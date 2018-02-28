<template>
  <div>
    <div class="ui three column stackable grid">
    	<div class="column">
    		<h3>Pendentes ({{todos.filter(todo => {return todo.done === false}).length}})</h3>
    		<div class='ui centered card' v-for="todo in todos.filter(todo => {return todo.done === false})">
			      <div class='content'>
			        <div class='header'>
			          {{ todo.title }}
			        </div>
			        <div class='meta'>
			          {{ todo.project }}
			        </div>
			        <div class='extra content'>
			          <span class='right floated edit icon'>
			            <i class='edit icon'></i>
			          </span>
			        </div>
			      </div>
			      <div class='ui bottom attached green basic button' v-show="todo.done">
			        Completed
			      </div>
			      <div class='ui bottom attached red basic button' v-show="!todo.done">
			        Complete
			      </div>
			  </div>
			</div>		
    	<div class="column">
    		<h3>Em Andamento (0)</h3>
    	</div>
		<div class="column">
    		<h3>Finalizadas ({{todos.filter(todo => {return todo.done === true}).length}})</h3>
    		<div class='ui centered card' v-for="todo in todos.filter(todo => {return todo.done === true})">
			      <div class='content'>
			        <div class='header'>
			          {{ todo.title }}
			        </div>
			        <div class='meta'>
			          {{ todo.project }}
			        </div>
			        <div class='extra content'>
			          <span class='right floated edit icon'>
			            <i class='edit icon'></i>
			          </span>
			        </div>
			      </div>
			      <div class='ui bottom attached green basic button' v-show="todo.done">
			        Completed
			      </div>
			      <div class='ui bottom attached red basic button' v-show="!todo.done">
			        Complete
			      </div>
			  </div>
    		</div>
    	</div>
    </div>
    
</template>

<script type = "text/javascript" >

export default {
	name: 'TodoList',
	data() {
		return {
			todos:[
				{
					title: 'Aprender REACT',
					project: 'PWA',
					done: true,
				},
				{
					title: 'Aprender VUE',
					project: 'PWA',
					done: false,
				},
				{
					title: 'Aprender VUEX',
					project: 'PWA',
					done: false,
				}
			],
		};
	},
};
</script>

<style>
</style>