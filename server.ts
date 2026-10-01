import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  } catch (error) {
    console.error('Failed to initialize GoogleGenAI client:', error);
  }
}

// In-memory submissions store for Censo PyME and Contact
const censoSubmissions: any[] = [];
const contactSubmissions: any[] = [];

// AI Chatbot endpoint for student and executive inquiries
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Mensaje requerido.' });
    }

    const systemInstruction = `Sos el Asistente Virtual Oficial de la Iniciativa "PyME & Empresas Familiares" de la Escuela de Negocios de la Universidad de San Andrés (UdeSA).
Tu misión es asesorar y guiar a estudiantes (de grado y posgrado), graduados, dueños de PyMEs, miembros de empresas familiares (fundadores, sucesores, directores) e investigadores.

Tono y Estilo:
- Institucional, riguroso, cálido y contemporáneo (estilo Universidad de San Andrés).
- Español rioplatense educado, sin modismos excesivos ni clichés vacíos de startup.
- Estructurado, claro y con respuestas directas y accionables.

Áreas y Conocimiento clave de la Iniciativa:
1. Propósito: Acompañar a las PyMEs y empresas familiares en sus desafíos de crecimiento, profesionalización, transformación y continuidad, conectando conocimiento académico, experiencia empresaria y nuevas generaciones.
2. Tres Ejes Estratégicos:
   - Desarrollo de Personas: Formación en UdeSA (grado, posgrado, ejecutiva).
   - Desarrollo para la Comunidad: Casos, investigaciones, herramientas, webinars.
   - Networking: Desayunos temáticos, encuentros intergeneracionales, comunidad de pares.
3. Tres Desafíos Centrales:
   - Sucesión (continuidad generacional, traspaso ordenado, protocolos familiares).
   - Convivencia (relaciones horizontales entre hermanos/primos, gobernanza, directorio vs gestión).
   - Desarrollo del Negocio (profesionalización, estrategia, finanzas, transformación digital, IA y escalabilidad).
4. Vinculación Universidad + Empresa:
   - Empresas pueden presentar casos y problemáticas reales para Trabajos Prácticos (TPs) de materias, Trabajos Finales de Graduación (TFG), tesis de maestría o pasantías.
   - Estudiantes aplican metodología académica a contextos reales de PyMEs argentinas.
5. Censo PyME UdeSA:
   - Relevamiento impulsado para entender el ecosistema PyME de la comunidad UdeSA, sus sectores, brechas y oportunidades de vinculación. Cuenta con 4 bloques y un futuro Benchmark PyME.
6. Observatorio PyME:
   - Biblioteca de investigaciones, estudios, censos y whitepapers de profesores e investigadores.
7. Programas & Formación:
   - Programa Ejecutivo PyME (intensivo de 3 días en desarrollo).
   - Programas de Empresas Familiares y Gobernanza.
   - Talleres de Convivencia Generacional para familias empresarias.
   - Seminarios y materias electivas para alumnos UdeSA.
8. Podcast: "Conversaciones que hacen empresa" (próximamente en producción audiovisual).
9. Regla de Oro sobre datos: Si te consultan por fechas exactas de inscripción, aranceles o correos definitivos, señalá con honestidad que son [FECHA A CONFIRMAR] o [EMAIL A CONFIRMAR] por la Dirección Ejecutiva de la Escuela de Negocios y que pueden dejar sus datos en el formulario de la página.`;

    if (ai) {
      try {
        const contents: any[] = [];
        
        // Add previous history if available (limit to last 6 turns)
        if (Array.isArray(history)) {
          const recentHistory = history.slice(-6);
          for (const item of recentHistory) {
            if (item.sender === 'user') {
              contents.push({ role: 'user', parts: [{ text: item.text }] });
            } else if (item.sender === 'bot') {
              contents.push({ role: 'model', parts: [{ text: item.text }] });
            }
          }
        }

        contents.push({ role: 'user', parts: [{ text: message }] });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const reply = response.text || 'Disculpas, no pude generar una respuesta en este momento. Por favor intentá nuevamente o contactanos.';
        return res.json({ reply });
      } catch (geminiError) {
        console.error('Gemini API call failed, using institutional fallback:', geminiError);
      }
    }

    // Fallback response generator if API key is not configured or temporary error occurs
    const lower = message.toLowerCase();
    let fallbackReply = `Gracias por tu consulta sobre la Iniciativa PyME & Empresas Familiares de la Escuela de Negocios de UdeSA. `;

    if (lower.includes('estudiante') || lower.includes('alumno') || lower.includes('carrera') || lower.includes('tp') || lower.includes('tesis')) {
      fallbackReply += `Como estudiante de San Andrés, podés participar a través de proyectos de vinculación aplicada (Trabajos Prácticos en empresas reales, TFG o tesis de posgrado), pasantías y electivas específicas. Además, te invitamos a completar el Censo PyME si tu familia posee una empresa o si trabajás en una.`;
    } else if (lower.includes('empresa') || lower.includes('familiar') || lower.includes('sucesion') || lower.includes('hijo') || lower.includes('padre')) {
      fallbackReply += `La iniciativa aborda específicamente los tres grandes dilemas de la empresa familiar: el traspaso generacional (sucesión), las dinámicas vinculares (convivencia y gobernanza) y la competitividad y profesionalización del negocio. Podés sumarte a los Talleres de Convivencia Generacional y al próximo Programa Ejecutivo PyME.`;
    } else if (lower.includes('censo') || lower.includes('encuesta')) {
      fallbackReply += `El Censo PyME UdeSA "Conocer para conectar" busca relevar el ecosistema de pequeñas y medianas empresas vinculadas a nuestra comunidad educativa para mapear sectores, desafíos y oportunidades de colaboración académica. Podés completarlo en la sección Censo de este sitio.`;
    } else if (lower.includes('programa') || lower.includes('curso') || lower.includes('ejecutivo')) {
      fallbackReply += `Ofrecemos formación ejecutiva de alto impacto: el Programa Ejecutivo PyME (intensivo de 3 días), programas focalizados en Gobierno de Empresas Familiares y talleres experienciales para equipos directivos. Las fechas y aranceles están en proceso de confirmación por la Escuela de Negocios.`;
    } else {
      fallbackReply += `Nuestra iniciativa conecta formación ejecutiva, vinculación académica con alumnos, producción de casos reales e investigación aplicada a través del Observatorio PyME. ¿Te gustaría saber más sobre algún programa, cómo vincular tu empresa o sobre el Censo?`;
    }

    return res.json({ reply: fallbackReply });
  } catch (error) {
    console.error('Server chat error:', error);
    res.status(500).json({ error: 'Error procesando la consulta.' });
  }
});

// Endpoint for Censo PyME submission
app.post('/api/censo', (req, res) => {
  try {
    const data = req.body;
    const submission = {
      id: `censo-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...data,
    };
    censoSubmissions.push(submission);
    
    // Return confirmation with acknowledgment
    res.status(201).json({
      success: true,
      id: submission.id,
      message: '¡Muchas gracias por participar del Censo PyME UdeSA! Tus datos han sido registrados exitosamente.',
      nextStep: 'En breve recibirás novedades sobre el relevamiento consolidado y el futuro Benchmark PyME.',
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'No se pudo guardar la información del censo.' });
  }
});

// Endpoint for Contact / Partnership inquiries
app.post('/api/contacto', (req, res) => {
  try {
    const data = req.body;
    const submission = {
      id: `contacto-${Date.now()}`,
      timestamp: new Date().toISOString(),
      ...data,
    };
    contactSubmissions.push(submission);

    res.status(201).json({
      success: true,
      message: 'Tu mensaje fue recibido por el equipo de la Escuela de Negocios UdeSA. Nos pondremos en contacto a la brevedad.',
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error procesando la solicitud de contacto.' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });
}

startServer();
