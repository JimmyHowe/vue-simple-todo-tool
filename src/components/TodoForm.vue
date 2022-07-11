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

    <div class="flex">
      <input ref="nameRef" v-model="form.name"
             class="block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300" required type="text">

      <button class="px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50"
              type="button">
        Add
      </button>
    </div>

  </form>

</template>

<style scoped>

</style>
