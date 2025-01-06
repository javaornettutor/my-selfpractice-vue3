<template>
  
    <!-- <b-button variant="primary" @click="handleClick">Click Me!</b-button>
    <b-alert show variant="success" class="mt-3">
      Hello, BootstrapVue 3 with Vue 3!
    </b-alert> -->
    <b-alert variant="success" show>
      This is a success alert with a dismiss button!
    </b-alert>
    <div class="container mt-5">
      <b-card>
        <h3>Data Grid Table</h3>
        <b-table
          :items="items"
          :fields="fields"
          responsive="sm"
          striped
          hover
          class="mt-3"
        >
          <template #cell(actions)="data">
            <b-button variant="primary" size="sm" @click="viewItem(data.item)">
              View
            </b-button>
            <b-button variant="secondary" size="sm">Small Button</b-button>
            <b-button
              variant="danger"
              size="sm"
              class="ms-2"
              @click="deleteItem(data.item.id)"
            >
              Delete
            </b-button>
          </template>
        </b-table>
      </b-card>

    <b-form-group label="Enter your name:" label-for="nameInput">
      <b-form-input
        id="nameInput"
        v-model="name"
        placeholder="Type your name here..."
      ></b-form-input>
    </b-form-group>
    <p class="mt-3">Your name is: {{ name }}</p>

    </div>
  
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { key: "id", label: "ID", sortable: true },
        { key: "name", label: "Name", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "actions", label: "Actions" },
      ],
      items: [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" },
      ],
      name:'',
    };
  },
  methods: {
    handleClick() {
      alert("Button clicked!");
    }, 
    viewItem(item) {
      alert(`Viewing item: ${item.name}`);
    },
    deleteItem(id) {
      this.items = this.items.filter((item) => item.id !== id);
      alert(`Deleted item with ID: ${id}`);
    },
  },
};
</script>
<style>
.container {
  max-width: 900px;
}
</style>