import { navigateTo, router } from "./views/router/router.js";

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[data-link]');
  
  if (link){ 
    event.preventDefault();
    const url = link.getAttribute("href");
    navigateTo(url);    
  }
});

window.addEventListener('popstate', () => {
  router();
});

//  ===
// Arranca el enrutador
document.addEventListener("DOMContentLoaded", () => {
  router();
});


