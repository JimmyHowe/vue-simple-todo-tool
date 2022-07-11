<script lang="ts" setup>

import {Todo} from "../types/Todo.contract";
import {useLocalStorage} from "../helpers/useLocalStorage";
import TodoItem from "./TodoItem.vue";

const props = defineProps<{
  items: {
    type: Todo[],
    required: false,
    default: []
  },
  gap?: {
    default: 4
  }
}>()

const storage = useLocalStorage();

function onCompleted(item: Todo) {
  alert(item);
}

function onRemove(index: number) {

  props.items.splice(index, 1);

  storage.save('todos', props.items);
}

</script>

<template>

  <ul class="space-y-4">
    <todo-item v-for="(item, index) in props.items"
               :name="item.name"
               @completed="onCompleted(index)"
               @delete="onRemove(index)"
    ></todo-item>
  </ul>

</template>

<style scoped>

</style>
