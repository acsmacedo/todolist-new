<template>
  <ul class="task-list" v-if="taskList.length > 0">
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
  </ul>
  
  <div class="list-empty" v-else>
    <i class="las la-calendar-week"></i>
    <p>Sua lista de tarefas está vazia.</p>
    <span>Que tal aproveitar o momento para organizar sua agenda!</span>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import TaskItem from './TaskItem'

export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  computed: {
    ...mapState(['taskList']),
    ...mapGetters(['invert'])
  }
}
</script>

<style scoped lang="scss">
  .task-list {
    margin-top: 0.5rem;
  }

  .list-empty {
    text-align: center;
    font-size: 0.9em;
    line-height: 1.5em;
    color: var(--border-color);
    max-width: 80%;
    margin: 0 auto;
    margin-top: 0.5rem;
    @media (min-width: 500px) {
      max-width: 300px;
    }
    i {
      font-size: 5em;
      border-bottom: 0.2rem solid var(--border-color);
      align-self: center;
    }
    p {
      font-weight: 900;
      margin-top: 0.75rem;
    }
  }
</style>
