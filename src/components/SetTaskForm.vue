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
      <bFormSelect v-bind:options="timeOptions"
                   v-model="timeSelected"
                   required />
    </div>
    <input type="submit" value="Save task">
  </form>
</template>

<script>
import options from '@/data/timeoptions.json'
import vSelect from 'vue-select'
import bFormSelect from 'bootstrap-vue/es/components/form-select/form-select'

export default {
  name: 'SetTaskForm',
  components: {
    vSelect,
    bFormSelect
  },
  methods: {
    setTask: function (event) {
      this.$store.commit('setTodaysTask', {
        'task': this.task,
        'time': this.timeSelected
      })

      this.$notification.show('Hello World', {
        body: 'This is an example!'
      }, {})
    }
  },
  data () {
    return {
      task: '',
      timeOptions: options.timeOptions,
      timeSelected: '1800'
    }
  }
}
</script>
