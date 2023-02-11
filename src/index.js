import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/app.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from "./lang";

ReactDOM.render(
  // I18nextProvider setup midlware cho toàn bộ component nhận giá trị từ folder lang
  <I18nextProvider i18n={i18n}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </I18nextProvider>,
  document.getElementById("root")
);

