// Partners Page - IEEE Style Tiers
window.PartnersPage = {
  render: async () => {
    return `
      <div class="container section">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-600">Nos Partenaires</h1>
          <p class="text-gray-600 text-lg">Ils soutiennent l'innovation en santé et technologie</p>
        </div>
        
        <!-- Platinum Partners -->
        <div class="partner-tier platinum mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-gray-300 via-white to-gray-400 shadow-xl border border-gray-300">
              <h2 class="text-gray-800 text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-3xl">💎</span> Platinum
              </h2>
            </div>
          </div>
          <div class="flex justify-center">
            <a href="https://www.groupe-vyv.fr/" target="_blank" rel="noopener" class="group relative w-80 bg-white/80 backdrop-blur-md border-2 border-gray-300 rounded-3xl p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/30" style="text-decoration: none;">
              <img src="src/images/logos/VYV.jpeg" alt="Groupe VYV" class="h-32 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-2xl font-bold mb-2">Groupe VYV</h3>
              <p class="text-gray-600">Mutuelle santé et prévoyance</p>
              <span class="text-primary-600 text-sm mt-2 block">🔗 Visiter le site</span>
            </a>
          </div>
        </div>

        <!-- Gold Partners -->
        <div class="partner-tier gold mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 shadow-xl border border-yellow-400">
              <h2 class="text-yellow-900 text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-3xl">🥇</span> Gold
              </h2>
            </div>
          </div>
          <div class="flex justify-center">
            <a href="https://www.campus-sante-autonomie.fr/" target="_blank" rel="noopener" class="group relative w-80 bg-white/80 backdrop-blur-md border-2 border-yellow-300 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-400/20" style="text-decoration: none;">
              <img src="src/images/logos/CMQ.png" onerror="this.src='src/images/logos/CMQ.jpg'" alt="CMQ" class="h-24 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-xl font-bold mb-2">CMQ</h3>
              <p class="text-gray-600 text-sm">Campus des Métiers et Qualifications</p>
              <span class="text-primary-600 text-sm mt-2 block">🔗 Visiter le site</span>
            </a>
          </div>
        </div>

        <!-- Silver Partners -->
        <div class="partner-tier silver mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 shadow-xl border border-gray-400">
              <h2 class="text-gray-800 text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-3xl">🥈</span> Silver
              </h2>
            </div>
          </div>
          <div class="flex justify-center">
            <a href="https://www.cfanumia.fr/" target="_blank" rel="noopener" class="group relative w-72 bg-white/80 backdrop-blur-md border-2 border-gray-300 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gray-400/20" style="text-decoration: none;">
              <img src="src/images/logos/NUMIA.png" alt="CFA NUMIA" class="h-20 w-full object-contain mb-4 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-lg font-bold mb-2">CFA NUMIA</h3>
              <p class="text-gray-600 text-sm">Centre de Formation des Apprentis</p>
              <span class="text-primary-600 text-sm mt-2 block">🔗 Visiter le site</span>
            </a>
          </div>
        </div>

        <!-- Bronze Partners -->
        <div class="partner-tier bronze mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 shadow-xl border border-orange-500">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-3xl">🥉</span> Bronze
              </h2>
            </div>
          </div>
          <div class="flex justify-center gap-6">
            <div class="w-48 h-32 bg-white/40 border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center text-gray-400 transition-all duration-300 hover:border-primary-400 hover:bg-white/60">
              <p class="font-semibold text-sm">+ Partenaires</p>
              <p class="text-xs">à venir</p>
            </div>
          </div>
        </div>

        <!-- Academic Partners -->
        <div class="partner-tier academic mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 shadow-xl border border-primary-500">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-3xl">🎓</span> Partenaires Académiques
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center max-w-5xl mx-auto">
            ${['UPEC', 'EPISEN', 'IUT', 'SANTE', 'DROIT', 'IAE'].map(name => `
              <div class="group relative w-full bg-white/70 backdrop-blur-md border border-gray-300 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-400">
                <img src="src/images/logos/${name}.png" onerror="this.src='src/images/logos/${name}.jpg'" alt="${name}" class="h-16 w-full object-contain mb-4 transition-transform duration-300 group-hover:scale-110">
                <p class="text-primary-900 font-semibold text-sm">${name === 'UPEC' ? 'Université Paris-Est Créteil' :
        name === 'SANTE' ? 'Faculté de Santé' :
          name === 'DROIT' ? 'Faculté de Droit' :
            name === 'IUT' ? 'IUT de Créteil-Vitry' :
              name
      }</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Partner Village -->
        <div class="relative overflow-hidden bg-gradient-to-br from-primary-500/5 to-blue-500/5 border border-primary-500/10 rounded-3xl p-12 text-center mb-12">
          <div class="text-6xl mb-6 animate-bounce">🏘️</div>
          <h2 class="text-primary-800 text-3xl font-bold mb-4">Village des Partenaires</h2>
          <p class="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">Le 6 février, venez découvrir le Village des Partenaires : un espace dédié aux métiers de la santé et du numérique avec entreprises et établissements.</p>
        </div>

        <!-- Become Partner CTA -->
        <div class="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-16 text-center text-white shadow-2xl shadow-primary-500/20">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-4xl font-bold mb-4">Devenez partenaire</h2>
            <p class="text-white/90 text-lg leading-relaxed mb-8">Associez-vous à un événement innovant, rencontrez les talents de demain et valorisez votre structure.</p>
            <a href="mailto:health.tech.upec@gmail.com" class="inline-flex items-center gap-2 bg-white text-primary-700 text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl">
              <span>🤝</span> Contactez-nous
            </a>
          </div>
        </div>
      </div>
    `;
  }
};


