<template>
  <ul class="task-list" v-if="invert.length > 0">
    <template>
      <TaskItem 
      v-for="item in invert"
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
  <div class="list-empty" v-else>
    <i class="las la-calendar-week"></i>
    <p>Sua lista de tarefas está vazia.</p>
    <span>Que tal aproveitar o momento para organizar sua agenda!</span>
  </div>
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
    ...mapGetters(['invert'])
  }
}
</script>

<style scoped lang="scss">
  .list-empty {
    text-align: center;
    font-size: 0.9em;
    color: var(--text-active);
    i {
      font-size: 5em;
      border-bottom: 0.2rem solid var(--text-active);
      align-self: center;
    }
    p {
      font-weight: 900;
      margin-top: 0.75rem;
    }
  }
</style>
