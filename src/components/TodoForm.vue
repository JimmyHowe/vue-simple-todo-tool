<script lang="ts" setup>

import {reactive, ref} from "vue";
import {Todo} from "../types/Todo.contract";

const emit = defineEmits(['add'])

const form = reactive({
  name: '',
})

const nameRef = ref();

function onSubmit() {

  let todo = {
    name: form.name,
    completed: false,
  } as Todo;

  emit('add', todo)

  form.name = '';
  nameRef.value.focus();
}

</script>

<template>

  <form class="flex" @submit.prevent="onSubmit">

    <input ref="nameRef" v-model="form.name" class="w-full" required type="text">

    <button class="my-2 p-4 w-full bg-blue-600 text-white rounded">
      Add
    </button>

  </form>

</template>

<style scoped>

</style>
