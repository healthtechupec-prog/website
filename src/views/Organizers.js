// Organizers Page
window.OrganizersPage = {
  render: async () => {
    return `
      <div class="container section">
        <div class="text-center mb-16">
          <h1 class="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary-800 to-primary-600">Organisateurs</h1>
          <p class="text-gray-600 text-lg">L'équipe qui rend cet événement possible</p>
        </div>
        
        <!-- Administration -->
        <div class="organizer-section mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 shadow-xl">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-2xl">🏛️</span> Administration
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto">
            <!-- CMQ -->
            <div class="group relative w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-300">
              <img src="src/images/logos/CMQ.png" alt="CMQ" class="h-24 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-xl font-bold mb-2">CMQ Santé Autonomie</h3>
              <p class="text-gray-600 text-sm">Campus des Métiers et des Qualifications</p>
            </div>
            
            <!-- UPEC -->
            <div class="group relative w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-300">
              <img src="src/images/logos/UPEC.png" alt="UPEC" class="h-24 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-xl font-bold mb-2">Université Paris-Est Créteil</h3>
              <p class="text-gray-600 text-sm">UPEC</p>
            </div>
            
            <!-- EPISEN -->
            <div class="group relative w-full bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary-300">
              <img src="src/images/logos/EPISEN.jpg" alt="EPISEN" class="h-24 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110">
              <h3 class="text-primary-900 text-xl font-bold mb-2">EPISEN</h3>
              <p class="text-gray-600 text-sm">École Publique d'Ingénieurs de la Santé et du Numérique</p>
            </div>
          </div>
        </div>

        <!-- Comité d'Organisation -->
        <div class="organizer-section mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-2xl">👥</span> Comité d'Organisation
              </h2>
            </div>
          </div>
          
          <!-- EPISEN -->
          <div class="mb-12">
            <h3 class="text-center text-lg font-bold text-primary-700 mb-6 flex items-center justify-center gap-2">
              <span class="w-12 h-0.5 bg-primary-300"></span>
              EPISEN – Informatique & Santé
              <span class="w-12 h-0.5 bg-primary-300"></span>
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4 justify-items-center max-w-5xl mx-auto">
              ${[
        { name: 'Pr. Abdelhamid Mellouk', role: 'Resp. département Informatique et Santé (ITS)', initials: 'AM' },
        { name: 'José Diaz', role: 'Enseignant école d\'ingénieur', initials: 'JD' },
        { name: 'MCF Thiago Abreu', role: 'Maître de conférences', initials: 'TA' },
        { name: 'Pr. Sara Brofferio', role: 'Resp. département Systèmes d\'information (SI)', initials: 'SB' },
        { name: 'Dr. Ali Aghaei', role: 'Resp. département Génie biomédical et santé (ISBS)', initials: 'AA' }
      ].map(member => `
                <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 w-full">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                    ${member.initials}
                  </div>
                  <h4 class="text-primary-900 font-bold text-sm mb-1">${member.name}</h4>
                  <p class="text-gray-500 text-xs">${member.role}</p>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- CMQ Santé Autonomie Bien Vieillir -->
          <div class="mb-12">
            <h3 class="text-center text-lg font-bold text-primary-700 mb-6 flex items-center justify-center gap-2">
              <span class="w-12 h-0.5 bg-primary-300"></span>
              CMQ Santé Autonomie Bien Vieillir
              <span class="w-12 h-0.5 bg-primary-300"></span>
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-2 gap-4 justify-items-center max-w-2xl mx-auto">
              ${[
        { name: 'Chantal Artignan', role: 'Directrice opérationnelle', initials: 'CA' },
        { name: 'Pr. Marie Laurent', role: 'Médecine, spécialité gériatrie', initials: 'ML' }
      ].map(member => `
                <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 w-full">
                  <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                    ${member.initials}
                  </div>
                  <h4 class="text-primary-900 font-bold text-sm mb-1">${member.name}</h4>
                  <p class="text-gray-500 text-xs">${member.role}</p>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Pôle Entrepreneuriat UPEC -->
          <div class="mb-12">
            <h3 class="text-center text-lg font-bold text-primary-700 mb-6 flex items-center justify-center gap-2">
              <span class="w-12 h-0.5 bg-primary-300"></span>
              Pôle Entrepreneuriat de l'UPEC
              <span class="w-12 h-0.5 bg-primary-300"></span>
            </h3>
            <div class="grid grid-cols-1 gap-4 justify-items-center max-w-xs mx-auto">
              <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 w-full">
                <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                  NB
                </div>
                <h4 class="text-primary-900 font-bold text-sm mb-1">Nicole Brzustowski</h4>
                <p class="text-gray-500 text-xs">Responsable du Pôle Entrepreneuriat</p>
              </div>
            </div>
          </div>
          
          <!-- IUT de Créteil-Vitry -->
          <div class="mb-12">
            <h3 class="text-center text-lg font-bold text-primary-700 mb-6 flex items-center justify-center gap-2">
              <span class="w-12 h-0.5 bg-primary-300"></span>
              IUT de Créteil-Vitry
              <span class="w-12 h-0.5 bg-primary-300"></span>
            </h3>
            <div class="grid grid-cols-1 gap-4 justify-items-center max-w-xs mx-auto">
              <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 w-full">
                <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                  AL
                </div>
                <h4 class="text-primary-900 font-bold text-sm mb-1">Arielle Ladine-Folest</h4>
                <p class="text-gray-500 text-xs">Responsable administrative du site de Vitry</p>
              </div>
            </div>
          </div>
          
          <!-- IAE Gustave Eiffel & Faculté de Droit -->
          <div class="mb-12">
            <h3 class="text-center text-lg font-bold text-primary-700 mb-6 flex items-center justify-center gap-2">
              <span class="w-12 h-0.5 bg-primary-300"></span>
              IAE Gustave Eiffel & Faculté de Droit
              <span class="w-12 h-0.5 bg-primary-300"></span>
            </h3>
            <div class="grid grid-cols-1 gap-4 justify-items-center max-w-xs mx-auto">
              <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300 w-full">
                <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-lg font-bold">
                  CT
                </div>
                <h4 class="text-primary-900 font-bold text-sm mb-1">MCF Clémence Tchakarian</h4>
                <p class="text-gray-500 text-xs">Maître de conférences</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Équipe Site Web -->
        <div class="organizer-section mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 shadow-xl">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-2xl">💻</span> Équipe Site Web
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center max-w-3xl mx-auto">
            ${[
        { name: 'Ammar Souchon', role: 'Étudiant Ingénieur EPISEN ITS', initials: 'AS' },
        { name: 'Abdelhak Heroucha', role: 'Doctorant LISSI', initials: 'AH' },
        { name: 'Samia Ouchallal', role: 'Étudiante Ingénieur EPISEN ITS', initials: 'SO' }
      ].map(member => `
              <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-purple-300 w-full">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  ${member.initials}
                </div>
                <h4 class="text-primary-900 font-bold mb-1">${member.name}</h4>
                <p class="text-gray-500 text-xs">${member.role}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Équipe Social Media -->
        <div class="organizer-section mb-16">
          <div class="text-center mb-10">
            <div class="inline-block px-10 py-3 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl">
              <h2 class="text-white text-xl font-bold uppercase tracking-widest flex items-center gap-3">
                <span class="text-2xl">📱</span> Équipe Social Media
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-6 justify-items-center max-w-xs mx-auto">
            <div class="group bg-white/70 backdrop-blur-md border border-gray-200 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-pink-300 w-full">
              <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                RD
              </div>
              <h4 class="text-primary-900 font-bold mb-1">Rafik Derradji</h4>
              <p class="text-gray-500 text-xs">Doctorant LISSI Airbus</p>
            </div>
          </div>
        </div>

        <!-- Join the Team CTA -->
        <div class="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-16 text-center text-white shadow-2xl">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-4xl font-bold mb-4">Rejoignez l'équipe !</h2>
            <p class="text-white/90 text-lg leading-relaxed mb-8">Vous souhaitez contribuer à l'organisation du Hackathon ? Contactez-nous !</p>
            <a href="mailto:team@healthtech-hackathon.fr" class="inline-flex items-center gap-2 bg-white text-gray-800 text-lg font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-gray-50 hover:shadow-2xl">
              <span>📧</span> Nous contacter
            </a>
          </div>
        </div>
      </div>
    `;
  }
};
