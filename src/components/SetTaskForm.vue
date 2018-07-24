<template>
  <form v-on:submit.prevent="setTask">
    <div>
      <label for="task-name">Your task: </label>
      <input type="text"
             id="task-name"
             v-model="task"
             placeholder="Do thing"
             required>
    </div>
    <div>
      <label for="notification-time">Notification time: </label>
      <vSelect id="notification-time"
               v-model="timeSelected"
               v-bind:options="timeOptions"
               required />
    </div>
    <input type="submit" value="Save your task">
  </form>
</template>

<script>
import options from '@/data/timeoptions.json'
import vSelect from 'vue-select'

export default {
  name: 'SetTaskForm',
  components: {
    vSelect
  },
  methods: {
    setTask: function (event) {
      this.$store.commit('setTodaysTask', {
        'task': this.task,
        'time': this.timeSelected
      })
    }
  },
  data () {
    return {
      task: '',
      timeOptions: options.timeOptions,
      timeSelected: {label: '6:00 PM', value: '1800'}
    }
  }
}
</script>
