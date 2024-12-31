<template>
  <div>
    <h1>Data from API</h1>
    <ol>
      <li>List Data with Axios</li>
    </ol>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Mood ID</th>
          <th>Description</th>
          <th>Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.moodId">
          <td>{{ item.moodId }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.createdAt }}</td>
          <td>
            <button @click="goToEditPage(item)">Go to Edit</button>
            <!-- <a :href="`/ModifyData/${item.moodId}`">Edit {{ item.name }}</a>
            <a :href="`/DeleteData/${item.moodId}`">Delete {{ item.name }}</a> -->
          </td>
        </tr>
      </tbody>
    </table>

    <p v-if="error" style="color: red">Error: {{ error }}</p>
    <button @click="fetchData">Refresh Data</button>
  </div>
</template>

<script>
import axios from "axios";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const Api_FuncName = {
  GetMoodEndPoint: "GetMoods",
};
export default {
  name: "ListData",

  methods: {
    rowDisplay(id, description, createDate) {
      return `ID:${id}, Description:${description},CreateDate:${createDate}`;
    },
  },

  setup() {
    document.title = "List Data with Axios";
    const router = useRouter();
    const data = ref([]);
    const error = ref(null);

    const goToEditPage = (currentRecord) => {
      router.push({
        name: "ModifyData",
        params: { id: currentRecord.moodId },
        query: {
          description: currentRecord.description,
          createdAt: currentRecord.createdAt,
        },
      });
    };

    // // Fetch data when the component mounts
    const fetchData = async () => {
      const endPoint = "http://localhost:5076/API/";
      try {
        const uri = computed(
          () => `${endPoint}${Api_FuncName.GetMoodEndPoint}/`
        );
        const response = await axios.get(uri.value);
        console.log(response.data);

        data.value = response.data;
        error.value = null; // Clear any previous errors
      } catch (err) {
        error.value = err.message;
      }
    };
    fetchData();

    return {
      data,
      error,
      goToEditPage,
    };
  },
};
</script>
