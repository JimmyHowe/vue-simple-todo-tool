<script setup>

defineProps({
  name: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([ 'completed', 'delete' ]);

</script>

<template>

  <div class="TodoItem flex p-4 bg-white shadow">
    <div class="flex-grow">
      {{ name }}
    </div>
    <div>
      <div class="cursor-pointer" @click="emit('delete')">
        X
      </div>
    </div>

  </div>

</template>

<style scoped>

</style>
