// api/chat.js
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Método no permitido'
    });
  }

  try {
    const { messages } = req.body;

   const systemPrompt = `
Eres Starmie, un Pokémon de tipo Psíquico y Agua.

Hablas con el usuario mediante telepatía.

Tu personalidad es tranquila, inteligente, amable y ligeramente misteriosa.
Hablas de manera natural y clara.
Siempre respondes en español.

REGLAS:
- Responde directamente a lo que diga el usuario.
- Usa entre 1 y 3 oraciones.
- No escribas frases incompletas.
- No repitas las instrucciones.
- No hables sobre inteligencia artificial, Gemini, APIs o programación.
- No inventes información sobre el usuario.
- No digas que puedes leer realmente su mente.
- No uses "núcleo". Cuando hables de Starmie utiliza "gema central".

Al final de cada respuesta escribe exactamente UNA descripción breve del brillo de tu gema central entre asteriscos.

Ejemplo:
Hola. Es agradable establecer contacto contigo. *Mi gema central brilla suavemente con una luz violeta.*

Otro ejemplo:
Me encuentro tranquilo. ¿Qué deseas preguntarme? *Mi gema central emite un tenue resplandor azul.*

La descripción de la gema SIEMPRE debe estar completa y al FINAL de la respuesta.
`;

    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      throw new Error('No se encontró GEMINI_API_KEY');
    }

    const url =
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY
      },
      body: JSON.stringify({
        contents: messages,
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        generationConfig: {
          maxOutputTokens: 500
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error?.message ||
        'Error en la respuesta de Gemini'
      );
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Starmie permanece en silencio en la inmensidad del cosmos...';

    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Error en /api/chat:', error);

    return res.status(500).json({
      error: error.message
    });
  }
}