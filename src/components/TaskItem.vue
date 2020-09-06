<template>
  <li class="task-item" :style="colorLabel" v-on:click="changes" :id="id">
    <div :class="{ ischeck: isCheck }">
      <span class="check">{{ deadline }}</span>
      <p class="check">{{ description }}</p>
    </div>
    <div class="icon">
      <div :class="{ isimportant: isImportant }"><i class='bx bx-star important'></i></div>
      <div :class="{ iswarning: isWarning }"><i class="las la-exclamation-triangle warning"></i></div>
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
      if (this.label === 'color7') {  return { borderColor: '#EB2F4B' } }
      else if (this.label === 'color6') {  return { borderColor: '#FA973F' } }
      else if (this.label === 'color5') {  return { borderColor: '#FFE511' } }
      else if (this.label === 'color4') {  return { borderColor: '#9CD95F' } }
      else if (this.label === 'color3') {  return { borderColor: '#00D5ED' } }
      else if (this.label === 'color2') {  return { borderColor: '#7B00FF' } }
      else if (this.label === 'color1') {  return { borderColor: '#F272C5' } }
      else {  return { borderColor: 'var(--border-color)' } }
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
  .task-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem;
    border: 0.0625rem solid var(--border-color);
    border-left-width: 0.4rem;
    margin: 0.5rem 0;
    color: var(--text-active);
    background-color: var(--background-body);
    span {
      font-size: 0.6em;
      line-height: 1.5em;
    }
    p {
      font-size: 0.9em;
    }
    i {
      font-size: 1.2em;
      color: var(--text-inactive);
      padding-left: 0.4rem;  
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
  }
</style>
