import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    isCompleted: false,
    todaysTask: "",
    todaysTaskTime: "",
    completedTasks: []
  },
  mutations: {
    endCompletedState: state => {
      state.isCompleted = false;
    },
    setTodaysTask: (state, { task, time }) => {
      state.todaysTask = task;
      state.todaysTaskTime = time;
    },
    completeTodaysTask: state => {
      state.completedTasks.push({
        task: state.todaysTask,
        timeOfCompletion: +new Date()
      });
      state.todaysTask = "";
      state.todaysTaskTime = "";
      state.isCompleted = true;
    }
  }
});
