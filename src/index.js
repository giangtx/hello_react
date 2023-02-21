import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/app.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from "./lang";
import { Provider } from 'react-redux';
import store from './store';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  // I18nextProvider setup midlware cho toàn bộ component nhận giá trị từ folder lang
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <React.Fragment>
        <App />
      </React.Fragment>
    </I18nextProvider>
  </Provider>
);

