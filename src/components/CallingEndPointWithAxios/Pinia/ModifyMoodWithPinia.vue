<template>
  <h1>Edit Page</h1>
  <ol>
    <li>Item is updated via the pinia store</li>
    <li>Page back is done via router.push</li>
  </ol>

  <div v-if="selectedItem" class="row mt-3">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-6 bg-light p-3 border"><label>ID:</label></div>
        <div class="col-md-6 bg-secondary text-white p-3 border">
          <span>{{ selectedItem.moodId }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 bg-light p-3 border">
          <label>Created At:</label>
        </div>
        <div class="col-md-6 bg-secondary text-white p-3 border">
          <span>{{ selectedItem.createdAt }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 bg-light p-3 border">
          <label>Description:</label>
        </div>
        <div class="col-md-6 bg-secondary text-white p-3 border">
          <input v-model="selectedItem.description" class="form-control" />
        </div>
      </div>

      <div class="row">        
        <div class="col-md-12 bg-light p-3 border">
          <button @click="backToListing" class="btn btn-primary">
            Back To Listing
          </button>
          &nbsp;<button @click="updateDescriptionFunc" class="btn btn-primary">
            Save
          </button>
&nbsp;
          <span v-if="moodStore.errorMessage" class="text-danger">{{
            moodStore.errorMessage
          }}</span>
          <span v-if="moodStore.moodUpdatStatus" class="text-success"
            >Record Updated</span
          >
        </div>
      </div>
    </div>
  </div>
  <div v-else class="row mt-3">
    <div class="col-12">
      <p>No item selected. Please go back to the list page.</p>
    </div>
  </div>
</template>

<script>
import { useMoodStore } from "@/stores/moodStore";
import { useRouter } from "vue-router";

export default {
  setup() {
    const moodStore = useMoodStore();
    const router = useRouter();
    const {
      updateMoodItem,
      moodUpdatStatus: recordUpdated,
      errorMessage: error,
      selectedItem,
    } = moodStore;
    const backToListing = () => {
      router.push("/ListDataWithPinia"); // Navigate to the edit page
    };
    const updateDescriptionFunc = () => {
      if (selectedItem) {
        const jsonData = {
          moodId: selectedItem.moodId,
          description: selectedItem.description,
          createdAt: selectedItem.createdAt,
        };
        console.info("jsonData", jsonData);
        updateMoodItem(selectedItem);
        console.info("recordUpdated:", recordUpdated);
        console.info("moodUpdatStatus:", moodStore.moodUpdatStatus);
        console.info("error:", error);
      }
    };

    return { backToListing, moodStore, updateDescriptionFunc, selectedItem };
  },
};
</script>
