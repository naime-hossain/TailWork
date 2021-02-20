const state = {
  sidebar: {
    isOpen: false,
  },
};

const getters = {
  getsidebar: (state) => state.sidebar,
};

const actions = {
  changesidebar({commit}) {
    commit("togglesidebar");
  },
};

const mutations = {
  togglesidebar: (state) => {
    state.sidebar.isOpen = !state.sidebar.isOpen;
  },
  toggleThemeLayout(state, data) {
    state.sidebar.layout = data;
  },
  toggleThemeRtl(state) {
    state.sidebar.rtl = !state.sidebar.rtl;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
