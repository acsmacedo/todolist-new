<template>
  <form class="form" v-on:submit="insertTask">
    <input type="text" id="description" placeholder="Digite a sua tarefa..." autocomplete="off" v-on:change="changeInputActive">
    <input type="date" id="deadline" v-on:change="changeInputActive">
    <select id="label" v-on:change="changeInputActive">
      <option value="">Etiqueta</option>
      <option value="color7">Vermelho</option>
      <option value="color6">Laranja</option>
      <option value="color5">Amarelo</option>
      <option value="color4">Verde</option>
      <option value="color3">Azul</option>
      <option value="color2">Roxo</option>
      <option value="color1">Rosa</option>
    </select>
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'InsertTask',
  methods: {
    ...mapMutations(['insertTask']),
    changeInputActive(e) {
      if (e.target.value) {
        e.target.classList.add('active');
      } else {
        e.target.classList.remove('active');
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .form {
    margin-bottom: 0.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--border-color);
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    input, select, button {
      background-color: var(--background-body);
      border: 0.0625rem solid var(--border-color);
      padding: 0 0.5rem;
      outline: none;
      height: 2.5rem;
      color: var(--border-color);
      position: relative;
      &::placeholder {
        color: var(--border-color);
      }
      &:focus {
        border: 0.0625rem solid var(--text-active);
      }
      &.active {
        color: var(--text-active);
        background-color: var(--background-items);
        border: 0.0625rem solid var(--text-active);
      }
    }
    input[type="text"] {
      width: 100%;
    }
    select {
      width: calc(50% - 0.25rem);
      margin: 0.5rem 0;
      margin-left: 0.5rem;
      option {
        color: var(--text-active);
      }
    }
    button {
      width: 100%;
      border: 0.0625rem solid var(--text-active);
      background-color: var(--border-color);
      color: var(--text-active);
      text-transform: uppercase;
      font-weight: 700;
      font-size: 0.75em;
      letter-spacing: 0.1em;
    }
    input[type="date"] {
      width: calc(50% - 0.25rem);
      margin: 0.5rem 0;
      color: var(--background-body);
      &::-webkit-datetime-edit-day-field,
      &::-webkit-datetime-edit-month-field,
      &::-webkit-datetime-edit-year-field {
        color: transparent;
        background-color: transparent;
      }
      &::before {
        content: "Prazo";
        color: var(--border-color);
      }
      &::after {
        content: "\1F4C5";
        color: var(--border-color);
        position: absolute;
        right: 0.8rem;
        font-size: 0.8em;
      }
      &::-webkit-calendar-picker-indicator {
        opacity: 0;
        margin-left: 0rem;
        z-index: 10;
      }
      &.active {
        color: var(--text-active);
        &::-webkit-datetime-edit-day-field,
        &::-webkit-datetime-edit-month-field,
        &::-webkit-datetime-edit-year-field {
          color: inherit;
          background-color: transparent;
        }
        &::before {
          content: "";
        }
        &::after {
          color: var(--text-active);
        }
      }  
    }
    @media (min-width: 600px) {
      input[type="date"] {
        width: 170px;
        margin-left: 0.5rem;
        margin-bottom: 0;
        margin-top: 0;
      }
      button {
        width: 100px;
        margin-left: 0.5rem;
      }
      select {
        width: 120px;
        margin-left: 0.5rem;
        margin-bottom: 0;
        margin-top: 0;
      }
      input[type="text"] {
        width: calc(100% - 390px - 1.5rem);
      }
    }
  }
</style>
