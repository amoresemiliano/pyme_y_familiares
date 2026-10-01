import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { UserCheck, Shield } from 'lucide-react';

export const TeamSection: React.FC = () => {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#0080C9] font-bold">
            Gobernanza & Conducción
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#003087] tracking-tight">
            Equipo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            La iniciativa está coordinada por el cuerpo docente e investigadores de la Escuela de Negocios de la Universidad de San Andrés.
          </p>
        </div>

        {/* 4 Cards Grid mirroring the 4 photos in the IA & Negocios screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200/90 rounded-lg p-6 text-center space-y-4 hover:shadow-md transition-shadow"
            >
              {/* Photo / Avatar Placeholder */}
              <div className="relative mx-auto w-28 h-28 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100 flex items-center justify-center shadow-xs">
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-100 to-blue-50 text-[#003087]">
                  <UserCheck className="w-10 h-10 opacity-40 mb-1" />
                  <span className="text-[10px] font-mono text-slate-400">UdeSA</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif-title font-bold text-[#003087]">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#0080C9]">
                  {member.role}
                </p>
                <p className="text-[11px] text-slate-500 font-mono">
                  {member.credentials}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                {member.bio}
              </p>

              <div className="text-[10px] text-slate-400 uppercase tracking-widest pt-1">
                Designación oficial en confirmación
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
