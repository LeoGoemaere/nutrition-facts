export const state = () => ({
  foods: []
})

export const mutations = {
  SET_FOODS(state, foods) {
    state.foods = foods;
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
  setFoods({ commit }, data) {
    commit('SET_FOODS', data);
  },
  addFood({ commit }, data) {
    commit('ADD_FOOD', data);
  },
  deleteFood({ commit }, data) {
    commit('DELETE_FOOD', data);
  }
}

export const getters = {
  getFoods: (state) => {
    return state.foods;
  }
}