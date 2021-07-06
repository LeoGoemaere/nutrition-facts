export const state = () => ({
  appData: 'coucou'
})

export const mutations = {
  SET_APPDATA(state, data) {
    state.appData = data;
  }
}

export const actions = {
  setAppData({ commit }, data) {
    commit('SET_APPDATA', data)
  }
}

export const getters = {
  getAppData: (state) => {
    return state.appData;
  }
}