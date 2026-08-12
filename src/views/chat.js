// Historial de conversación en memoria (se mantiene mientras no se recargue la app)
let chatHistory = [];

export function renderChat() {
  const app = document.getElementById('app');
  
  // SOLUCIÓN: Un solo bloque unificado con la capa de estrellas, el título y la caja de chat completa
  app.innerHTML = `
    <!-- Capa para los destellos y brillos del universo de la imagen -->
    <div class="stars-glitter-container"></div>

    <section class="chat-container">
      <!-- Encabezado con la imagen corregida inmune a bloqueos -->
      <div class="chat-header-title">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png" alt="Starmie" class="starmie-mini-pic" />
        <h2>Telepatía con Starmie</h2>
      </div>
      
      <!-- Contenedor donde se verán los mensajes -->
      <div class="chat-box" id="chatBox">
        <div class="message system">
          <p><em>*Una mística estrella de mar violeta flota ante ti. Su gema central emite un pulso tenue de luz multicolor. Sientes una voice en tu mente...*</em></p>
        </div>
      </div>

      <!-- Estado Escribiendo -->
      <div id="typingStatus" class="typing-status hidden">Starmie está transmitiendo ondas psíquicas...</div>

      <!-- Input y Botón de Enviar -->
      <form id="chatForm" class="chat-form">
        <input type="text" id="userInput" placeholder="Escribe un mensaje mental para Starmie..." required autocomplete="off" />
        <button type="submit">Enviar</button>
      </form>
    </section>
  `;

  // Volver a renderizar el historial existente si el usuario cambió de pestaña y regresó
  const chatBox = document.getElementById('chatBox');
  if (chatBox) {
    chatBox.innerHTML = `
      <div class="message system">
        <p><em>*Una mística estrella de mar violeta flota ante ti. Su gema central emite un pulso tenue de luz multicolor. Sientes una voz en tu mente...*</em></p>
      </div>
    `;
    chatHistory.forEach(msg => appendMessage(msg.role === 'model' ? 'assistant' : 'user', msg.parts[0].text));
    scrollToBottom();
  }

  // Escuchar el envío del formulario
  const chatForm = document.getElementById('chatForm');
  chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userInput = document.getElementById('userInput');
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Mostrar mensaje del usuario en pantalla y guardarlo en el historial en formato Gemini
    appendMessage('user', text);
    chatHistory.push({ role: 'user', parts: [{ text: text }] });
    userInput.value = '';
    scrollToBottom();

    // 2. Mostrar estado "Escribiendo..."
    const typingStatus = document.getElementById('typingStatus');
    typingStatus.classList.remove('hidden');
    scrollToBottom();

    try {
      // 3. Petición segura a nuestra Serverless Function de Vercel usando ruta relativa
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: chatHistory })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Falló la conexión psíquica.');

      // 4. Ocultar "Escribiendo..." y mostrar respuesta de Starmie
      typingStatus.classList.add('hidden');
      appendMessage('assistant', data.reply);
      chatHistory.push({ role: 'model', parts: [{ text: data.reply }] });

    } catch (error) {
      typingStatus.classList.add('hidden');
      appendMessage('system-error', `Error: ${error.message}. La conexión telepática se ha interrumpido.`);
      console.error("Chat Error:", error);
      
      // Si la API falla, eliminamos el último mensaje del usuario para no romper el historial
      chatHistory.pop();
    } finally {
      scrollToBottom();
    }
  });
}

function appendMessage(role, content) {
  const chatBox = document.getElementById('chatBox');
  if (!chatBox) return;
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${role}`; 
  msgDiv.innerHTML = `<p>${content}</p>`;
  chatBox.appendChild(msgDiv);
}

function scrollToBottom() {
  const chatBox = document.getElementById('chatBox');
  if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
}
