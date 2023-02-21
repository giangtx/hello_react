const reducer = {
  SHOW_MODAL_LOADING: (state, {}) => {
    state.modalLoading.show = true;
  },
  HIDE_MODAL_LOADING: (state, {}) => {
    state.modalLoading.show = false;
  }
}

export default reducer;