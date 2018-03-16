<template>
  <div class="container" id="current-todos">
      <h3 v-if="todos.length > 0">current todos: {{todos.length}}</h3>
      <ul class="list-group">
          <li class="list-group-item"  :key="i" v-for="(todo, i) in todos">
              <div class="todo-list">{{todo.body}}</div>
              <div class="btn-group">
                  <button type="button" class="btn" @click="edit(todo)">EDIT</button>
                  <button type="button" class="btn-completed btn" @click="completed(todo)">COMPLETED</button>
                  <button type="button" class="btn-delete btn" @click="remove(todo)">DELETE</button>
              </div>
              
          </li>
      </ul>
  </div>


</template>
<script>
export default {
    computed: {
        todos() {
            return this.$store.getters.todos
        }
    },
    methods: {
        edit(todo) {
            this.$store.dispatch('editTodo', todo)
        },
        completed(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo);
        },
       
    }
}
</script>
<style scoped>
h3 {
    font-size: 3rem;
}
.list-group-item {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    margin-top: 2rem;
}
.completed {
    text-decoration: line-through;
}
</style>
