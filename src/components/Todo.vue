<template>
  <div class="wrapper">
    <div class="text-center">
      <h1 class="title">Todo List</h1>
      <h5>Made with VueJS</h5>
    </div>

    <b-form inline class="mt-5">
      <b-form-input
        type="text"
        v-model="todoform"
        name="todoinput"
        id="todoinput"
        placeholder="Todo Input"
        class="mr-2"
      />
      <b-button variant="primary" size="md" @click="inputTodo()">Add</b-button>
    </b-form>
    <div style="margin-top:50px">
      <box-todo
        :title="`On Going`"
        :Todolist="todoData"
        :delFunc="deleteTodo"
        :updateFunc="updateTodo"
      />
      <box-todo
        :title="`Finish`"
        :Todolist="todoData"
        :delFunc="deleteTodo"
        :updateFunc="updateTodo"
      />
    </div>
  </div>
</template>

<script>
import BoxTodo from './BoxTodo.vue';
import { uid } from 'uid';

export default {
  components: { BoxTodo },
  name: 'Todo',
  data() {
    return {
      todoform: '',
      todoData: [],
    };
  },
  created() {
    this.getTodoData();
  },

  methods: {
    inputTodo() {
      const todoData = JSON.parse(localStorage.getItem('todoData'));
      const newTodo = {
        todo: this.todoform,
        id: uid(),
        finish: false,
      };
      if (todoData === null) {
        localStorage.setItem('todoData', JSON.stringify([newTodo]));
      } else {
        todoData.push(newTodo);
        localStorage.setItem('todoData', JSON.stringify(todoData));
      }
      this.todoform = '';
      this.todoData = JSON.parse(localStorage.getItem('todoData'));
    },
    getTodoData() {
      const data = JSON.parse(localStorage.getItem('todoData'));
      if (data !== null) {
        this.todoData = data;
      }
    },
    deleteTodo(id) {
      const res = this.todoData.filter((todo) => todo.id !== id);
      this.todoData = res;
      localStorage.setItem('todoData', JSON.stringify(this.todoData));
    },
    updateTodo(id) {
      const res = this.todoData.map((todo) => {
        if (todo.id === id) {
          todo.finish = !todo.finish;
        }
        return todo;
      });
      this.todoData = res;
      localStorage.setItem('todoData', JSON.stringify(this.todoData));
    },
  },
};
</script>
