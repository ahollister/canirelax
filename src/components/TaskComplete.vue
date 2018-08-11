<template>
  <div>
    <Title title="Task complete!" />
    <button 
      type="button"
      v-on:click="endCompletedState"
    >
      Set a new task
    </button>
  </div>
</template>

<script>
import Title from "./Title.vue";

export default {
  name: "TaskComplete",
  methods: {
    endCompletedState: function() {
      this.$store.commit("endCompletedState");
    }
  },
  components: {
    Title
  }
};
</script>
