import TodoItem from './TodoItem.vue';

export default {
  title: 'TodoItem',
  component: TodoItem,
}

export const Default = () => ({
  components: { TodoItem },
  template: `<todo-item name="Todo Item" completed />`,
});
