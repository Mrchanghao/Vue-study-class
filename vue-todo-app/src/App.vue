<template>
  <div id="app">
      <GetTodo class="input"></GetTodo>
      <current-todo></current-todo>
      <CompletedTodo></CompletedTodo>
      <button class="btn-delete clear-all btn" @click="clearAll">CLEARALL</button>
  </div>
</template>

<script>
import GetTodo from './GetTodo.vue'
import CurrentTodo from './CurrentTodo.vue';
import CompletedTodo from './CompletedTodo.vue';
export default {

  name: 'App',
  components: {
    GetTodo,
    CurrentTodo,
    CompletedTodo
  },
  methods: {
    clearAll() {
      this.$store.dispatch('clearAll')
    }
  }
  
}
</script>

<style>
body {
 font-family: Helvetica, sans-serif;
 width: 60%;
 margin: 5rem auto;
 background: #005aa7;
 color: white;
}
.input {
  /* transform: translateX(50%); */
}
.clear-all {
  border: 2px solid;
  padding: 10px;
  margin-top: 20px;
  /* margin: 0 auto; */
  /* display: block; */
  width: 200px;
  height: 60px;
  transform: translate(60%, 50%);
}
</style>
