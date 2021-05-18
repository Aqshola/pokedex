<template>
  <transition name="fade" appear>
    <li class="list bg">
      <b-form-checkbox
        class="mr-2"
        type="checkbox"
        name="list-check"
        id="list-check"
        :checked="data.finish"
        @input="updateTodo(data.id)"
      />
      <div
        class="text-todo"
        v-bind:style="{ textDecoration: data.finish ? `line-through` : `none` }"
      >
        {{ data.todo }}
      </div>
      <b-button variant="danger" size="sm" @click="deleteTodo(data.id)"
        >delete</b-button
      >
    </li>
  </transition>
</template>

<script>
export default {
  name: 'ListBox',
  props: {
    data: Object,
    deleteTodo: Function,
    updateTodo: Function,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
