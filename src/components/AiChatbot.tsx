import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Minimize2, Maximize2, Sparkles, User, RefreshCw, MessageSquare } from 'lucide-react';
import { ChatMessage } from '../types';

interface AiChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiChatbot: React.FC<AiChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: '¡Hola! Soy el Asistente Virtual de la Iniciativa PyME & Empresas Familiares de la Escuela de Negocios de UdeSA. ¿En qué puedo orientarte hoy sobre programas, el Censo PyME o la vinculación entre tu empresa y nuestros estudiantes?',
      timestamp: 'Ahora',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    '¿Cómo puedo postular un caso o desafío de mi PyME para los alumnos?',
    '¿Qué diferencia hay entre el Programa Ejecutivo y el Taller de Convivencia?',
    '¿Qué información releva el Censo PyME UdeSA?',
    'Soy estudiante de San Andrés: ¿cómo participo en la iniciativa?',
  ];

  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6),
        }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el servidor.');
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: data.reply || 'Disculpas, no pude procesar la consulta en este momento.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Chat error:', error);
      const fallbackMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'La Iniciativa PyME & Empresas Familiares de UdeSA conecta formación ejecutiva, el Censo PyME y vinculación directa con estudiantes para proyectos reales. Si requerís asistencia directa del equipo directivo, por favor dejanos tu mensaje en la sección de contacto.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] max-w-full shadow-2xl rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 text-white flex flex-col font-sans transition-all duration-200">
      {/* Header bar */}
      <div className="bg-[#071932] px-4 py-3.5 flex items-center justify-between border-b border-blue-900/60">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#0080C9] flex items-center justify-center text-white shadow-xs">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-white tracking-wide">
                Asistente Virtual UdeSA
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="En línea" />
            </div>
            <span className="text-[10px] text-sky-300 block">
              PyME & Empresas Familiares · Powered by Gemini
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-300">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:text-white hover:bg-white/10 rounded"
            title={isMinimized ? 'Expandir' : 'Minimizar'}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:text-white hover:bg-white/10 rounded"
            title="Cerrar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body content when not minimized */}
      {!isMinimized && (
        <>
          {/* Messages list */}
          <div className="flex-1 p-4 overflow-y-auto max-h-[380px] min-h-[260px] space-y-3.5 bg-slate-950 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#003087] flex items-center justify-center text-white shrink-0 mt-0.5 border border-sky-400/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-lg p-3 text-xs leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-[#0080C9] text-white rounded-br-none shadow-xs'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs bg-slate-900/80 p-2.5 rounded max-w-[70%]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-sky-400" />
                <span>Analizando consulta académica...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick starter questions if user has only 1-2 messages */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-slate-900 border-t border-slate-800 space-y-1.5">
              <span className="text-[10px] text-slate-400 uppercase font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-sky-400" />
                Preguntas frecuentes de alumnos y directivos:
              </span>
              <div className="flex flex-col gap-1">
                {sampleQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(q)}
                    className="text-left text-[11px] text-sky-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-2.5 py-1 rounded truncate border border-slate-700/50 transition-colors"
                  >
                    → {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input field */}
          <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribí tu consulta sobre programas, censo o proyectos..."
              disabled={isLoading}
              className="flex-1 bg-slate-950 border border-slate-700 rounded px-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !inputValue.trim()}
              className="p-2 bg-[#0080C9] hover:bg-[#0070B0] text-white rounded disabled:opacity-40 transition-colors shrink-0"
              aria-label="Enviar mensaje"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
