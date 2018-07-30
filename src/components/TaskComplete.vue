<template>
  <div>
    <Title title="Task complete!" />
    <button type="button" v-on:click="endCompletedState">
      Set a new task
    </button>
  </div>
</template>

<script>
export default {
  name: 'TaskComplete',
  methods: {
    endCompletedState: function () {
      this.$store.commit('endCompletedState')
    }
  }
}
</script>
