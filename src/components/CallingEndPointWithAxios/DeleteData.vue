<!-- src/views/DeletePage.vue -->
<template>
  <div>
    <h1>Delete Record</h1>
    <p>Delete record with ID: {{ recordId }}</p>
    <!-- Add form to Delete the record -->
    <form @submit.prevent="updateRecord">
      <table class="table table-striped table-bordered">
        <tbody>
        <tr>
          <td>Mood ID</td>
          <td>{{ recordId }}</td>
        </tr>
        <tr>
          <td>Mood Description</td>
          <td>{{record.Description}}</td>
        </tr>
        <tr>
          <td>Mood createdAt</td>
          <td>
            <span>{{ record.CreatedAt }} </span>
          </td>
        </tr>
        <tr>
          <td><button @click="removeRecord">Remove</button></td>
        </tr>
    </tbody>
      </table>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from "vue";
import { useRoute } from 'vue-router';
export default {
  data() {
    return {
   
      recordId: null,
  
    };
  },
  setup() {
    const route = useRoute();
    const recordId = route.params.id;

    const record = ref([]);
    const error = ref(null);
    
    const removeRecord = async () => {
      try {      
        const ifDelete= confirm("sure to remove this record ") ;
        if(ifDelete)
        {
            alert(`Record ${this.recordId} updated: ${this.record.name}`);        
            const response = await axios.delete(`http://localhost:5076/api/API/DeleteMood?id=${recordId}`);
            console.log(response.data);        
        }
      } catch (err) {
        error.value = err.message;
      }
    };
  
   
    return {
        record ,
        error,
        removeRecord,
    };
   },
  created() {
    this.recordId = this.$route.params.id; // Get the record ID from the route
    // Simulate fetching the record details by ID
    this.record = { name: `Record ${this.recordId}` };  

  },
};
</script>
