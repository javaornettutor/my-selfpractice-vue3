<style scoped>
.card-component {
  padding: 10px;
  background-color:blueviolet;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
</style>
<template>
  <div class="card-component">
    <!-- <input type="text" v-model="newTodo" placeholder="new to do text" /> -->

    <form @submit.prevent="addTodo">
      <input v-model="newTodo" required placeholder="please new todo text" />
      <button @click="addTodo(todo)">Add Todo</button>
    </form>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <input type="checkbox" v-model="todo.done" />
        <button @click="removeTodo(todo)">remove to do</button>
      </li>
    </ul>
  </div>
</template>

<script>
// give each todo a unique id
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      todos: [
        { id: id++, text: "Learn HTML", done: true },
        { id: id++, text: "Learn JavaScript", done: true },
        { id: id++, text: "Learn Vue", done: false },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(curItem) {
      console.log(curItem);
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].text === curItem.text) {
          this.todos.splice(i, 1); // Remove 1 item at the found index
        }
      }
    },
  },
};
</script>
