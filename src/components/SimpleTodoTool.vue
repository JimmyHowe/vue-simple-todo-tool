<script lang="ts" setup>

import {onMounted, reactive, ref} from 'vue';
import {useLocalStorage} from "../helpers/useLocalStorage";
import {Todo} from "../types/Todo.contract";
import TodoList from "./TodoList.vue";
import TodoForm from "./TodoForm.vue";

const storage = useLocalStorage();

const items = ref([] as Todo[]);

function onSubmitEvent(todo: Todo) {
  items.value.push(todo);
  storage.save('todos', items.value);
}

onMounted(() => {

  let fromStorage = storage.load('todos');

  if (fromStorage) {
    items.value = fromStorage;
  }
});

</script>

<template>

  <div class="VueSimpleTodoTool flex flex-col bg-white border p-8 gap-4">

    <h1 class="font-bold text-3xl mb-4">
      Todos
    </h1>

    <todo-form @add="onSubmitEvent"/>

    <todo-list :items="items"></todo-list>

  </div>

</template>

<style scoped>

</style>
