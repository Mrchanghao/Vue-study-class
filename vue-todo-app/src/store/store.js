import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        newTodo: '',
        completed: false
    },
    mutations: {
        GET_TODO(state, todo){
            if(this.todo !== '') {
                state.newTodo =  todo
            }
        },
        ADD_TODO(state){
            state.todos.push({
                body: state.newTodo,
                completed: false
            })
            localStorage.setItem('newTodo', state.newTodo)
        },
        EDIT_TODO(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
            state.todos = todos
            state.newTodo = todo.body
        },
        REMOVE_TODO(state, todo){
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
           localStorage.removeItem('newTodo');
        //    localStorage remove 할때 key 이름은 파라미터로 전달 --> setItem으로 지정한 key값
            
        },
        COMPLETE_TODO(state, todo){
            todo.completed = !todo.completed
            
        },
        CLEAR_TODO(state){
            state.newTodo = '';
        },
        CLEAR_ALL(state) {
            state.todos = [];
            localStorage.clear();
        }
    },
    actions: {
        getTodo({commit}, todo){
            commit('GET_TODO', todo)
        },
        addTodo({commit}){
            commit('ADD_TODO')
        },
        editTodo({commit}, todo){
            commit('EDIT_TODO', todo)
        },
        removeTodo({commit}, todo){
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo){
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({commit}){
            commit('CLEAR_TODO')
        },
        clearAll({commit}) {
            commit('CLEAR_ALL');
        }

    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos.filter((todo) => {return !todo.completed}),
        completedTodos: state => state.todos.filter((todo) => {return todo.completed})
    }

})