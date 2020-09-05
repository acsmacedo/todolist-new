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
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'FilterSort',
  methods: {
    ...mapMutations(['changeFilter', 'changeSort']),
    change(e) {
      if (e.target.id === 'filter') {
        this.changeFilter(e.target.value);
      }
      if (e.target.id === 'sort') {
        this.changeSort(e.target.value);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .filter-sort {
    flex-direction: row;
    margin-top: 2rem;
    select {
      background-color: var(--background-color);
      border: 0.0625rem solid var(--text-inactive);
      padding: 0 1rem;
      outline: none;
      height: 2.5rem;
      color: var(--text-active);
      width: calc(50% - 0.25rem);
    }
    select:first-child {
      margin-right: 0.5rem;
    }
  }
</style>
