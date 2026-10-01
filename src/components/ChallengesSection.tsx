import React from 'react';
import { KEY_CHALLENGES } from '../data/mockData';
import { GitFork, Users, TrendingUp, Check } from 'lucide-react';

export const ChallengesSection: React.FC = () => {
  return (
    <section id="desafios" className="py-20 lg:py-28 bg-[#F8FAFC] text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Focos Críticos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Tres desafíos clave de la empresa familiar
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Abordamos de manera simultánea la continuidad del legado, la armonía en las relaciones de gobierno y la competitividad en un mercado en constante transformación.
          </p>
        </div>

        {/* 3 Standout Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_CHALLENGES.map((challenge, idx) => (
            <div
              key={challenge.id}
              className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon + Roman Index */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded bg-blue-50 border border-blue-100 flex items-center justify-center text-[#003087]">
                    {challenge.iconName === 'GitFork' && <GitFork className="w-6 h-6" />}
                    {challenge.iconName === 'Users' && <Users className="w-6 h-6" />}
                    {challenge.iconName === 'TrendingUp' && <TrendingUp className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold text-slate-400 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-serif-title font-bold text-[#003087]">
                    {challenge.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0080C9] uppercase tracking-wider mt-1">
                    {challenge.subtitle}
                  </p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {challenge.description}
                </p>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800 block">
                    Líneas de trabajo UdeSA:
                  </span>
                  <ul className="space-y-1.5">
                    {challenge.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#0080C9] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-xs text-slate-500 italic">
                Enfoque integral entre familia, propiedad y gestión empresarial.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
