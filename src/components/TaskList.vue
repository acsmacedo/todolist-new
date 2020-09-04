<template>
  <ul class="task-list">
    <template v-if="taskList">
      <TaskItem 
      v-for="item in taskList"
      :key="item.id"
      :description="item.description"
      :deadline="item.deadline"
      :label="item.label" 
      :id="item.id"
      :isCheck="item.isCheck"
      :isImportant="item.isImportant"
      :isWarning="item.isWarning"
     />
    </template>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  computed: {
    ...mapState(['taskList'])
  }
  
}
</script>

<style scoped lang="scss">

</style>
