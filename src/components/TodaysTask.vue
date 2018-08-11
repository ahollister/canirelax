<template>
  <div>
    <Title title="Today's task:" />

    <h2 class="task-info">
      {{ this.$store.state.todaysTask }}
    </h2>
    <h2 class="task-info">
      {{ this.$store.state.todaysTaskTime.label }}
    </h2>
    <button
      type="button"
      v-on:click="completeTask"
    >
      Complete
    </button>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";

export default {
  name: "TodaysTask",
  components: {
    Title
  },
  methods: {
    completeTask: function() {
      this.$store.commit("completeTodaysTask");
    }
  }
};
</script>
