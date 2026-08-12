import { renderAbout } from "../about.js";
import { renderChat } from "../chat.js";
import { renderHome } from "../home.js";
import { renderNotFound } from "../notfound.js";

const routes = {
  '/': renderHome,
  '/chat': renderChat,
  '/about': renderAbout,
  };

export function router() {
  const path = window.location.pathname;
  const renderView = routes[path];
 
  console.log('Routing to:', path);
  
  if (renderView) {
    renderView();
  } else {
    renderNotFound();
  }
  //* Refactoring
  // const renderView = routes[path] || renderNotFound;
  // renderView();
}

export function navigateTo(path) {
  history.pushState({}, '', path);
  router();
}