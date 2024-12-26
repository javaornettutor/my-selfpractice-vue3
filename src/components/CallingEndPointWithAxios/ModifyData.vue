<!-- src/views/EditPage.vue -->
<template>
  <div v-if="data">
    <h1>Edit Record</h1>
    <p>Editing record with ID: {{ data.moodId }}</p>
    <!-- Add form to edit the record -->
    <form @submit.prevent="updateRecord">
      <table class="table table-striped table-bordered">
        <tbody>
          <tr>
            <td>Mood ID</td>
            <td>{{ data.moodId }}</td>
          </tr>
          <tr>
            <td>Mood Description</td>
            <td><input type="text" v-model="data.description" /></td>
          </tr>
          <tr>
            <td>Mood createdAt</td>
            <td>
              <span>{{ data.createdAt }} </span>
            </td>
          </tr>
          <tr>
            <td><button type="submit">Save</button></td>
          </tr>
        </tbody>
      </table>
    </form>
      <!-- Display success and error messages -->
    <div v-if="successMessage" class="green">{{ successMessage }}</div>
    <div v-if="errorMessage" class="red">{{ errorMessage }}</div>
  </div>
  <p v-else>No data passed</p>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    //const router = useRouter(); // Add this to access the router instance
    const data = ref({
      moodId: route.params.id,
      description: route.query.description,
      createdAt: route.query.createdAt,
    });

    const successMessage = ref("");
    const errorMessage = ref("");

    const updateRecord = async () => {
      try {
        // Replace with your actual API endpoint
        const apiEndpoint = `http://localhost:5076/api/API/UpdateMood?id=${data.value.moodId}`;

        const response = await axios.put(apiEndpoint, {
          description: data.value.description,
          moodId: data.value.moodId,
        });

        // Handle successful response
        if (response.status === 200) {
          successMessage.value = "Record saved successfully!";
          errorMessage.value = "";

          // Optionally navigate back to the list page
          //setTimeout(() => {
          //  router.push({ name: "ListData" });
          // }, 2000); // Redirect after 2 seconds
        }
      } catch (error) {
        errorMessage.value = `Failed to save record: ${error.message}`;
        successMessage.value = "";
      }
    };

    //const data = route.state || null; // Access the state data
    console.log("data ", data);
    return {
      data,
      updateRecord,
      successMessage,
      errorMessage,
    };
  },
};
</script>
<style scoped>
.red {
  color: red;
}
.green {
  color: green;
}
</style>
