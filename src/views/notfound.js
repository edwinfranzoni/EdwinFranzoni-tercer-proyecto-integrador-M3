export function renderNotFound () {
  const app = document.getElementById('app');
  app.innerHTML = `
	<section>
	  <h2>404 - esta ruta no existe en ChatFlow</h2>
	  <p>Revisá la URL, o volve al <a href="/" data-link>inicio</a>.</p>
	</section>
  `;
}