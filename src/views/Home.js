// Global Home Page
window.HomePage = {
  render: async () => {
    const sliderImages = [
      { src: 'src/images/slider_image_accueil/IMG_2221.jpg', alt: 'Hackathon 1' },
      { src: 'src/images/slider_image_accueil/IMG_2229.jpg', alt: 'Hackathon 2' },
      { src: 'src/images/slider_image_accueil/IMG_2234.jpg', alt: 'Hackathon 3' },
      { src: 'src/images/slider_image_accueil/IMG_2246.jpg', alt: 'Hackathon 4' },
      { src: 'src/images/slider_image_accueil/IMG_2283.jpg', alt: 'Hackathon 5' },
      { src: 'src/images/slider_image_accueil/IMG_2956.jpg', alt: 'Hackathon 6' },
      { src: 'src/images/slider_image_accueil/_DSF0044.jpg', alt: 'Hackathon 7' },
      { src: 'src/images/slider_image_accueil/lancement hackathon 1.jpg', alt: 'Lancement Hackathon' }
    ];

    return `
      <!-- Hero Section with Video Background -->
      <section class="hero section" style="position: relative; text-align: center; padding: 8rem 0 6rem; overflow: hidden; min-height: 80vh; display: flex; align-items: center;">
        <!-- Video Background -->
        <video autoplay muted loop playsinline style="position: absolute; top: 50%; left: 50%; min-width: 100%; min-height: 100%; width: auto; height: auto; transform: translate(-50%, -50%); z-index: 0; object-fit: cover;">
          <source src="src/vidéo/Background.mp4?v=20260110" type="video/mp4">
        </video>
        
        <!-- Overlay -->
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, rgba(219, 234, 254, 0.85) 0%, rgba(255, 255, 255, 0.9) 100%); z-index: 1;"></div>
        
        <div class="container" style="position: relative; z-index: 2; width: 100%;">
          <div style="display: inline-block; background: rgba(59, 130, 246, 0.15); padding: 0.5rem 1.5rem; border-radius: 50px; margin-bottom: 1.5rem; border: 1px solid rgba(59, 130, 246, 0.3); backdrop-filter: blur(10px);">
            <span style="color: var(--color-primary-700); font-weight: 600; font-size: 0.9rem;" data-i18n="home.hero.date">5-6 Février 2026</span>
          </div>
          
          <h1 style="font-size: clamp(2.5rem, 5vw, 4rem); margin-bottom: 1rem; color: var(--color-primary-900); font-weight: 700; letter-spacing: -1px; text-shadow: 0 2px 10px rgba(255,255,255,0.5); line-height: 1.1;" data-i18n="home.hero.title">IA pour le Bien Vieillir</h1>
          <p style="font-size: clamp(1.1rem, 3vw, 1.5rem); color: var(--color-primary-600); margin-bottom: 3rem; font-weight: 500;" data-i18n="home.hero.subtitle">Hackathon Health-Tech Event 2026</p>
          
          <div style="display: flex; justify-content: center; gap: 1rem; font-weight: 500; flex-wrap: wrap;">
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.9); border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.1); backdrop-filter: blur(10px); font-size: 0.9rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-primary-600);"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span data-i18n="home.hero.date">5-6 Février 2026</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.9); border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.1); backdrop-filter: blur(10px); font-size: 0.9rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-primary-600);"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span data-i18n="home.hero.location">Campus UPEC Vitry-sur-Seine</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1rem; background: rgba(255,255,255,0.9); border-radius: var(--radius-md); box-shadow: 0 4px 15px rgba(0,0,0,0.1); backdrop-filter: blur(10px); font-size: 0.9rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-primary-600);"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>36 heures</span>
            </div>
          </div>
          
          <!-- Scroll Down Arrow -->
          <div style="margin-top: 3rem;">
            <a href="#about" onclick="document.getElementById('about').scrollIntoView({behavior: 'smooth'}); return false;" style="display: inline-block; color: var(--color-primary-600); animation: bounce 2s infinite; cursor: pointer; opacity: 0.8; transition: opacity 0.3s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.8'">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <!-- Image Slider Section -->
      <section class="section" style="background: linear-gradient(135deg, var(--color-primary-50), white); padding: 4rem 0;">
        <div class="container">
          <div id="image-slider" style="position: relative; max-width: 900px; margin: 0 auto; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.15);">
            <div id="slider-track" style="display: flex; transition: transform 0.5s ease-in-out;">
              ${sliderImages.map((img, i) => `
                <div class="slide" style="min-width: 100%; position: relative;">
                  <img src="${img.src}" alt="${img.alt}" style="width: 100%; height: 500px; object-fit: cover;">
                </div>
              `).join('')}
            </div>
            <!-- Navigation Arrows -->
            <button id="slider-prev" style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.9); border: none; border-radius: 50%; width: 48px; height: 48px; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s;" onmouseover="this.style.background='white'" onmouseout="this.style.background='rgba(255,255,255,0.9)'">❮</button>
            <button id="slider-next" style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.9); border: none; border-radius: 50%; width: 48px; height: 48px; cursor: pointer; font-size: 1.5rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2); transition: all 0.3s;" onmouseover="this.style.background='white'" onmouseout="this.style.background='rgba(255,255,255,0.9)'">❯</button>
            <!-- Dots -->
            <div id="slider-dots" style="position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); display: flex; gap: 10px;">
              ${sliderImages.map((_, i) => `
                <span class="slider-dot" data-index="${i}" style="width: 12px; height: 12px; border-radius: 50%; background: ${i === 0 ? 'white' : 'rgba(255,255,255,0.5)'}; cursor: pointer; transition: all 0.3s; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></span>
              `).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section container">
        <div style="max-width: 900px; margin: 0 auto; text-align: center;">
          <h2 style="margin-bottom: 1.5rem; font-size: 2.5rem;" data-i18n="home.about.title">Qu'est-ce que le Hackathon Health-Tech ?</h2>
          <p style="font-size: 1.25rem; color: var(--color-gray-700); line-height: 1.8;" data-i18n="home.about.text">
            Un challenge de 36 heures où des étudiants de profils variés travaillent en équipes pluridisciplinaires pour proposer des solutions innovantes autour du bien vieillir grâce à l'IA.
          </p>
        </div>
      </section>

      <!-- Theme Section -->
      <section class="section" style="background: linear-gradient(135deg, var(--color-primary-50), rgba(255,255,255,0.8));">
        <div class="container" style="max-width: 900px; margin: 0 auto; text-align: center;">
          <h2 style="margin-bottom: 1.5rem; font-size: 2rem; color: var(--color-primary-800);" data-i18n="home.theme.title">La thématique</h2>
          <p style="font-size: 1.15rem; color: var(--color-gray-700); line-height: 1.8;" data-i18n="home.theme.text">
            Bien vieillir grâce à l'IA : prévention, maintien à domicile, lien social, soutien aux aidants et soignants, accompagnement, droit à la dignité, diagnostic médical, monitoring...
          </p>
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="section container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        <div class="card" style="text-align: center;">
          <div style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200)); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--color-primary-700);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 style="margin-bottom: 1rem; font-size: 1.4rem;" data-i18n="home.features.mentorship.title">Experts & Mentors</h3>
          <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="home.features.mentorship.text">Accès à des experts en présentiel et distanciel, ressources et bibliographies en ligne tout au long de l'événement.</p>
        </div>
        
        <div class="card" style="text-align: center;">
          <div style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200)); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--color-primary-700);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
          </div>
          <h3 style="margin-bottom: 1rem; font-size: 1.4rem;" data-i18n="home.features.prizes.title">Pitch & Présentation</h3>
          <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="home.features.prizes.text">Les finalistes présentent leur projet devant un Grand Jury.</p>
        </div>
        
        <div class="card" style="text-align: center;">
          <div style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary-100), var(--color-primary-200)); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--color-primary-700);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h3 style="margin-bottom: 1rem; font-size: 1.4rem;" data-i18n="home.features.networking.title">Équipes Pluridisciplinaires</h3>
          <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="home.features.networking.text">Ingénieurs, informaticiens, managers, professionnels de santé, juristes... Tous les profils collaborent !</p>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="section" style="background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); text-align: center; padding: 4rem 0; margin-top: 3rem;">
        <div class="container">
          <h2 style="color: white; font-size: 2.5rem; margin-bottom: 1rem;" data-i18n="home.cta.title">Un événement unique</h2>
          <p style="color: rgba(255,255,255,0.9); font-size: 1.25rem; margin-bottom: 2rem;" data-i18n="home.cta.text">150 à 200 participants réunis pour 36 heures d'innovation intensive.</p>
          <a href="#/program" class="btn" style="background: white; color: var(--color-primary-700); font-size: 1.1rem; padding: 1rem 2.5rem; font-weight: 600;" data-i18n="home.cta.button">
            Découvrir le programme
          </a>
        </div>
      </section>
    `;
  },

  setup: () => {
    // Initialize slider
    const track = document.getElementById('slider-track');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (!track) return;

    let currentSlide = 0;
    const totalSlides = dots.length;

    const goToSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      dots.forEach((dot, i) => {
        dot.style.background = i === currentSlide ? 'white' : 'rgba(255,255,255,0.5)';
      });
    };

    prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));

    dots.forEach(dot => {
      dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.index)));
    });

    // Auto-advance every 4 seconds
    setInterval(() => goToSlide(currentSlide + 1), 4000);
  }
};

