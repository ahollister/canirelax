<template>
  <div class="home">
      <SetTask key="SetTask"
               v-if="!this.$store.state.todaysTask && ! this.$store.state.isCompleted" />

      <TodaysTask key="TodaysTask"
                  v-if="this.$store.state.todaysTask" />

      <TaskComplete key="TaskComplete"
                    v-if="this.$store.state.isCompleted" />
    
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import TodaysTask from '@/components/TodaysTask.vue'
import SetTask from '@/components/SetTask.vue'
import SetTaskForm from '@/components/SetTaskForm.vue'
import TaskComplete from '@/components/TaskComplete.vue'

export default {
  name: 'home',
  components: {
    Title,
    TodaysTask,
    SetTask,
    SetTaskForm,
    TaskComplete
  }
}
</script>
