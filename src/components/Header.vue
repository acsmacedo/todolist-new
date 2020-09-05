<template>
  <header class="header">
    <h1>Tarefas</h1>
    <p>Organize suas tarefas e torne-se mais produtivo. Uma tarefa cumprida motivará ainda mais o seu dia!</p>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped lang="scss">
  .header {
    padding: 1rem 0;
    text-align: center;
    color: var(--text-active);
    h1 {
      font-size: 2em;
      text-transform: uppercase;
      align-self: center;
      border-bottom: 0.0625rem solid var(--text-inactive);
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
    }
    p {
      max-width: 400px;
      margin: 0 auto;
      font-size: 0.9em;
      line-height: 1.5em;
    }
  }
</style>
