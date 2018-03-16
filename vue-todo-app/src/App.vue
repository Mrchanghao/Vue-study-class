<template>
  <div id="app">
      <GetTodo></GetTodo>
      <current-todo></current-todo>
      <CompletedTodo></CompletedTodo>
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
</style>
