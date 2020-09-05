<template>
  <form class="form" v-on:submit="insertTask">
    <input type="text" id="description" placeholder="Digite a sua tarefa...">
    <input type="date" id="deadline">
    <select id="label">
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
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.0625rem solid var(--border-color);
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    input, select, button {
      background-color: var(--background-items);
      border: 0.0625rem solid var(--border-color);
      padding: 0 0.5rem;
      outline: none;
      height: 2.5rem;
      color: var(--text-active);
    }
    input[type="text"] {
      width: 100%;
    }
    input[type="date"] {
      width: calc(50% - 0.25rem);
      margin: 0.5rem 0;
    }
    select {
      width: calc(50% - 0.25rem);
      margin: 0.5rem 0;
      margin-left: 0.5rem;
    }
    button {
      width: 100%;
      border: 0.0625rem solid var(--text-active);
      background-color: var(--text-active);
      color: var(--text-inactive);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.75em;
      letter-spacing: 0.1em;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {
      opacity: 0.7;
    }
    @media (min-width: 600px) {
      input[type="date"] {
        width: 170px;
        margin-left: 0.5rem;
      }
      button {
        width: 100px;
        margin-left: 0.5rem;
      }
      select {
        width: 120px;
        margin-left: 0.5rem;
      }
      input[type="text"] {
        width: calc(100% - 390px - 1.5rem);
      }
    }
  }
</style>
