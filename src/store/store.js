import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [],
    filter: 'none',
    sort: 'none',
    invert: false,
    modeColor: true
  },
  getters: {
    filter(state) {
      if (state.filter === 'none') {
        return state.taskList;
      }
      if (state.filter === 'unchecked') {
        return state.taskList.filter( item => !item.isCheck);
      }
      if (state.filter === 'important') {
        return state.taskList.filter( item => item.isImportant);
      }
      if (state.filter === 'overdue') {
        return state.taskList.filter( item => item.isWarning);
      }
    },
    sort(state, getters) {
      if (state.sort === 'none') {
        return getters.filter;
      }
      if (state.sort === 'color') {
        const tempFilter = [...getters.filter]
        return tempFilter.sort((a,b) => (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0)); 
      }
      if (state.sort === 'alphabet') {
        const tempFilter = [...getters.filter];
        return tempFilter.sort((a,b) => (a.description.toUpperCase() > b.description.toUpperCase()) ? 1 : ((b.description.toUpperCase() > a.description.toUpperCase()) ? -1 : 0)); 
      }
      if (state.sort === 'deadline') {
        const tempFilter = [...getters.filter]
        console.log(state.taskList)
        return tempFilter.sort((a,b) => (a.deadlineNumbers > b.deadlineNumbers) ? 1 : ((b.deadlineNumbers > a.deadlineNumbers) ? -1 : 0));
      }
    },
    invert(state, getters) {
      const tempInvert = [...getters.sort];
      if (state.invert === false) return tempInvert.reverse();
      if (state.invert === true) return tempInvert;
    }
  },
  mutations: {
    insertTask(state, e) {
      e.preventDefault();
      
      const id = Date.now();
      
      const tempDescription = e.target.description.value;
      const description = tempDescription ? tempDescription : 'Tarefa sem nome';
      
      
      const tempDate = e.target.deadline.value.replaceAll('-', ',');
      const date = (new Date(tempDate)).toLocaleDateString();
      const deadlineNumbers = tempDate ? (new Date(tempDate)).getTime() : Infinity;
      const deadline =  e.target.deadline.value ? date : '';
      
      const label = e.target.label.value;

      const isImportant = false;
      const isCheck = false;

      const tempNow = new Date(Date.now());
      const stringNow = `${tempNow.getUTCFullYear()}, ${tempNow.getUTCMonth() + 1}, ${tempNow.getUTCDate()}`
      const now = (new Date (stringNow)).getTime();
      const deadlineNumber = (new Date(tempDate)).getTime();
      const isWarning = now <= deadlineNumber ? false : true;
      
      const task = { id, description, deadline, deadlineNumbers, label, isImportant, isCheck, isWarning };

      state.taskList.push(task);
      
    },
    removeTask(state, id) {
      const filtro = state.taskList.filter( item => item.id !== id );
      state.taskList = filtro;
    },
    changeImportant(state, id) {
      const filtro = state.taskList.findIndex( item => item.id === id);
      state.taskList[filtro].isImportant = !state.taskList[filtro].isImportant;
    },
    changeCheck(state, id) {
      const filtro = state.taskList.findIndex( item => item.id === id);
      state.taskList[filtro].isCheck = !state.taskList[filtro].isCheck;
    },
    loadTasks(state, tasks) {
      state.taskList = tasks;
    },
    changeFilter(state, filter) {
      state.filter = filter;
    },
    changeSort(state, sort) {
      state.sort = sort;
    },
    changeInvert(state) {
      state.invert = !state.invert;
    },
    changeModeColor(state) {
      state.modeColor = !state.modeColor;
    }
  }
})
