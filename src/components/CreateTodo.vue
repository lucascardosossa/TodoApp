<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Titulo</label>
            <input v-model="title" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Projeto</label>
            <input type='text' v-model="project" ref='project' defaultValue="">
          </div>
          <div class='ui buttons'>
            <button style="margin-right: 5px" class='ui primary button' v-on:click="sendForm()">
              Salvar
            </button>
            <button class='ui button' v-on:click="closeForm">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      project: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.title.length > 0 && this.project.length > 0) {
        const title = this.title;
        const project = this.project;
        this.$emit('add-todo', { 
          title,
          project,
          done: 0,
        });
        this.newTodoText = '';
      }
      this.isCreating = false;
    },
  },
};
</script>
