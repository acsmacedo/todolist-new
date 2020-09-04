<template>
  <form class="form" v-on:submit="insertTask">
    <input type="text" id="description">
    <input type="date" name="" id="deadline">
    <select name="" id="label">
      <option value="vermelho">Vermelho</option>
      <option value="laranja">Laranja</option>
      <option value="amarelo">Amarelo</option>
      <option value="verde">Verde</option>
      <option value="azul">Azul</option>
      <option value="roxo">Roxo</option>
      <option value="rosa">Rosa</option>
    </select>
    <button type="submit">Adicionar</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'InsertTask',
  methods: 
    mapMutations(['insertTask'])
  
}
</script>

<style scoped lang="scss">

</style>
