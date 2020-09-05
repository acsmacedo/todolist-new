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
    <button v-on:click="changeInvert" :class="{ active: invert }">Invert</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'FilterSort',
  data: function() {
    return {
      colorInvert: {color: 'var(--text-active)'}
    }
  },
  computed: {
    ...mapState(['invert'])
  },
  methods: {
    ...mapMutations(['changeFilter', 'changeSort', 'changeInvert']),
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
    select, button {
      background-color: var(--background-color);
      border: 0.0625rem solid var(--text-inactive);
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
      &.active {
        color: var(--text-active);
      }
    }
  }
</style>
