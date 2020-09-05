import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [],
    filter: 'none',
    sort: 'none',
    invert: false,
    modeColor: false
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
        tempFilter.sort((a,b) => (a.deadlineNumbers > b.deadlineNumbers) ? 1 : ((b.deadlineNumbers > a.deadlineNumbers) ? -1 : 0));
        return tempFilter.reverse();
      }
    },
    invert(state, getters) {
      const tempInvert = [...getters.sort];
      if (state.invert === true) return tempInvert.reverse();
      if (state.invert === false) return tempInvert;
    }
  },
  mutations: {
    insertTask(state, e) {
      const id = Date.now();
      const tempDescription = e.target.description.value;
      const description = tempDescription ? tempDescription : 'Tarefa sem nome';
      
      
      const tempDate = e.target.deadline.value.replaceAll('-', ',');
      const date = (new Date(tempDate)).toLocaleDateString();
      const deadlineNumbers = e.target.deadline.value ? (new Date(tempDate)).getTime() : Infinity;
      const deadline =  e.target.deadline.value ? date : '';
      
      const label = e.target.label.value;

      const isImportant = false;
      const isCheck = false;

      const tempNow = new Date(Date.now());
      const stringNow = `${tempNow.getUTCFullYear()}, ${tempNow.getUTCMonth() + 1}, ${tempNow.getUTCDate()}`
      const now = (new Date (stringNow)).getTime();
      const isWarning = now <= deadlineNumbers ? false : true;
      
      const task = { id, description, deadline, deadlineNumbers, label, isImportant, isCheck, isWarning };

      state.taskList.push(task);
      e.preventDefault();
      
    },
    removeTask(state, id) {
      const filtro = state.taskList.filter( item => item.id !== id );
      state.taskList = filtro;
    },
    changeImportant(state, id) {
      const filtro = state.taskList.findIndex( item => item.id === id);
      if (!state.taskList[filtro].isCheck) {
        state.taskList[filtro].isImportant = !state.taskList[filtro].isImportant;
      }
    },
    changeCheck(state, id) {
      const filtro = state.taskList.findIndex( item => item.id === id);
      state.taskList[filtro].isImportant = false;
      state.taskList[filtro].isWarning = false;
      state.taskList[filtro].isCheck = !state.taskList[filtro].isCheck;

      if (!state.taskList[filtro].isCheck) {
        const tempNow = new Date(Date.now());
        const stringNow = `${tempNow.getUTCFullYear()}, ${tempNow.getUTCMonth() + 1}, ${tempNow.getUTCDate()}`
        const now = (new Date (stringNow)).getTime();
        const isWarning = now <= state.taskList[filtro].deadlineNumbers ? false : true;
        if (state.taskList[filtro].deadlineNumbers == null) { 
          state.taskList[filtro].isWarning = false;
        } else {
          state.taskList[filtro].isWarning = isWarning;
        }
      }
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
      document.querySelector('.filter-sort button').classList.toggle('active');
      state.invert = !state.invert;
    },
    changeModeColor(state) {
      document.body.classList.toggle('dark-mode');
      document.querySelector('.color-mode > span').classList.toggle('active');
      state.modeColor = !state.modeColor;
    },
    updateWarning(state) {
      state.taskList.forEach( item => {
        const tempNow = new Date(Date.now());
        const stringNow = `${tempNow.getUTCFullYear()}, ${tempNow.getUTCMonth() + 1}, ${tempNow.getUTCDate()}`
        const now = (new Date (stringNow)).getTime();
        if (item.deadlineNumbers == null) { 
          item.isWarning = false;
        } else {
          const isWarning = now <= item.deadlineNumbers ? false : true;
          item.isWarning = isWarning;
        }
      })
    }
  }
})
