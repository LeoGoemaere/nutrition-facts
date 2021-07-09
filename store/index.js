export const state = () => ({
  appData: 'coucou',
  foods: []
})

export const mutations = {
  SET_APPDATA(state, data) {
    state.appData = data;
  },
  ADD_FOOD(state, food) {
    const isEdition = state.foods.some(data => data.id === food.id);
    if (isEdition) {
      const foodIndex = state.foods.findIndex(data => data.id === food.id);
      state.foods.splice(foodIndex, 1, food);
    } else {
      state.foods.push(food);
    }
  },
  DELETE_FOOD(state, food) {
    const foodIndex = state.foods.findIndex(data => data.id === food.id);
    state.foods.splice(foodIndex, 1);
  }
}

export const actions = {
  setAppData({ commit }, data) {
    commit('SET_APPDATA', data)
  },
  addFood({ commit }, data) {
    commit('ADD_FOOD', data);
  },
  deleteFood({ commit }, data) {
    commit('DELETE_FOOD', data);
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