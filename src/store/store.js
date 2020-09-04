import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: []
  },
  mutations: {
    insertTask(state, e) {
      e.preventDefault();
      
      const id = Date.now();
      const description = e.target.description.value;
      const date = new Date(Date.parse(e.target.deadline.value));
      const deadline = `${date.getUTCDate()} / ${date.getUTCMonth() + 1} / ${date.getUTCFullYear()}`;
      const label = e.target.label.value;
      const isImportant = false;
      const isCheck = false;
      const isWarning = id > date ? true : false;
      
      const task = { id, description, deadline, label, isImportant, isCheck, isWarning };

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
    }
  },
  actions: {
  },
  modules: {
  }
})
