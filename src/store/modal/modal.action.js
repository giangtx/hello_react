import { createAction } from "@reduxjs/toolkit";

//modal loading
export const showModalLoading = createAction('modal/SHOW_MODAL_LOADING');
export const hideModalLoading = createAction('modal/HIDE_MODAL_LOADING');