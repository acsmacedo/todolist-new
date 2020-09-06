<template>
  <footer class="footer">
    <p>Desenvolvido por <a href="https://github.com/acsmacedo">Anderson Macedo</a></p>
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
    margin-top: 1rem;
    border-top: 0.0625rem solid var(--border-color);
    text-align: center;
    font-size: 0.8em;
    color: var(--text-active);
    a {
      font-weight: 900;
      border-bottom: 0.0625rem dotted var(--text-active);
    }
  }
</style>
