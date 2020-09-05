<template>
  <div class="app light-mode">
    
    <section class="todolist">
      <Header />
      <InsertTask />
      <FilterSort v-if="taskList.length > 2" />
      <TaskList />
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Header from './components/Header'
import InsertTask from './components/InsertTask'
import FilterSort from './components/FilterSort'
import TaskList from './components/TaskList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    InsertTask,
    FilterSort,
    TaskList,
    Footer
  },
  watch: {
    taskList(newValue) {
      const tasks = JSON.stringify(newValue);
      window.localStorage.setItem('tasks', tasks);
    }
  },
  computed: {
    ...mapState(['taskList'])
  },
  methods: {
    ...mapMutations(['loadTasks'])
  },
  created() {
    if(window.localStorage.getItem('tasks')) {
      const json = window.localStorage.getItem('tasks');
      const tasks = JSON.parse(json);
      this.loadTasks(tasks);
    }
  }
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,900&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-color);
  }

  header, nav, aside, section, 
  article, main, div, footer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6, p, pre,
  ul, ol, li, dl, dt, dd, blockquote,
  a, span {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    list-style: none;
    text-decoration: inherit;
  }

  .app {
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem;
    justify-content: space-between;
    
  }

  .light-mode {
    --background-color: #FFFFFF;
    --text-active: #333333;
    --text-inactive: #DDDDDD;
  }

  .dark-mode {
    --background-color: #333333;
    --text-active: #FFFFFF;
    --text-inactive: #555555;
  }
</style>
