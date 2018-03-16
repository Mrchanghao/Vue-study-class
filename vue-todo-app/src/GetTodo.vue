<template>
  <div class="container" id="get-todo">
    <div class="field">
        <input class="input" type="text" @change="getTodo" :value="newTodo" placeholder="Text input">
         <button class="button is-primary" @click="addTodo">Submit</button>
    </div>
  </div>
</template>
<script>

export default {
        methods: {
            getTodo(e){
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo(){
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')
            }
        },
        computed: {
            newTodo(){
                this.$store.state.newTodo
            }
        }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}
input {
    width: 70%;
    height: 2rem;
    padding: 0.3rem;
}
button {
    width: 20%;
    height: 2rem;
    border: 1px solid; 
    border-radius: 5px;
}
</style>
