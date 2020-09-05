<template>
  <header class="header">
    <div class="color-mode" v-on:click="changeModeColor">
      <span><span></span></span>
    </div>
    <h1>Tarefas</h1>
    <p>Organize suas tarefas e torne-se mais produtivo. Uma tarefa cumprida motivará ainda mais o seu dia!</p>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Header',
  methods: {
    ...mapMutations(['changeModeColor'])
  }
}
</script>

<style scoped lang="scss">
  .header {
    padding: 1rem 0;
    text-align: center;
    color: var(--text-active);
    position: relative;
    > h1 {
      font-size: 2.5em;
      font-weight: 300;
      text-transform: uppercase;
      align-self: center;
      border-bottom: 0.0625rem solid var(--border-color);
      padding-bottom: 0.5rem;
      margin-bottom: 1rem;
    }
    > p {
      max-width: 400px;
      margin: 0 auto;
      font-size: 0.9em;
      line-height: 1.7em;
    }
  }

  .color-mode {
    position: absolute;
    right: 0;
    > span {
      width: 2rem;
      height: 1rem;
      background-color: var(--text-inactive);
      border-radius: 1000rem;
      border: 0.3rem solid var(--text-inactive);
      display: flex;
      align-items: center;
      > span {
        width: 0.8rem;
        height: 0.8rem;
        background-color: var(--text-active);
        border-radius: 1000rem;
        margin-left: -0.1rem;
      }
    }
    > span.active {
      border: 0.2rem solid var(--text-active);
      span {
        width: 1.4rem;
      } 
    }
  }
</style>
