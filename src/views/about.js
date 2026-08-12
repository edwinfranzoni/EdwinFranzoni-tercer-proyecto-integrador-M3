export function renderAbout() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Reutilizamos el contenedor de estrellas de fondo para mantener la estética cósmica -->
    <div class="stars-glitter-container"></div>

    <section class="about-container">
      <div class="about-card">
        <h1>Sobre el Proyecto</h1>
        <div class="about-text">
          <p><strong>ChatFlow SPA:</strong> Una Single Page Application (SPA) modular construida con JavaScript nativo que implementa enrutamiento virtual mediante la History API. El sistema maneja componentes interactivos dinámicos y persistencia de datos en memoria durante la sesión del usuario.</p>
          <p><strong>Seguridad y Backend:</strong> Conexión blindada a la API de Google Gemini implementada mediante Vercel Serverless Functions, garantizando que las llaves privadas nunca queden expuestas en el frontend del cliente.</p>
        </div>

        <h1 class="character-title">El Personaje: Starmie</h1>
        <div class="about-text">
          <p>Starmie es un Pokémon de tipo Agua/Psíquico conocido como el Pokémon Misterioso. Su cuerpo geométrico perfectamente simétrico y su gema central roja, que brilla con los colores del arcoíris, han alimentado leyendas sobre su origen extraterrestre.</p>
          <p>En esta aplicación, Starmie utiliza sus avanzadas habilidades psíquicas para establecer un canal de comunicación telepática directo con la mente del usuario, respondiendo de manera analítica, enigmática y profundamente conectada con el cosmos.</p>
        </div>
      </div>
    </section>
  `;
}
