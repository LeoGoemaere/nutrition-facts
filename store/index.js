export const state = () => ({
  appData: 'coucou',
  foods: []
})

export const mutations = {
  SET_APPDATA(state, data) {
    state.appData = data;
  },
  ADD_FOOD(state, data) {
    state.foods.push(data);
  }
}

export const actions = {
  setAppData({ commit }, data) {
    commit('SET_APPDATA', data)
  },
  addFood({ commit }, data) {
    commit('ADD_FOOD', data);
  }
}

export const getters = {
  getAppData: (state) => {
    return state.appData;
  },
  getFoods: (state) => {
    return state.foods;
  }
}