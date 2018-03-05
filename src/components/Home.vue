<template>
  <div class="home">
    <h1>{{ titulo }}</h1>
    <h2>{{ subTitulo }}</h2>
    <a class="ui primary button" href="/TodoApp/#/TodoList">Lista de Tarefas</a>
  </div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      titulo: 'Bem vindo ao Todo VUE',
      subTitulo: 'Seu gerenciador de Tarefas - Simples e Efetivo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
