<template>
  <div class='ui centered card'>
    <div class='content'>
        <div class='header'>
            {{ todo.title }}
        </div>
        <div class='meta'>
            {{ todo.description }}
        </div>
        <div class='ui right floated main menu'>
            <a data-content="Edit This Page" class='bug popup icon item' v-on:click="showForm">
              <i class='edit icon'></i>
            </a>
             <a class='bug popup icon item' v-on:click="deleteTodo(todo)">
              <i class='trash icon'></i>
            </a>
        </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Titulo</label>
          <input type='text' ref="title" >
        </div>
        <div class='field'>
          <label>Descrição</label>
          <input type='text' ref="description">
        </div>
        <div class='ui buttons'>
          <button class='ui primary button' v-on:click="editTask">
            Salvar
          </button>
          <button class="ui button" v-on:click="hideForm">
            Cancelar
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing && todo.status == 2" disabled>
        Finalizado
    </div>
    <div class='ui bottom attached blue basic button' v-on:click="completeTodo(todo)" v-show="!isEditing && todo.status == 1" disabled>
        Andamento
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.status">
        Pendente
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "Todo",
  props: ["todo"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    editTask(){
      swal({
        title: "Editar",
        text: "Deseja confirmar as modificaçoes?",
        icon: "info",
        buttons: true,
      })
      .then((result) => {
        if(result){
          this.todo.title = this.$refs.title.value;
          this.todo.description = this.$refs.description.value;
          this.$store.dispatch('editTodo',this.todo)
          swal("Sucesso!", "Tarefa modificada.", "success");
          this.hideForm();
        }
      });

    },
    showForm() {
      this.isEditing = true;
      this.$refs.title.value = this.todo.title;
      this.$refs.description.value = this.todo.description;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      swal({
        title: "Remover",
        text: "Deseja remover esta tarefa?",
        icon: "warning",
        buttons: true,
        dangerMode: true
      })
      .then((result) => {
        if(result){
          this.$emit('delete-todo', todo);
          swal("Sucesso!", "Tarefa removida.", "success");
        }
      });
    },
    completeTodo(todo) {
        this.$emit('complete-todo', todo);
    },
  },
};
</script>