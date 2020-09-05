<template>
  <li :style="colorLabel" v-on:click="changes" :id="id">
    <div :class="{ ischeck: isCheck }">
      <span class="check">{{ deadline }}</span>
      <p class="check">{{ description }}</p>
    </div>
    <div class="icon">
      <div :class="{ isimportant: isImportant }"><i class="las la-skull-crossbones important"></i></div>
      <div :class="{ iswarning: isWarning }"><i class="las la-bomb warning"></i></div>
      <div><i class="las la-times close"></i></div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TaskItem',
  computed: {
    colorLabel() {
      if (this.label === 'color1') {  return { borderColor: 'red' } }
      else if (this.label === 'color2') {  return { borderColor: 'orange' } }
      else if (this.label === 'color3') {  return { borderColor: 'yellow' } }
      else if (this.label === 'color4') {  return { borderColor: 'green' } }
      else if (this.label === 'color5') {  return { borderColor: 'blue' } }
      else if (this.label === 'color6') {  return { borderColor: 'purple' } }
      else {  return { borderColor: 'pink' } }
    }
  },
  props: {
    id: Number,
    description: String,
    deadline: String,
    label: String,
    isImportant: Boolean,
    isCheck: Boolean,
    isWarning: Boolean
  },
  methods: {
    ...mapMutations(['removeTask', 'changeImportant', 'changeCheck']),
    changes(e) {
      if (e.target.className.includes('close')) { 
        this.removeTask(this.id);
      }

      if (e.target.className.includes('important')) { 
        this.changeImportant(this.id);
      }

      if (e.target.className.includes('check')) { 
        this.changeCheck(this.id);
      }
    }
  }
}
</script>

<style scoped lang="scss">
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 0.0625rem solid #DDDDDD;
    border-left-width: 0.4rem;
    margin: 0.5rem 0;
  }

  .ischeck {
    text-decoration: line-through;
    color: var(--text-inactive);
  }

  .isimportant, .iswarning {
    i {
      color: var(--text-active);
    }
  }
  .icon {
    flex-direction: row;
    width: 8rem;
    justify-content: flex-end;
  }

  

  span {
    font-size: 0.6em;
    margin-bottom: 0.2rem;
  }

  i {
    font-size: 1.2em;
    color: #DDDDDD;
    padding-left: 0.5rem;  
  }

  .close, .important {
    &:hover {
      color: var(--text-active);
    }
  }
</style>
