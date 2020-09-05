<template>
  <form class="form" v-on:submit="insertTask">
    <input type="text" id="description" placeholder="Digite a sua tarefa...">
    <input type="date" name="" id="deadline">
    <select name="" id="label">
      <option value="color1">Vermelho</option>
      <option value="color2">Laranja</option>
      <option value="color3">Amarelo</option>
      <option value="color4">Verde</option>
      <option value="color5">Azul</option>
      <option value="color6">Roxo</option>
      <option value="color7">Rosa</option>
    </select>
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'InsertTask',
  methods: {
    ...mapMutations(['insertTask'])
  }
}
</script>

<style scoped lang="scss">
  .form {
    margin-bottom: 2rem;
    input, select, button {
      background-color: var(--background-color);
      border: 0.0625rem solid var(--text-inactive);
      padding: 0 1rem;
      outline: none;
      height: 2.5rem;
      color: var(--text-active);
    }
    input[type="text"], button {
      width: 100%;
    }
    input[type="date"], select {
      width: calc(50% - 0.25rem);
      margin: 0.5rem 0;
    }
    select {
      margin-left: 0.5rem;
    }
    @media (min-width: 600px) {
       input[type="date"], select, button {
        margin-left: 0.5rem;
      }
      input[type="date"] {
        width: 170px;
      }
      button {
        width: 100px;
      }
      select {
        width: 120px;
      }
      input[type="text"] {
        width: calc(100% - 390px - 1.5rem);
      }
    }
  }
</style>
