<template>
  <b-card :title="title" class="mt-3">
    <div class="box-todo">
      <ul v-if="title === `On Going`">
        <list-box
          :key="task.id"
          v-for="task in onGoing"
          :data="task"
          :deleteTodo="delFunc"
          :updateTodo="updateFunc"
        />
      </ul>

      <ul v-if="title === `Finish`">
        <list-box
          :key="task.id"
          v-for="task in finish"
          :data="task"
          :deleteTodo="delFunc"
          :updateTodo="updateFunc"
        />
      </ul>
    </div>
  </b-card>
</template>

<script>
import ListBox from './ListBox.vue';
export default {
  components: { ListBox },
  name: 'BoxTodo',
  props: {
    title: String,
    Todolist: Array,
    delFunc: Function,
    updateFunc: Function,
  },
  computed: {
    onGoing() {
      return this.Todolist.filter((todo) => !todo.finish);
    },
    finish() {
      return this.Todolist.filter((todo) => todo.finish);
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
