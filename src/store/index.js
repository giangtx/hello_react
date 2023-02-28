import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modal';

const reducer = {
    modal: modalReducer,
};

const store = configureStore({
    reducer,
});

export default store;