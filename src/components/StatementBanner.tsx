import React from 'react';
import { INSTITUTIONAL_DATA } from '../data/mockData';

export const StatementBanner: React.FC = () => {
  return (
    <section className="bg-black text-white py-12 sm:py-16 border-b border-neutral-900" aria-label="Declaración de principios">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl sm:text-2xl lg:text-3xl font-serif-title font-medium leading-relaxed tracking-wide text-slate-100 text-balance">
          {INSTITUTIONAL_DATA.heroStatement}
        </p>
      </div>
    </section>
  );
};
