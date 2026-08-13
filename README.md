# StarChat - Telepatía con Starmie

StarChat es una Single Page Application (SPA) modular construida con JavaScript nativo que permite establecer una conexión telepática con el Pokémon Starmie, impulsada por la API oficial de Google Gemini a través de Vercel Serverless Functions.

## 📄 Descripción del Personaje Elegido: Starmie
Starmie es un Pokémon de tipo Agua/Psíquico conocido como el Pokémon Misterioso. Su cuerpo geométrico perfectamente simétrico y su gema central roja, que brilla con los colores del arcoíris, alimentan leyendas sobre su origen extraterrestre. En esta aplicación, Starmie utiliza sus avanzadas habilidades psíquicas para establecer un canal de comunicación telepática directo con la mente del usuario, respondiendo de manera analítica, enigmática y profundamente conectada con el cosmos.

---

## 🚀 Requisitos y Pasos para Ejecutar en Local

Asegúrate de tener instalado [Node.js](https://nodejs.org) (versión 20 o superior).

1. **Instalar Dependencias:** Abre la terminal en la raíz del proyecto y ejecuta:
   ```bash
   npm install
   ```
2. **Instalar Vercel CLI:** Instala la herramienta global de Vercel necesaria para correr el backend local:
   ```bash
   npm install -g vercel
   ```
3. **Configurar el archivo `.env`:** Crea un archivo llamado exactamente `.env` en la raíz de tu proyecto y añade tu clave de Google AI Studio (sin comillas y sin espacios):
   ```text
   GEMINI_API_KEY=tu_api_key_real_aqui
   ```
4. **Ejecutar el Servidor Local:** Inicia el entorno simulado de Vercel corriendo:
   ```bash
   vercel dev
   ```
5. Abre en tu navegador la dirección indicada por la terminal (usualmente `http://localhost:3000`).

---

## 🧪 Cómo Ejecutar Tests (Vitest)

Para validar la inyección de los componentes en el DOM, los IDs de los formularios, las burbujas iniciales de bienvenida y el enrutador virtual de la SPA, ejecuta el siguiente comando en la terminal:
```bash
npx vitest run
```

---

## ☁️ Cómo Desplegar a Vercel

1. **Despliegue Inicial / Producción:** Ejecuta el siguiente comando en la terminal de tu computadora y sigue las instrucciones en pantalla:
   ```bash
   vercel --prod
   ```
2. **Configurar la API Key en la Web:** 
   - Entra a tu panel de control en [vercel.com](https://proyecto-integrador-3-eight.vercel.app) e ingresa a tu proyecto.
   - Ve a **Settings** -> **Environment Variables**.
   - Añade una nueva variable con la Key `GEMINI_API_KEY` y pega tu clave real de Google en el campo Value.
   - Haz clic en **Save**.
3. **Activar Cambios:** Ve a la pestaña **Deployments**, haz clic en los tres puntos de tu última subida y selecciona **Redeploy**.

---

## 📸 Capturas de Pantalla de la Aplicación Funcionando


* **Vista de Inicio (Home):** `![Vista Home](./assets/captura-home.png)`
* **Vista de Conversación (Chat):** `![Vista Chat](./assets/captura-chat.png)`
* **Vista de Información (About):** `![Vista About](./assets/captura-about.png)`

---

## 🔗 Link a la Aplicación Desplegada

Puedes acceder a la versión en vivo de la aplicación en internet a través del siguiente enlace oficial:
(https://proyecto-integrador-3-eight.vercel.app)

---

## 🤖 Registro del Uso de AI en el Proyecto

En cumplimiento con las buenas prácticas de la rúbrica, se detalla el uso ético y técnico de herramientas de Inteligencia Artificial en el desarrollo de esta SPA:

1. **Arquitectura y Lógica del Enrutador (SPA):** Se utilizó asistencia de IA para estructurar el enrutamiento nativo con la History API, asegurando el correcto funcionamiento de los botones *back/forward* del navegador y mitigando el error 404 al recargar con F5 mediante archivos de reescritura (`vercel.json`).
2. **Refactorización del Backend (Node.js):** Co-diseño de la Serverless Function en `api/chat.js` para parsear de forma segura las peticiones dirigidas al modelo de lenguaje `gemini-3.6-flash`, implementando un manejo robusto de errores internos (Error 500) y de red (*fetch failed*).
3. **Diseño de Pruebas Automatizadas (Vitest):** Generación del entorno virtual de simulación de navegador con *jsdom* para verificar la inyección dinámica de etiquetas en el árbol de nodos del DOM.
4. **Optimización Estética (CSS):** Asistencia en la creación del fondo de galaxia con estrellas parpadeantes nativas mediante `@keyframes` y el uso de `mix-blend-mode` para la integración de texturas espaciales responsivas sin penalizar el rendimiento.
