<template>
  <li :class="label" v-on:click="returnId" :id="id">
    <div :class="{ ischeck: isCheck }">
      <span class="check">{{ deadline }}</span>
      <p class="check">{{ description }}</p>
    </div>
    <div class="icon">
      <div :class="{ isimportant: isImportant }"><i class="las la-skull-crossbones important"></i></div>
      <div :class="{ iswarning: isWarning }"><i class="las la-bomb"></i></div>
      <div><i class="las la-times close"></i></div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'TaskItem',
  props: {
    description: String,
    deadline: String,
    label: String,
    id: Number,
    isImportant: Boolean,
    isCheck: Boolean,
    isWarning: Boolean
  },
  methods: {
    ...mapMutations(['removeTask', 'changeImportant', 'changeCheck']),
    returnId(e) {
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
    color: blue;
  }

  .isimportant, .iswarning {
    i {
      color: red;
    }
  }
  .text {
    
  }
  .icon {
    flex-direction: row;
    width: 8rem;
    justify-content: flex-end;
  }

  

  span {
    font-size: 0.6em;
    margin-bottom: 0.2rem;
    color: #DDDDDD;
  }

  i {
    font-size: 1.2em;
    color: #DDDDDD;
    padding-left: 0.5rem;  
  }
</style>
