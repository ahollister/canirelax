<template>
  <div>
    <div>
      {{ this.$store.state.todaysTask }}
    </div>
    <div>
      {{ this.$store.state.todaysTaskTime.label }}
    </div>
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
