import React, { useEffect, useState } from 'react';

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderWidth, setLoaderWidth] = useState('0%');

  useEffect(() => {
    // Loader logic
    const timeouts = [];
    timeouts.push(setTimeout(() => setLoaderWidth('30%'), 500));
    timeouts.push(setTimeout(() => setLoaderWidth('70%'), 1000));
    timeouts.push(setTimeout(() => setLoaderWidth('100%'), 1500));
    
    timeouts.push(setTimeout(() => {
      setLoaderVisible(false);
    }, 1800));

    // Scroll reveal observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      timeouts.forEach(clearTimeout);
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="selection:bg-blue-100 selection:text-blue-900 bg-white font-sans text-google-gray-800">
      
      {/* Preloader */}
      <div 
        className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out select-none ${loaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-sm w-full">
          <div className="loader-dots-container mb-7 h-12 w-32 relative flex justify-center items-center">
            <span className="fluid-dot fluid-dot-1"></span>
            <span className="fluid-dot fluid-dot-2"></span>
            <span className="fluid-dot fluid-dot-3"></span>
            <span className="fluid-dot fluid-dot-4"></span>
          </div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-base sm:text-lg font-bold text-google-gray-900 tracking-tight font-sans">GDG On Campus</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-google-blue-light text-google-blue border border-blue-200/70 font-mono">SLIET</span>
          </div>
          <div className="w-56 h-[3px] bg-google-gray-100 rounded-full overflow-hidden mt-6 relative shadow-inner">
            <div 
              className="h-full progress-gradient rounded-full transition-all duration-300 ease-out" 
              style={{ width: loaderWidth }}
            ></div>
          </div>
        </div>
      </div>

      <div className="google-bar fixed top-0 left-0 right-0 z-[60]"></div>

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b border-google-gray-200/90 bg-white/90 backdrop-blur-md transition-all">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a className="flex items-center gap-3.5 group" href="#home">
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-google-gray-900 flex items-center gap-1.5 font-sans">
                GDG On Campus
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </span>
              <span className="text-xs font-mono text-google-gray-600 font-medium">SLIET Longowal</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-google-gray-700">
            <a className="nav-link px-4 py-2 hover:text-google-blue transition" href="#events">Events</a>
            <a className="nav-link px-4 py-2 hover:text-google-blue transition" href="#about">About</a>
            <a className="nav-link px-4 py-2 hover:text-google-blue transition" href="#team">Team</a>
            <a className="nav-link px-4 py-2 hover:text-google-blue transition" href="#gallery">Gallery</a>
          </nav>
          <div className="flex items-center gap-3">
            <a 
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white bg-google-blue hover:bg-google-blue-hover transition-all shadow-md hover:shadow-lg active:scale-95" 
              href="https://gdg.community.dev" 
              target="_blank" 
              rel="noreferrer"
            >
              Join Chapter
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* HERO SECTION */}
        <section className="pt-20 pb-20 flex flex-col items-center text-center relative reveal" id="home">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-google-blue-light text-xs font-semibold text-google-blue mb-7 shadow-sm">
            <span className="text-google-gray-800">Official Student Chapter</span>
            <span className="text-blue-300">•</span>
            <span className="font-mono font-medium">2024–2025</span>
          </div>
          <h1 className="font-sans font-bold tracking-tight text-google-gray-900 leading-[1.1] text-[clamp(2.75rem,7vw,5.5rem)] max-w-5xl">
            Learn. <span className="text-google-blue underline decoration-[#4285F4]/30 decoration-4 underline-offset-8">Build.</span> <span className="text-google-green-dark">Ship.</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-google-gray-700 max-w-2xl font-normal leading-relaxed reveal reveal-delay-1">
            SLIET’s student developer collective. We host hands-on Google Cloud labs, flagship hackathons, open-source sprints, and peer-to-peer tech sessions on campus.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal reveal-delay-2">
            <a className="inline-flex items-center px-8 py-4 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-bold text-sm transition-all shadow-lg active:scale-95" href="#events">Explore Upcoming Events</a>
            <a className="inline-flex items-center px-8 py-4 rounded-full bg-white hover:bg-google-gray-50 border border-google-gray-300 text-google-gray-800 font-bold text-sm transition shadow-sm" href="#about">View Chapter DNA</a>
          </div>
        </section>

        {/* WHO WE ARE SECTION */}
        <section className="py-24 border-t border-google-gray-200 reveal" id="about">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-google-gray-900 tracking-tight font-sans">
              Who <span className="font-serif italic font-medium text-google-gray-900 font-normal">We</span> Are
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
            {/* Top Left */}
            <div className="bento-card md:col-span-3 rounded-3xl p-6 bg-[#FEF8EC] border border-[#FDE5BE] flex flex-col justify-between min-h-[260px] reveal">
              <h3 className="text-2xl font-bold text-[#925C0C] font-sans leading-tight">Community<br/>for ALL</h3>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-sm">Design Enthusiasts</span>
                <span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-sm">Web Devs</span>
                <span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-sm">Cloud Architects</span>
              </div>
            </div>
            
            {/* Mascot */}
            <div className="bento-card md:col-span-2 rounded-3xl p-4 bg-[#EDF8F1] border border-[#D0ECD9] flex flex-col items-center justify-center min-h-[260px] reveal reveal-delay-1 group">
               <div className="w-32 h-32 bg-google-green rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500 absolute"></div>
               <span className="text-5xl relative z-10 group-hover:scale-110 transition-transform duration-300">🤖</span>
            </div>

            {/* Stats 1 */}
            <div className="bento-card md:col-span-3 rounded-3xl p-5 bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col justify-between min-h-[260px] reveal reveal-delay-2">
              <div className="bg-[#111827] rounded-2xl p-3 flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-[#FDE047]">GDG SLIET</span>
              </div>
              <div>
                <span className="text-4xl font-extrabold text-[#15803D]">5+</span>
                <div className="text-xs font-bold text-google-gray-700 mt-1">Golden Years</div>
              </div>
            </div>

            {/* Stats 2 & 3 */}
            <div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col justify-center reveal reveal-delay-3">
              <div className="text-4xl sm:text-5xl font-extrabold text-[#2563EB]">1,250+</div>
              <p className="text-xs font-medium text-[#1E40AF] mt-3">Community members</p>
            </div>
            <div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#FFFBEB] border border-[#FEF3C7] flex flex-col justify-center reveal reveal-delay-3">
              <div className="text-4xl sm:text-5xl font-serif italic font-bold text-[#D97706]">40+</div>
              <p className="text-xs font-medium text-[#92400E] mt-3">Successful Events</p>
            </div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-20 border-t border-google-gray-200 reveal" id="events">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900">Upcoming Campus Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all reveal">
              <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t-4 border-google-blue">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-google-blue inline-block mb-4">Cloud Workshop</span>
                  <h3 className="text-xl font-bold text-google-gray-900 group-hover:text-google-blue transition-colors">Cloud Run & GenAI Microservices</h3>
                </div>
                <div className="mt-6 text-sm text-google-gray-600">
                  <p>March 22, 2025 • 04:30 PM</p>
                  <p className="mt-1">Seminar Hall 1, SLIET</p>
                </div>
              </div>
            </div>
            <div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all reveal reveal-delay-1">
              <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t-4 border-google-green">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-google-green inline-block mb-4">Hands-On Code</span>
                  <h3 className="text-xl font-bold text-google-gray-900 group-hover:text-google-green transition-colors">Modern Android with Jetpack Compose</h3>
                </div>
                <div className="mt-6 text-sm text-google-gray-600">
                  <p>April 05, 2025 • 10:00 AM</p>
                  <p className="mt-1">Computer Science Lab 3, SLIET</p>
                </div>
              </div>
            </div>
            <div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-all reveal reveal-delay-2">
              <div className="p-6 flex-1 flex flex-col justify-between bg-white border-t-4 border-google-red">
                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-google-red inline-block mb-4">Hackathon Sprint</span>
                  <h3 className="text-xl font-bold text-google-gray-900 group-hover:text-google-red transition-colors">Solution Challenge ’25 Ideathon</h3>
                </div>
                <div className="mt-6 text-sm text-google-gray-600">
                  <p>April 26–27, 2025 • 24 Hours</p>
                  <p className="mt-1">Main Auditorium, SLIET</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
