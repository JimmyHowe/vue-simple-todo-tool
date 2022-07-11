<script lang="ts" setup>

import {Todo} from "../types/Todo.contract";
import {useLocalStorage} from "../helpers/useLocalStorage";
import TodoItem from "./TodoItem.vue";
import {defineProps, PropType} from "vue";

const props = defineProps({
  items: {
    type: Array as PropType<Todo[]>,
    required: false,
    default: []
  }
});

const storage = useLocalStorage();

function onCompleted(completed: number) {
  alert(completed);
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
