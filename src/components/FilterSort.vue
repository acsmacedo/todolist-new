<template>
  <div class="filter-sort">
    <select name="filter" id="filter" v-on:change="change">
      <option value="none">Filtrar</option>
      <option value="unchecked">Pendente</option>
      <option value="important">Importante</option>
      <option value="overdue">Atrasado</option>
    </select>

    <select name="sort" id="sort" v-on:change="change">
      <option value="none">Ordenar</option>
      <option value="color">Cor</option>
      <option value="alphabet">Alfabeto</option>
      <option value="deadline">Prazo</option>
    </select>
    
    <button v-on:click="changeInvert">Inverter</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FilterSort',
  methods: {
    ...mapMutations(['changeFilter', 'changeSort', 'changeInvert']),
    change(e) {
      if (e.target.id === 'filter') { 
        this.changeFilter(e.target.value); 

        if (e.target.value !== 'none') {
          document.querySelector('#filter').firstElementChild.innerHTML = 'Restaurar';
        } else {
          document.querySelector('#filter').firstElementChild.innerHTML = 'Filtrar';
        }
      }
      if (e.target.id === 'sort') { 
        this.changeSort(e.target.value); 

        if (e.target.value !== 'none') {
          document.querySelector('#sort').firstElementChild.innerHTML = 'Restaurar';
        } else {
          document.querySelector('#sort').firstElementChild.innerHTML = 'Ordenar';
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .filter-sort {
    flex-direction: row;
    margin-top: 0.5rem;
    font-size: 0.9em;
    select, button {
      background-color: var(--background-items);
      border: 0.0625rem solid var(--border-color);
      padding: 0 0.5rem;
      outline: none;
      height: 2.5rem;
      color: var(--text-active);
    }
    select {
      margin-right: 0.5rem;
      width: calc(37.5% - 0.5rem);
    }
    button {
      width: 25%;
      align-self: center;
      color: var(--text-inactive);
      text-align: center;
      &.active {
        background-color: var(--text-inactive);
        color: var(--text-active);
      }
    }
  }
</style>
