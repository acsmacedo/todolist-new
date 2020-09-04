<template>
  <div class="app">
    <Header />
    <section class="todolist">
      <InsertTask />
      <FilterSort />
      <TaskList />
    </section>
    <Footer />
  </div>
</template>

<script>
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
</style>
