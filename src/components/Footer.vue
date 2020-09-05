<template>
  <footer class="footer">
    <p>Desenvolvido por <a href="">Anderson Macedo</a>.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer {
    padding: 1rem 0;
    border-top: 0.0625rem solid var(--text-inactive);
    text-align: center;
    font-size: 0.9em;
    color: var(--text-active);
    a {
      font-weight: 900;
    }
  }
</style>
