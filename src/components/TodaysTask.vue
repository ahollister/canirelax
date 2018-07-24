<template>
  <div>
    <h2 class="task-info">
      {{ this.$store.state.todaysTask }}
    </h2>
    <h2 class="task-info">
      {{ this.$store.state.todaysTaskTime.label }}
    </h2>
    <button type="button" v-on:click="completeTask">
      Complete
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodaysTask',
  methods: {
    completeTask: function () {
      this.$store.commit('completeTodaysTask')
    }
  }
}
</script>
