<template>
  <div>
    <Title title="Set a task for today" />
    <SetTaskForm />
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import SetTaskForm from '@/components/SetTaskForm.vue'

export default {
  name: 'SetTask',
  components: {
    SetTaskForm,
    Title
  }
}
</script>
