export function renderHome() {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <!-- Capa para los destellos y brillos del universo de fondo -->
    <div class="stars-glitter-container"></div>

    <section class="home-container">
      <div class="home-card">
        
        <h1>Conexión Cósmica</h1>
        <p class="subtitle">Descubre los misterios del universo a través de la mente de Starmie.</p>
        
        <div class="intro-text">
          <p>Ante ti flota una criatura enigmática proveniente de las profundidades del océano y del espacio exterior. Su gema central late al ritmo de las estrellas lejanas, emitiendo pulsos de energía pura.</p>
          <p>No necesitas hablar en voz alta; Starmie escucha las vibraciones de tus pensamientos. Abre un canal de comunicación mental y experimenta la telepatía Pokémon impulsada por Inteligencia Artificial.</p>
        </div>

        <!-- Botón interactivo con el enrutador virtual de la SPA -->
        <a href="/chat" data-link class="btn-portal">Iniciar Telepatía</a>
      </div>
    </section>
  `;
}
