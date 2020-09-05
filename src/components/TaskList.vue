<template>
  <ul class="task-list">
    <template v-if="sort">
      <TaskItem 
      v-for="item in sort"
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
import { mapGetters } from 'vuex'
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  computed: {
    ...mapGetters(['sort'])
  }
  
}
</script>

<style scoped lang="scss">

</style>
