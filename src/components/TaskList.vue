<template>
  <ul class="task-list">
    <TaskItem />
  </ul>
</template>

<script>
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  }
}
</script>

<style scoped lang="scss">

</style>
