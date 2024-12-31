<template>
  <div class="container">
    <h1 class="text-center my-4">List Data with Pinia</h1>
    
    <!-- Error message -->
    <div v-if="moodStore.errorMessage" class="alert alert-danger">
      {{ moodStore.errorMessage }}
    </div>
    
    <!-- List of moods -->
    <ul class="list-group" v-if="moodStore.moodsCollection">
      <li
        v-for="curMood in moodStore.moodsCollection"
        :key="curMood.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>{{ curMood.description }}</span>
        
        <div>        
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
  
  name: 'ListDataWithPinia',
  
  setup() {
    const moodStore = useMoodStore();
    const router = useRouter();
    
    onMounted(() => {
      moodStore.fetchAllMoods(); // Fetch data when the component mounts
    });

    const selectCurRow = (curItem) => 
    {
      console.info("selectCurRow", selectCurRow);
      moodStore.setSelectedItem(curItem);
      router.push('/ModifyMoodWithPinia'); // Navigate to the edit page
    };
    return { selectCurRow, moodStore};//, loading, error,  };
    //return { fetchMood, moods, loading, error, selectCurRow };
  },
};
</script>

<style>
/* Add custom styles here if needed */
</style>
