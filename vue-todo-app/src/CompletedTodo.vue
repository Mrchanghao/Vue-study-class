<template>
<div class="container">
    <h3 v-if="completedTodos.length > 0">completedTodos: {{completedTodos.length}}</h3>
    <ul class="list-group">
        <li class="list-group-item"  :key="i" v-for="(todo, i) in completedTodos">
              <div class="todo-list">{{todo.body}}</div>
              <div class="btn-group">
                  <button type="button" class="btn-delete btn" @click="remove(todo)">DELETE</button>
              </div>
              
          </li>
    </ul>
</div>

</template>

<script>
export default {
  computed: {
      completedTodos(){
          return this.$store.getters.completedTodos;
      }
  },
  methods: {
      remove(todo) {
          this.$store.dispatch('removeTodo',todo)
      }
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
</style>
