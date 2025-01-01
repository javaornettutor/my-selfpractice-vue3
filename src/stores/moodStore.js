import { defineStore } from "pinia";
import axios from "axios";

export const useMoodStore = defineStore("mood", {
  state: () => ({
    selectedItem: null,
    moodsCollection: [], // Holds data fetched from the database
    moodsLoadingStatus: true, // Indicates loading state
    moodUpdatStatus: false,
    errorMessage: null, // Holds error messages, if any
  }),
  actions: {
    async fetchAllMoods() {
      this.moodsLoadingStatus = true;
      this.errorMessage = null;
      
      try {
        const response = await axios.get("http://localhost:5076/API/GetMoods"); // Replace with your API URL        
        this.moodsCollection = response.data;
        console.log("Receiving collection in the mood store via API :", this.moodsCollection);
      } catch (err) {
        this.errorMessage = "Failed to fetch moods";
      }
    },
    async updateMoodItem(item) {
      this.errorMessage = null;
      this.moodUpdatStatus = true;
      try {
        console.info("in moodStore.js updateMoodItem");

        const response = await axios.put(
          `http://localhost:5076/API/UpdateMood`,
          item
        );
        console.info("updateMoodItem:", response.data);       
        
      } catch (error) {
        this.moodUpdatStatus = false;
        this.errorMessage = error.message || "Failed to update item";
      }
    },
    setSelectedItem(item) {
      console.info("in setSelectedItem", item);
      this.selectedItem = item;
    },
    clearSelectedItem() {
      this.selectedItem = null;
    },    
  },
});
