import React from "react";
import { render, hydrate } from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root") as HTMLElement;

const renderApp = () => {
  if (rootElement.hasChildNodes()) hydrate(<Root />, rootElement);
  else render(<Root />, rootElement);
};

renderApp();

if (module.hot) module.hot.accept(["./Root"], () => renderApp());

serviceWorker.register();
