import SimpleTodoTool from './src/components/SimpleTodoTool.vue';

export default {

    install: (app: any, options: any) => {

        console.log('VueSimpleTodoTool installed!');

        app.component('simple-todo-tool', SimpleTodoTool);
    }
}
