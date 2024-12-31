<template>
  <div class="container">
    <h1 class="text-center my-4">List Data with Pinia</h1>
    
    <!-- Error message -->
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
    
    <!-- List of moods -->
    <ul class="list-group" v-if="moods.length">
      <li
        v-for="curMood in moods"
        :key="curMood.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{{ curMood.description }}</span>
        
        <div>
          <router-link
            :to="{ name: 'ModifyData', params: { id: curMood.moodId } }"
            class="btn btn-primary btn-sm me-2"
          >
            Details
          </router-link>

          <button @click="selectCurRow(curMood)" class="btn btn-secondary btn-sm">
            Edit
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useMoodStore } from "../../../stores/moodStore";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const moodStore = useMoodStore();
    const router = useRouter();
    const {
      fetchAllMoods: fetchMood,
      moodsCollection: moods,
      moodsLoadingStatus: loading,
      errorMessage: error,
    } = moodStore;

    onMounted(() => {
      fetchMood(); // Fetch data when the component mounts
    });

    const selectCurRow = (curItem) => {
      console.info("selectCurRow", selectCurRow);
      moodStore.setSelectedItem(curItem);
      router.push('/ModifyMoodWithPinia'); // Navigate to the edit page
    };
    return { fetchMood, moods, loading, error, selectCurRow };
    //return { fetchMood, moods, loading, error, selectCurRow };
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
