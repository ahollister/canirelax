<template>
  <div class="home">
    <TaskComplete v-if="this.$store.state.isCompleted" />

    <Title title="Today's task:"
           v-if="this.$store.state.todaysTask" />
    <TodaysTask v-if="this.$store.state.todaysTask" />

    <Title title="Set a task for today"
           v-if="!this.$store.state.todaysTask && ! this.$store.state.isCompleted" />
    <SetTaskForm v-if="!this.$store.state.todaysTask && ! this.$store.state.isCompleted" />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import TodaysTask from '@/components/TodaysTask.vue'
import SetTaskForm from '@/components/SetTaskForm.vue'
import TaskComplete from '@/components/TaskComplete.vue'

export default {
  name: 'home',
  components: {
    Title,
    TodaysTask,
    SetTaskForm,
    TaskComplete
  }
}
</script>
