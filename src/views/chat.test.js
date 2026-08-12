import { beforeEach, describe, expect, test } from 'vitest';
import { renderChat } from './chat.js';

describe('Pruebas unitarias automatizadas - Chat de Starmie', () => {
  
  // Antes de correr cada test, preparamos una pantalla limpia simulada en memoria
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  // TEST 1: Verifica la carga de la vista y el título principal
  test('1. Debería inyectar la estructura del chat y el título místico en el DOM', () => {
    renderChat();
    const container = document.querySelector('.chat-container');
    expect(container).not.toBeNull();

    const title = document.querySelector('h2');
    expect(title.textContent).toBe('Telepatía con Starmie');
  });

  // TEST 2: Verifica la existencia de la caja de mensajes y el mensaje de bienvenida
  test('2. Debería mostrar el contenedor de mensajes con el saludo del sistema', () => {
    renderChat();
    const chatBox = document.getElementById('chatBox');
    expect(chatBox).not.toBeNull();

    const systemMessage = chatBox.querySelector('.message.system');
    expect(systemMessage).not.toBeNull();
    expect(systemMessage.textContent).toContain('Sientes una voz en tu mente...');
  });

  // TEST 3: Verifica los elementos del formulario de envío
  test('3. Debería renderizar la casilla de entrada de texto (input) y el formulario', () => {
    renderChat();
    const form = document.getElementById('chatForm');
    expect(form).not.toBeNull();

    const input = document.getElementById('userInput');
    expect(input).not.toBeNull();
    expect(input.placeholder).toBe('Escribe un mensaje mental para Starmie...');
  });

  // TEST 4: Verifica el estado de carga que exige la rúbrica
  test('4. Debería incluir el indicador de ondas psíquicas oculto por defecto al cargar', () => {
    renderChat();
    const typingStatus = document.getElementById('typingStatus');
    expect(typingStatus).not.toBeNull();
    
    expect(typingStatus.textContent).toContain('Starmie está transmitiendo ondas psíquicas...');
    expect(typingStatus.classList.contains('hidden')).toBe(true);
  });
});
