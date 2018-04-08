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
            <label>Descrição</label>
            <input type='text' id="description" ref='description' defaultValue="">
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
      title: "",
      description: "",
      isCreating: false
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
      this.description = this.$refs.description.value;
      if (this.title.length > 0 && this.description.length > 0) {
        const title = this.title;
        const description = this.description;
        this.$store.dispatch("addTodo", {
          title,
          description,
          status: 0
        });
        this.title = "";
        this.$refs.description.value = ""
      }
      this.isCreating = false;
      swal("Sucesso!", "Tarefa criada.", "success");
    }
  }
};
</script>
