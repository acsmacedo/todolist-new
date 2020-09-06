<template>
  <div class="app">
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
    taskList: {
      handler: function (newValue) { 
        const tasks = JSON.stringify(newValue);
        window.localStorage.setItem('tasks', tasks);
      },
      deep: true
    },
    modeColor() {
      window.localStorage.setItem('modeColor', this.modeColor);
    }
  },
  computed: {
    ...mapState(['taskList', 'modeColor'])
  },
  methods: {
    ...mapMutations(['loadTasks', 'changeModeColor', 'updateWarning'])
  },
  created() {
    if(window.localStorage.getItem('tasks')) {
      const json = window.localStorage.getItem('tasks');
      const tasks = JSON.parse(json);
      this.loadTasks(tasks);
    }
    this.updateWarning();
  },
  mounted() {
    if(window.localStorage.getItem('modeColor') === 'true') {
      this.changeModeColor();
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
    --background-body: #F6F6F6;
    --background-items: #FFFFFF;
    --text-active: #333333;
    --text-inactive: #E0E0E0;
    --border-color: #BBBBBB;
    &.dark-mode {
      --background-body: #202020;
      --background-items: #202020;
      --text-active: #F6F6F6;
      --text-inactive: #555555;
      --border-color: #888888;
    }
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-body);
  }

  header, section, div, footer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;
  }

  h1, p, ul, ol, li, a, span, button, select, input {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    list-style: none;
    text-decoration: inherit;
  }

  button, select, input {
    font-size: inherit;
  }

  .app {
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 1rem;
    justify-content: space-between;
  }
</style>
