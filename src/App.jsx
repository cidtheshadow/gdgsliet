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

      
{/*  1. REFINED, FLUID MINIMALIST GOOGLE PRELOADER OVERLAY  */}
<div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-all duration-700 ease-in-out select-none opacity-0 pointer-events-none hidden" id="page-loader">
</div>

{/*  TOP 4-COLOR BRAND ACCENT  */}
<div className="google-bar fixed top-0 left-0 right-0 z-[60]"></div>
{/*  BACKGROUND SUBTLE GOOGLE PASTEL GLOWS & GRID  */}
<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute -top-[15%] left-1/4 w-[550px] h-[550px] rounded-full bg-blue-100/50 blur-[120px]"></div>
<div className="absolute top-[35%] -right-[5%] w-[500px] h-[500px] rounded-full bg-red-100/40 blur-[130px]"></div>
<div className="absolute bottom-[20%] left-[5%] w-[480px] h-[480px] rounded-full bg-green-100/40 blur-[120px]"></div>
<div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-yellow-100/35 blur-[120px]"></div>
<div className="absolute inset-0 bg-google-dots opacity-40"></div>
</div>
{/*  2. NAVIGATION  */}
<header className="sticky top-0 z-50 w-full border-b border-google-gray-200/90 bg-white/90 backdrop-blur-md transition-all">
<div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
{/*  Wordmark  */}
<a className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-google-blue rounded-xl py-1 px-1.5 transition" href="#home">
<div className="flex items-center space-x-1.5 p-2 rounded-xl bg-white border border-google-gray-200 shadow-sm group-hover:border-google-gray-300 group-hover:shadow transition">
<svg className="w-6 h-6 transition-transform group-hover:scale-105" fill="none" viewBox="0 0 192 192">
<path d="M48 64L16 96L48 128" stroke="#4285F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M144 64L176 96L144 128" stroke="#EA4335" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M112 56L80 136" stroke="#34A853" strokeLinecap="round" strokeWidth="20"></path>
<circle cx="156" cy="46" fill="#FBBC04" r="10"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-bold tracking-tight text-google-gray-900 flex items-center gap-1.5 font-sans">
            GDG On Campus
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Active Chapter"></span>
</span>
<span className="text-xs font-mono text-google-gray-600 font-medium">SLIET Longowal</span>
</div>
</a>
{/*  Desktop Nav Links  */}
<nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-google-gray-50 border border-google-gray-200 text-sm font-medium text-google-gray-700">
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#home">Home</a>
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#events">Events</a>
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#about">About</a>
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#flagship">Flagship</a>
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#team">Team</a>
<a className="px-4 py-2 rounded-full hover:text-google-blue hover:bg-white transition" href="#gallery">Gallery</a>
</nav>
{/*  CTA & Mobile Toggle  */}
<div className="flex items-center gap-3">
<a className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase text-white bg-google-blue hover:bg-google-blue-hover shadow-[0_4px_14px_rgba(26,115,232,0.28)] hover:shadow-[0_6px_20px_rgba(26,115,232,0.38)] transition-all active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-google-blue" href="https://gdg.community.dev" rel="noopener noreferrer" target="_blank">
<span>Join Chapter</span>
<svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</a>
</div>
</div>
</header>
<main className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6">
{/*  3. HERO SECTION (gdgnoida.com clean light look)  */}
<section className="pt-16 pb-16 sm:pt-24 sm:pb-24 flex flex-col items-center text-center relative" id="home">
{/*  Top Pill Badge  */}
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-google-blue-light border border-blue-200/80 text-xs font-semibold text-google-blue mb-7 shadow-xs">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-google-blue"></span>
</span>
<span className="text-google-gray-800">Official Student Chapter</span>
<span className="text-blue-300">•</span>
<span className="font-mono font-medium">2024–2025 Cohort</span>
</div>
{/*  Tagline  */}
<h1 className="font-sans font-bold tracking-tight text-google-gray-900 leading-[1.08] text-[clamp(2.75rem,7vw,6rem)] max-w-5xl">
        Learn. <span className="text-google-blue underline decoration-[#4285F4]/30 decoration-4 underline-offset-8">Build.</span> <span className="text-google-green-dark">Ship.</span>
</h1>
{/*  Supporting description  */}
<p className="mt-6 text-base sm:text-xl text-google-gray-700 max-w-2xl font-normal leading-relaxed">
        SLIET’s student developer collective. We host hands-on Google Cloud labs, flagship hackathons, open-source sprints, and peer-to-peer tech sessions on campus.
      </p>
{/*  CTAs  */}
<div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
<a className="inline-flex items-center px-7 py-3.5 rounded-full bg-google-blue hover:bg-google-blue-hover text-white font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(26,115,232,0.32)] hover:shadow-[0_6px_22px_rgba(26,115,232,0.42)] active:scale-95" href="#events">
          Explore Upcoming Events
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="inline-flex items-center px-7 py-3.5 rounded-full bg-white hover:bg-google-gray-50 border border-google-gray-300 text-google-gray-800 font-semibold text-sm transition shadow-sm hover:border-google-gray-400" href="#about">
          View Chapter DNA
        </a>
</div>
{/*  Quick Trust Indicators in Light Pills  */}
<div className="mt-12 pt-7 border-t border-google-gray-200 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-google-gray-700 text-xs sm:text-sm font-medium">
<div className="flex items-center gap-2 bg-google-gray-50 px-3.5 py-1.5 rounded-full border border-google-gray-200">
<span className="w-2.5 h-2.5 rounded-full bg-google-blue"></span>
<span>1,250+ Campus Members</span>
</div>
<div className="flex items-center gap-2 bg-google-gray-50 px-3.5 py-1.5 rounded-full border border-google-gray-200">
<span className="w-2.5 h-2.5 rounded-full bg-google-green"></span>
<span>42+ Tech Sessions</span>
</div>
<div className="flex items-center gap-2 bg-google-gray-50 px-3.5 py-1.5 rounded-full border border-google-gray-200">
<span className="w-2.5 h-2.5 rounded-full bg-google-amber"></span>
<span>₹2.5L+ Hackathon Grants</span>
</div>
</div>
</section>
{/*  4. TECH MARQUEE (Crisp Google ecosystem on light surface)  */}
<section className="py-8 border-y border-google-gray-200 bg-white relative overflow-hidden -mx-4 sm:-mx-6 px-4 sm:px-6">
<div className="max-w-[1240px] mx-auto mb-3 text-center">
<p className="text-[11px] uppercase tracking-widest text-google-gray-500 font-mono font-semibold">Core Ecosystem &amp; Technologies Explored</p>
</div>
<div className="marquee-mask overflow-hidden py-2">
<div className="flex items-center gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
{/*  Loop Item Group 1  */}
<div className="flex items-center gap-6">
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
<span className="text-xs font-semibold text-google-gray-800">Android</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]"></span>
<span className="text-xs font-semibold text-google-gray-800">Firebase</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
<span className="text-xs font-semibold text-google-gray-800">Flutter</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#00ACD7]"></span>
<span className="text-xs font-semibold text-google-gray-800">Go / Golang</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
<span className="text-xs font-semibold text-google-gray-800">Google Cloud</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#FF6F00]"></span>
<span className="text-xs font-semibold text-google-gray-800">TensorFlow</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#20BEFF]"></span>
<span className="text-xs font-semibold text-google-gray-800">Kaggle &amp; ML</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#24292F]"></span>
<span className="text-xs font-semibold text-google-gray-800">GitHub Campus</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#8E24AA]"></span>
<span className="text-xs font-semibold text-google-gray-800">Gemini API</span>
</div>
</div>
{/*  Duplicate for seamless loop  */}
<div className="flex items-center gap-6">
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#34A853]"></span>
<span className="text-xs font-semibold text-google-gray-800">Android</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]"></span>
<span className="text-xs font-semibold text-google-gray-800">Firebase</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]"></span>
<span className="text-xs font-semibold text-google-gray-800">Flutter</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#00ACD7]"></span>
<span className="text-xs font-semibold text-google-gray-800">Go / Golang</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]"></span>
<span className="text-xs font-semibold text-google-gray-800">Google Cloud</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#FF6F00]"></span>
<span className="text-xs font-semibold text-google-gray-800">TensorFlow</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#20BEFF]"></span>
<span className="text-xs font-semibold text-google-gray-800">Kaggle &amp; ML</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#24292F]"></span>
<span className="text-xs font-semibold text-google-gray-800">GitHub Campus</span>
</div>
<div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-google-gray-50 border border-google-gray-200 shadow-xs">
<span className="w-2.5 h-2.5 rounded-full bg-[#8E24AA]"></span>
<span className="text-xs font-semibold text-google-gray-800">Gemini API</span>
</div>
</div>
</div>
</div>
</section>
{/*  5. UPCOMING EVENTS (Crisp white cards with Google colored accents)  */}
<section className="py-20" id="events">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 text-xs font-mono text-google-blue font-bold uppercase tracking-wider mb-2">
<span>Schedule</span>
<span>//</span>
<span>Spring 2025</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">Upcoming Campus Events</h2>
</div>
<p className="text-google-gray-600 text-sm max-w-md">
          Hands-on technical sessions open to all degree branches across SLIET. Free RSVP required.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Event Card 1: Cloud  */}
<div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-xs">
<div className="h-44 bg-gradient-to-br from-blue-50 via-white to-blue-100/60 p-6 relative flex flex-col justify-between border-b border-google-gray-200">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-google-blue text-white shadow-xs">
                Cloud Workshop
              </span>
<span className="font-mono text-xs text-google-gray-700 bg-white/90 border border-google-gray-200 px-2.5 py-1 rounded-md">
                Limited to 80 Seats
              </span>
</div>
<div>
<span className="text-xs font-mono font-semibold text-google-blue">GCP STUDY JAM</span>
<h3 className="text-lg font-bold text-google-gray-900 group-hover:text-google-blue transition">Cloud Run &amp; GenAI Microservices</h3>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6 bg-white">
<div className="space-y-3 text-sm text-google-gray-600">
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-medium text-google-gray-800">March 22, 2025 • 04:30 PM IST</span>
</div>
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Seminar Hall 1, Science Block, SLIET</span>
</div>
</div>
<a className="w-full py-2.5 px-4 rounded-xl bg-google-gray-50 hover:bg-google-blue hover:text-white border border-google-gray-200 hover:border-google-blue text-xs font-bold text-center text-google-gray-800 transition" href="https://gdg.community.dev" rel="noopener noreferrer" target="_blank">
              Register Free with SLIET ID →
            </a>
</div>
</div>
{/*  Event Card 2: Android  */}
<div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-xs">
<div className="h-44 bg-gradient-to-br from-green-50 via-white to-emerald-100/60 p-6 relative flex flex-col justify-between border-b border-google-gray-200">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-google-green text-white shadow-xs">
                Hands-On Code
              </span>
<span className="font-mono text-xs text-google-gray-700 bg-white/90 border border-google-gray-200 px-2.5 py-1 rounded-md">
                Beginner Friendly
              </span>
</div>
<div>
<span className="text-xs font-mono font-semibold text-google-green-dark">ANDROID DEV BOOTCAMP</span>
<h3 className="text-lg font-bold text-google-gray-900 group-hover:text-google-green-dark transition">Modern Android with Jetpack Compose</h3>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6 bg-white">
<div className="space-y-3 text-sm text-google-gray-600">
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-medium text-google-gray-800">April 05, 2025 • 10:00 AM IST</span>
</div>
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Computer Science Lab 3, SLIET</span>
</div>
</div>
<a className="w-full py-2.5 px-4 rounded-xl bg-google-gray-50 hover:bg-google-green hover:text-white border border-google-gray-200 hover:border-google-green text-xs font-bold text-center text-google-gray-800 transition" href="https://gdg.community.dev" rel="noopener noreferrer" target="_blank">
              Register Free with SLIET ID →
            </a>
</div>
</div>
{/*  Event Card 3: Hackathon  */}
<div className="gdg-card rounded-2xl overflow-hidden flex flex-col group shadow-xs">
<div className="h-44 bg-gradient-to-br from-red-50 via-white to-rose-100/60 p-6 relative flex flex-col justify-between border-b border-google-gray-200">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-google-red text-white shadow-xs">
                Hackathon Sprint
              </span>
<span className="font-mono text-xs text-google-gray-700 bg-white/90 border border-google-gray-200 px-2.5 py-1 rounded-md">
                Teams of 2–4
              </span>
</div>
<div>
<span className="text-xs font-mono font-semibold text-google-red">ANNUAL SLIET HACK</span>
<h3 className="text-lg font-bold text-google-gray-900 group-hover:text-google-red transition">Solution Challenge ’25 Ideathon</h3>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between space-y-6 bg-white">
<div className="space-y-3 text-sm text-google-gray-600">
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-medium text-google-gray-800">April 26–27, 2025 • 24 Hours</span>
</div>
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-google-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Main Auditorium &amp; Central Library</span>
</div>
</div>
<a className="w-full py-2.5 px-4 rounded-xl bg-google-gray-50 hover:bg-google-red hover:text-white border border-google-gray-200 hover:border-google-red text-xs font-bold text-center text-google-gray-800 transition" href="https://gdg.community.dev" rel="noopener noreferrer" target="_blank">
              Form Team / Register →
            </a>
</div>
</div>
</div>
</section>
{/*  6. WHO WE ARE (EXACT ARCHITECTURAL & VISUAL CLONE OF GDG NOIDA BENTO COLLAGE — ADAPTED FOR SLIET LONGOWAL)  */}
<section className="py-24 border-t border-google-gray-200" id="about">
{/*  Centered Header Matching GDG Noida reference  */}
<div className="text-center max-w-3xl mx-auto mb-14">
<h2 className="text-5xl sm:text-6xl font-extrabold text-google-gray-900 tracking-tight font-sans">
    Who <span className="font-serif italic font-medium text-google-gray-900 font-normal">We</span> Are
  </h2>
<p className="mt-4 text-base sm:text-lg text-google-gray-600 font-normal leading-relaxed">
    Where ideas take shape and stories spark inspiration
  </p>
</div>
{/*  Expressive Mosaic / Bento Collage  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
{/*  Row 1 Left: "Community for ALL" with floating tag pills  */}
<div className="bento-card md:col-span-3 rounded-3xl p-6 bg-[#FEF8EC] border border-[#FDE5BE] flex flex-col justify-between relative overflow-hidden min-h-[260px]">
<div>
<h3 className="text-2xl font-bold text-[#925C0C] font-sans leading-tight">
        Community<br/>for ALL
      </h3>
</div>
<div className="flex flex-wrap gap-2 mt-4 relative z-10">
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">Design Enthusiasts</span>
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">Web Devs</span>
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">Android Geeks</span>
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">Cloud Architects</span>
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">Rust &amp; Go Hackers</span>
<span className="px-3 py-1.5 rounded-xl bg-white/85 text-xs font-semibold text-[#8C5810] shadow-xs border border-[#F6D79E] inline-block">AI Explorers</span>
</div>
</div>
{/*  Row 1 Left-Middle: Android Bugdroid in Traditional Punjabi Phulkari / Nehru Jacket Attire  */}
<div className="bento-card md:col-span-2 rounded-3xl p-4 bg-[#EDF8F1] border border-[#D0ECD9] flex flex-col items-center justify-center relative overflow-hidden min-h-[260px] group">
<div className="relative w-36 h-48 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
{/*  Mascot SVG Representation  */}
<svg className="w-full h-full drop-shadow-md" fill="none" viewBox="0 0 160 210">
{/*  Bugdroid Antennae  */}
<line stroke="#34A853" strokeLinecap="round" strokeWidth="4.5" x1="58" x2="42" y1="36" y2="15"></line>
<line stroke="#34A853" strokeLinecap="round" strokeWidth="4.5" x1="102" x2="118" y1="36" y2="15"></line>
{/*  Head  */}
<path d="M40 54 C40 30, 120 30, 120 54 Z" fill="#34A853"></path>
{/*  Eyes  */}
<circle cx="62" cy="42" fill="#FFFFFF" r="3.8"></circle>
<circle cx="98" cy="42" fill="#FFFFFF" r="3.8"></circle>
{/*  Arms  */}
<rect fill="#34A853" height="58" rx="8" width="14" x="18" y="65"></rect>
<rect fill="#34A853" height="58" rx="8" width="14" x="128" y="65"></rect>
{/*  Body Base (Green)  */}
<rect fill="#34A853" height="74" rx="14" width="80" x="40" y="60"></rect>
{/*  Traditional Punjabi Phulkari / Pagri Jacket Styled Vest  */}
<path d="M40 64 L74 64 L68 134 L40 134 Z" fill="#1C398E"></path>
<path d="M120 64 L86 64 L92 134 L120 134 Z" fill="#1C398E"></path>
<path d="M74 64 L80 90 L86 64 Z" fill="#FBBC04"></path>
{/*  Ethnic Paisley / Floral Motifs on jacket  */}
<circle cx="55" cy="85" fill="#EA4335" r="3"></circle>
<circle cx="105" cy="85" fill="#EA4335" r="3"></circle>
<circle cx="55" cy="110" fill="#FBBC04" r="3.2"></circle>
<circle cx="105" cy="110" fill="#FBBC04" r="3.2"></circle>
<polygon fill="#34A853" points="55,75 58,80 52,80"></polygon>
<polygon fill="#34A853" points="105,75 108,80 102,80"></polygon>
<rect fill="#FBBC04" height="2" width="8" x="76" y="98"></rect>
<rect fill="#FBBC04" height="2" width="8" x="76" y="108"></rect>
<rect fill="#FBBC04" height="2" width="8" x="76" y="118"></rect>
{/*  Legs  */}
<rect fill="#34A853" height="34" rx="7" width="16" x="52" y="132"></rect>
<rect fill="#34A853" height="34" rx="7" width="16" x="92" y="132"></rect>
</svg>
</div>
<span className="mt-2 text-[11px] font-mono font-semibold text-[#1C6934] bg-white/70 px-2 py-0.5 rounded-full border border-[#D0ECD9]">
        SLIET Bugdroid
      </span>
</div>
{/*  Row 1 Center-Top: 5+ Golden Years with glowing marquee & memory polaroids  */}
<div className="bento-card md:col-span-3 rounded-3xl p-5 bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col justify-between overflow-hidden min-h-[260px]">
{/*  Glowing Marquee Sign  */}
<div className="w-full bg-[#111827] rounded-2xl p-3 border border-neutral-800 flex items-center justify-center shadow-inner relative overflow-hidden">
<div className="absolute inset-0 bg-yellow-500/10 animate-pulse"></div>
<span className="font-mono text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FDE047] drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]">
        GDG SLIET
      </span>
</div>
<div className="flex items-center justify-between mt-3">
<div>
<span className="text-3xl sm:text-4xl font-extrabold text-[#15803D] font-sans tracking-tight">5+</span>
<div className="text-xs font-bold text-google-gray-700 leading-tight mt-0.5">
          Golden<br/>Years
        </div>
</div>
{/*  Stacked Polaroid photos of SLIET hackathons  */}
<div className="flex -space-x-4 pr-1">
<div className="w-14 h-16 bg-white p-1 rounded-lg shadow-md border border-google-gray-200 transform -rotate-6">
<div className="w-full h-10 bg-blue-100 rounded flex items-center justify-center text-[9px] font-bold text-blue-800">
            Hack '23
          </div>
<div className="text-[7px] text-center font-mono text-gray-500 mt-1">DevLab</div>
</div>
<div className="w-14 h-16 bg-white p-1 rounded-lg shadow-md border border-google-gray-200 transform rotate-6">
<div className="w-full h-10 bg-amber-100 rounded flex items-center justify-center text-[9px] font-bold text-amber-800">
            Jam '24
          </div>
<div className="text-[7px] text-center font-mono text-gray-500 mt-1">StudyJam</div>
</div>
</div>
</div>
</div>
{/*  Row 1 Right 1: "1,250+ Community members" (33K+ counterpart in Noida reference)  */}
<div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col justify-center text-left min-h-[260px]">
<div className="text-4xl sm:text-5xl font-extrabold text-[#2563EB] font-sans tracking-tight">
      1,250<span className="text-2xl font-bold">+</span>
</div>
<p className="text-xs sm:text-sm font-medium text-[#1E40AF] mt-3 leading-snug">
      Community members
    </p>
</div>
{/*  Row 1 Right 2: "40+ Successful Events" (50+ counterpart in Noida reference)  */}
<div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#FFFBEB] border border-[#FEF3C7] flex flex-col justify-center text-left min-h-[260px]">
<div className="text-4xl sm:text-5xl font-serif italic font-bold text-[#D97706] tracking-tight">
      40<span className="text-2xl font-serif italic font-normal">+</span>
</div>
<p className="text-xs sm:text-sm font-medium text-[#92400E] mt-3 leading-snug">
      Successful Events
    </p>
</div>
{/*  Row 2: Left Tech Diverse Card  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#F8FAFC] border border-google-gray-200 flex flex-col justify-between relative overflow-hidden min-h-[250px]">
<div className="flex items-center justify-between relative z-10">
<span className="text-xs font-mono font-medium text-google-gray-500">We are a</span>
<span className="text-xs font-mono px-2 py-0.5 rounded-full bg-blue-50 text-google-blue border border-blue-200">Diversity</span>
</div>
<div className="my-4 relative z-10 text-center">
<h3 className="text-3xl font-serif italic text-google-gray-900">
        Tech <span className="font-sans font-extrabold not-italic text-google-blue">Diverse</span>
</h3>
<p className="text-sm font-sans font-medium text-google-gray-600">community</p>
</div>
{/*  Orbiting Google ecosystem icon badges  */}
<div className="flex items-center justify-around gap-2 pt-2 border-t border-google-gray-100 relative z-10">
<div className="w-8 h-8 rounded-full bg-white shadow-xs border border-google-gray-200 flex items-center justify-center text-xs font-bold text-google-blue" title="Flutter">
        𝐹
      </div>
<div className="w-8 h-8 rounded-full bg-white shadow-xs border border-google-gray-200 flex items-center justify-center text-xs font-bold text-emerald-600" title="Android">
        🤖
      </div>
<div className="w-8 h-8 rounded-full bg-white shadow-xs border border-google-gray-200 flex items-center justify-center text-xs font-bold text-amber-500" title="Firebase">
        🔥
      </div>
<div className="w-8 h-8 rounded-full bg-white shadow-xs border border-google-gray-200 flex items-center justify-center text-xs font-bold text-red-500" title="Google Cloud">
        ☁️
      </div>
<div className="w-8 h-8 rounded-full bg-white shadow-xs border border-google-gray-200 flex items-center justify-center text-xs font-bold text-purple-600" title="Gemini">
        ✦
      </div>
</div>
</div>
{/*  Centerpiece: GIANT HERO CARD (Counterpart to the iconic "NOIDA" Metro Card!)  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-gradient-to-b from-blue-50/40 via-white to-amber-50/30 border border-google-gray-200 flex flex-col justify-between overflow-hidden min-h-[380px] shadow-sm relative">
<div className="flex flex-col items-center justify-center pt-2 relative z-10">
{/*  Expressive Typographic LONGOWAL / SANGRUR Wordmark with Google 4-Color Underline  */}
<div className="relative text-center">
<span className="text-xs font-mono tracking-[0.3em] uppercase text-google-gray-500 block mb-1 font-semibold">
          SANGRUR • PUNJAB
        </span>
<h3 className="text-4xl sm:text-5xl font-extrabold tracking-widest text-google-gray-900 font-sans uppercase">
          LONGOWAL
        </h3>
{/*  Google 4-color underline bar matching Noida illustration  */}
<div className="h-1.5 w-36 mx-auto mt-2 rounded-full google-bar"></div>
</div>
{/*  Campus Line Art sketch & Punjab PRTC / Express train line across Malwa fields  */}
<div className="w-full h-32 my-3 relative flex flex-col justify-end">
<svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 320 120">
{/*  Subtle SLIET Administrative Clock Tower & Campus Skyline Silhouette  */}
<path d="M10 95 L40 95 L40 70 L60 70 L60 95 L90 95 L90 50 L110 50 L110 95 L140 95 L140 30 L155 10 L170 30 L170 95 L200 95 L200 60 L225 60 L225 95 L260 95 L260 75 L280 75 L280 95 L310 95" stroke="#CBD5E1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"></path>
<circle cx="155" cy="45" fill="none" r="6" stroke="#94A3B8" strokeWidth="1.5"></circle>
{/*  Lush Trees & Punjab Fields line  */}
<path d="M0 98 Q 80 94, 160 98 T 320 98" stroke="#86EFAC" strokeDasharray="3 3" strokeWidth="2"></path>
{/*  PRTC / Express Train Line spanning across the Malwa Plains  */}
<rect fill="#F8FAFC" height="14" rx="3" stroke="#64748B" strokeWidth="1.5" width="290" x="15" y="102"></rect>
{/*  Train windows with blue line  */}
<rect fill="#3B82F6" height="2" width="280" x="20" y="104"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="25" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="46" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="67" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="88" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="109" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="130" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="151" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="172" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="193" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="214" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="235" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="256" y="108"></rect>
<rect fill="#0284C7" height="4" rx="1" width="16" x="277" y="108"></rect>
</svg>
</div>
</div>
{/*  Industry leaders from badge bar at bottom of card (matching Noida bento)  */}
<div className="mt-2 pt-3 border-t border-google-gray-100 relative z-10">
<span className="text-[11px] font-mono text-google-gray-500 block text-center mb-2 font-medium">Industry leaders from</span>
<div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-xs font-bold text-google-gray-800">
<span className="text-[#EA4335] font-sans font-semibold">zomato</span>
<span className="text-[#4285F4] font-sans font-bold">Google</span>
<span className="text-[#24292F] font-sans font-semibold">GitHub</span>
<span className="text-[#FF9900] font-sans font-bold">amazon</span>
<span className="text-[#0078D4] font-sans font-semibold">Microsoft</span>
</div>
</div>
</div>
{/*  Row 2 Right: "Digital Trendsetters" Award Card with Trophy & Social Badge  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#EDFDF5] border border-[#C6F6D5] flex flex-col justify-between overflow-hidden min-h-[300px] relative">
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-3xl sm:text-4xl font-serif italic text-[#166534] font-normal leading-tight">
          Digital<br/>
<span className="font-sans not-italic font-extrabold text-[#15803D]">Trendsetters</span>
</h3>
<p className="text-xs text-[#166534] mt-2 max-w-[190px] leading-relaxed">
          Award for having the most active tech community in Malwa &amp; Punjab region
        </p>
</div>
{/*  Physical Trophy Mockup (Counterpart to the hand holding the trophy in image)  */}
<div className="relative w-28 h-36 shrink-0 bg-white rounded-2xl p-2.5 shadow-sm border border-emerald-200 flex flex-col items-center justify-between text-center group-hover:rotate-2 transition-transform">
<div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-xl text-amber-600 shadow-inner">
          🏆
        </div>
<div className="my-1">
<div className="text-[9px] font-mono font-bold text-google-gray-800 uppercase tracking-tighter">Google Developers</div>
<div className="text-[8px] font-bold text-google-blue">GDG SLIET</div>
</div>
<span className="text-[8px] font-mono px-1.5 py-0.5 rounded bg-emerald-100 text-[#166534] font-semibold">
          Top Chapter '24
        </span>
</div>
</div>
{/*  Social Handle Badge Pill  */}
<div className="inline-flex items-center gap-2 mt-4 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-300/80 text-xs font-mono text-emerald-900 shadow-xs w-max">
<div className="flex items-center gap-1.5 text-[#15803D]">
<span>📷</span>
<span>💼</span>
<span>𝕏</span>
</div>
<span className="font-bold">@gdg_sliet</span>
</div>
</div>
{/*  Row 3 Left: "Team that brings energy" Wide Photo Card with Dark Overlay  */}
<div className="bento-card md:col-span-4 rounded-3xl overflow-hidden relative min-h-[240px] flex flex-col justify-end p-6 group">
{/*  Background simulated team gathering photo in SLIET Auditorium  */}
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 z-10"></div>
<div className="absolute inset-0 bg-neutral-800 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:16px_16px] opacity-80 group-hover:scale-105 transition-transform duration-500"></div>
{/*  Simulated silhouettes of 30+ students waving & holding GDG banner  */}
<div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-mono text-5xl font-bold select-none">
      &lt;TEAM/&gt;
    </div>
<div className="relative z-20">
<span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/30 inline-block mb-1">
        GDG SLIET Team
      </span>
<h4 className="text-2xl font-bold text-white font-sans tracking-tight">
        Team that brings energy
      </h4>
<p className="text-xs text-white/80 mt-1">45+ passionate leads, mentors &amp; volunteers</p>
</div>
</div>
{/*  Row 3 Middle: Developer Syntax & Google Developers Code Bracket Logo  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col items-center justify-center relative overflow-hidden min-h-[240px] text-center">
<div className="relative w-36 h-28 flex items-center justify-center">
{/*  Floating Code Doodles & Syntax  */}
<span className="absolute top-0 left-2 text-xs font-mono text-blue-400 font-bold">{ }</span>
<span className="absolute top-2 right-4 text-xs font-mono text-emerald-500 font-bold">//</span>
<span className="absolute bottom-2 left-4 text-xs font-mono text-amber-500 font-bold">#</span>
<span className="absolute bottom-1 right-3 text-xs font-mono text-purple-400 font-bold">func()</span>
{/*  Large Google Developer Brackets Symbol < >  */}
<svg className="w-24 h-24 drop-shadow-sm transition-transform hover:scale-110 duration-300" fill="none" viewBox="0 0 192 192">
<path d="M48 64L16 96L48 128" stroke="#4285F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M144 64L176 96L144 128" stroke="#EA4335" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M112 56L80 136" stroke="#34A853" strokeLinecap="round" strokeWidth="20"></path>
<circle cx="156" cy="46" fill="#FBBC04" r="10"></circle>
</svg>
</div>
<span className="text-xs font-mono font-semibold text-google-blue mt-1 bg-white/80 px-3 py-1 rounded-full border border-blue-200">
      Developers for Developers
    </span>
</div>
{/*  Row 3 Right: "Behind the Scenes" Warm Photo Grid (Boys' Hostel 8, Cafeteria Chai & Labs)  */}
<div className="bento-card md:col-span-4 rounded-3xl p-5 bg-[#FFF7ED] border border-[#FED7AA] flex flex-col justify-between min-h-[240px]">
<div className="flex items-center justify-between">
<h4 className="text-xl font-bold text-[#9A3412] font-sans">
        Behind the Scenes
      </h4>
<span className="text-[10px] font-mono font-bold bg-[#FFEDD5] text-[#9A3412] px-2 py-0.5 rounded-full border border-[#FDBA74]">
        SLIET Diary
      </span>
</div>
{/*  Photo Grid of 4 candid moments  */}
<div className="grid grid-cols-2 gap-2 mt-3">
<div className="h-16 rounded-xl bg-white border border-amber-200 p-2 flex flex-col justify-between shadow-xs hover:border-amber-400 transition">
<span className="text-[11px] font-bold text-google-gray-800">Hostel 8</span>
<span className="text-[9px] font-mono text-google-gray-500">3 AM Code Sprints</span>
</div>
<div className="h-16 rounded-xl bg-white border border-amber-200 p-2 flex flex-col justify-between shadow-xs hover:border-amber-400 transition">
<span className="text-[11px] font-bold text-google-gray-800">Nescafe Tapri</span>
<span className="text-[9px] font-mono text-google-gray-500">Chai &amp; Hack Ideation</span>
</div>
<div className="h-16 rounded-xl bg-white border border-amber-200 p-2 flex flex-col justify-between shadow-xs hover:border-amber-400 transition">
<span className="text-[11px] font-bold text-google-gray-800">CSE Lab 2</span>
<span className="text-[9px] font-mono text-google-gray-500">Docker Jam Setup</span>
</div>
<div className="h-16 rounded-xl bg-white border border-amber-200 p-2 flex flex-col justify-between shadow-xs hover:border-amber-400 transition">
<span className="text-[11px] font-bold text-google-gray-800">Swag Boxes</span>
<span className="text-[9px] font-mono text-google-gray-500">Google T-Shirt Unbox</span>
</div>
</div>
</div>
</div>
</section>
{/*  7. FLAGSHIP GATHERINGS (Crisp light retrospective with fallback counters)  */}
<section className="py-20 border-t border-google-gray-200" id="flagship">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 text-xs font-mono text-google-amber font-bold uppercase tracking-wider mb-2">
<span>Retrospective</span>
<span>//</span>
<span>Past Editions</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">Flagship Gatherings</h2>
</div>
<p className="text-google-gray-600 text-sm max-w-md">
          Signature gatherings that redefined tech culture across the Malwa region of Punjab.
        </p>
</div>
<div className="space-y-6">
{/*  Flagship Card 1: DevFest SLIET  */}
<div className="gdg-card rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-white shadow-xs">
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-google-blue border border-blue-200 text-xs font-mono font-bold mb-3">
                FALL 2024 EDITION
              </div>
<h3 className="text-2xl sm:text-3xl font-bold text-google-gray-900 font-sans">DevFest Campus SLIET ’24</h3>
<p className="mt-2 text-google-gray-600 text-sm leading-relaxed">
                The largest student developer summit in the Sangrur district. Keynotes on Generative AI on Vertex, cross-platform apps with Flutter 3, and career roadmaps from industry engineers.
              </p>
</div>
{/*  Counters Grid  */}
<div className="grid grid-cols-3 gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-google-gray-200 pt-6 lg:pt-0 lg:pl-10">
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-gray-900 counter font-sans">650+</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">Registrations</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-blue counter font-sans">420+</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">In-Person Attendees</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-green-dark counter font-sans">8</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">Tech Speakers</div>
</div>
</div>
</div>
</div>
{/*  Flagship Card 2: SLIET CodeRumble / HackSLIET  */}
<div className="gdg-card rounded-2xl p-8 sm:p-10 relative overflow-hidden bg-white shadow-xs">
<div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-google-red border border-red-200 text-xs font-mono font-bold mb-3">
                SPRING 2024 EDITION
              </div>
<h3 className="text-2xl sm:text-3xl font-bold text-google-gray-900 font-sans">HackSLIET: 24h Build Sprint</h3>
<p className="mt-2 text-google-gray-600 text-sm leading-relaxed">
                Overnight hackathon tackling regional agricultural tech problems, campus logistics, and accessible education tools for Punjab schools.
              </p>
</div>
{/*  Counters Grid  */}
<div className="grid grid-cols-3 gap-6 sm:gap-10 border-t lg:border-t-0 lg:border-l border-google-gray-200 pt-6 lg:pt-0 lg:pl-10">
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-gray-900 counter font-sans">380+</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">Hackers Applied</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-red counter font-sans">45</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">Projects Shipped</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-bold text-google-amber counter font-sans">₹1.5L</div>
<div className="text-xs text-google-gray-600 font-mono mt-1">Prizes &amp; Grants</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  8. SPEAKERS & MENTORS (Clean white cards with Google color ring avatars)  */}
<section className="py-20 border-t border-google-gray-200">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 text-xs font-mono text-google-blue font-bold uppercase tracking-wider mb-2">
<span>Ecosystem</span>
<span>//</span>
<span>Knowledge Exchange</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">Speakers &amp; Industry Mentors</h2>
</div>
<p className="text-google-gray-600 text-sm max-w-md">
          Engineers and alumni who visit SLIET to audit projects, guide roadmaps, and review open-source code.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Speaker 1 (Blue Accent)  */}
<div className="gdg-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white shadow-xs">
<div className="relative w-20 h-20 mb-4">
<div className="w-full h-full rounded-full bg-blue-50 text-google-blue border-2 border-google-blue flex items-center justify-center font-bold text-xl font-sans group-hover:scale-105 transition-transform">
              AS
            </div>
<a aria-label="Amanpreet Singh on LinkedIn" className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-google-blue text-white shadow hover:bg-google-blue-hover transition" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.6 1.6 1.6.89 0 1.61-.71 1.61-1.6 0-.88-.72-1.6-1.61-1.6Z"></path>
</svg>
</a>
</div>
<h3 className="font-bold text-google-gray-900 text-base font-sans">Amanpreet Singh</h3>
<p className="text-xs text-google-blue font-mono font-semibold mt-1">Staff Software Engineer</p>
<p className="text-xs text-google-gray-600 mt-2 font-medium">Google Cloud Platform • SLIET Alum ’17</p>
</div>
{/*  Speaker 2 (Green Accent)  */}
<div className="gdg-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white shadow-xs">
<div className="relative w-20 h-20 mb-4">
<div className="w-full h-full rounded-full bg-emerald-50 text-google-green-dark border-2 border-google-green flex items-center justify-center font-bold text-xl font-sans group-hover:scale-105 transition-transform">
              NS
            </div>
<a aria-label="Neha Sharma on LinkedIn" className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-google-blue text-white shadow hover:bg-google-blue-hover transition" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.6 1.6 1.6.89 0 1.61-.71 1.61-1.6 0-.88-.72-1.6-1.61-1.6Z"></path>
</svg>
</a>
</div>
<h3 className="font-bold text-google-gray-900 text-base font-sans">Neha Sharma</h3>
<p className="text-xs text-google-green-dark font-mono font-semibold mt-1">Google Developer Expert</p>
<p className="text-xs text-google-gray-600 mt-2 font-medium">Web Technologies &amp; Performance</p>
</div>
{/*  Speaker 3 (Amber Accent)  */}
<div className="gdg-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white shadow-xs">
<div className="relative w-20 h-20 mb-4">
<div className="w-full h-full rounded-full bg-amber-50 text-google-amber border-2 border-google-yellow flex items-center justify-center font-bold text-xl font-sans group-hover:scale-105 transition-transform">
              KV
            </div>
<a aria-label="Karan Verma on LinkedIn" className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-google-blue text-white shadow hover:bg-google-blue-hover transition" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.6 1.6 1.6.89 0 1.61-.71 1.61-1.6 0-.88-.72-1.6-1.61-1.6Z"></path>
</svg>
</a>
</div>
<h3 className="font-bold text-google-gray-900 text-base font-sans">Karan Verma</h3>
<p className="text-xs text-google-amber font-mono font-semibold mt-1">Lead Android Architect</p>
<p className="text-xs text-google-gray-600 mt-2 font-medium">Fintech Infra • Jetpack Specialist</p>
</div>
{/*  Speaker 4 (Red Accent)  */}
<div className="gdg-card rounded-2xl p-6 flex flex-col items-center text-center group bg-white shadow-xs">
<div className="relative w-20 h-20 mb-4">
<div className="w-full h-full rounded-full bg-red-50 text-google-red border-2 border-google-red flex items-center justify-center font-bold text-xl font-sans group-hover:scale-105 transition-transform">
              RP
            </div>
<a aria-label="Riya Patel on LinkedIn" className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-google-blue text-white shadow hover:bg-google-blue-hover transition" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6 0 .89.72 1.6 1.6 1.6.89 0 1.61-.71 1.61-1.6 0-.88-.72-1.6-1.61-1.6Z"></path>
</svg>
</a>
</div>
<h3 className="font-bold text-google-gray-900 text-base font-sans">Riya Patel</h3>
<p className="text-xs text-google-red font-mono font-semibold mt-1">Research Fellow</p>
<p className="text-xs text-google-gray-600 mt-2 font-medium">AI Alignment &amp; Multimodal LLMs</p>
</div>
</div>
</section>
{/*  9. CORE TEAM (Clean light card portraits with colorful tags)  */}
<section className="py-20 border-t border-google-gray-200" id="team">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 text-xs font-mono text-google-green-dark font-bold uppercase tracking-wider mb-2">
<span>Community Leads</span>
<span>//</span>
<span>Core Working Group</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">Core Team 2024–25</h2>
</div>
<p className="text-google-gray-600 text-sm max-w-md">
          Undergraduates across SLIET managing day-to-day operations, lab equipment, and community mentorship.
        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
{/*  Lead 1: Chapter Lead  */}
<div className="gdg-card rounded-2xl p-5 text-center flex flex-col items-center bg-white shadow-xs">
<div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-base text-google-blue mb-3">
            GS
          </div>
<h3 className="text-sm font-bold text-google-gray-900">Gurleen Singh</h3>
<span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-google-blue border border-blue-200">
            GDG Organizer Lead
          </span>
<p className="text-xs text-google-gray-500 mt-2">CSE 4th Year</p>
</div>
{/*  Lead 2: Tech Lead  */}
<div className="gdg-card rounded-2xl p-5 text-center flex flex-col items-center bg-white shadow-xs">
<div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center font-bold text-base text-google-green-dark mb-3">
            AK
          </div>
<h3 className="text-sm font-bold text-google-gray-900">Aditya Kumar</h3>
<span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-50 text-google-green-dark border border-emerald-200">
            Technical Lead
          </span>
<p className="text-xs text-google-gray-500 mt-2">ECE 3rd Year</p>
</div>
{/*  Lead 3: Design Lead  */}
<div className="gdg-card rounded-2xl p-5 text-center flex flex-col items-center bg-white shadow-xs">
<div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center font-bold text-base text-google-amber mb-3">
            TK
          </div>
<h3 className="text-sm font-bold text-google-gray-900">Tanvi Kaur</h3>
<span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-google-amber border border-amber-200">
            Design &amp; Brand Lead
          </span>
<p className="text-xs text-google-gray-500 mt-2">CSE 3rd Year</p>
</div>
{/*  Lead 4: Social Media Lead  */}
<div className="gdg-card rounded-2xl p-5 text-center flex flex-col items-center bg-white shadow-xs">
<div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center font-bold text-base text-google-red mb-3">
            MS
          </div>
<h3 className="text-sm font-bold text-google-gray-900">Manpreet Saini</h3>
<span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-red-50 text-google-red border border-red-200">
            Social Media Lead
          </span>
<p className="text-xs text-google-gray-500 mt-2">Mech. 3rd Year</p>
</div>
{/*  Lead 5: Outreach Lead  */}
<div className="gdg-card rounded-2xl p-5 text-center flex flex-col items-center bg-white shadow-xs">
<div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center font-bold text-base text-purple-600 mb-3">
            HP
          </div>
<h3 className="text-sm font-bold text-google-gray-900">Harshita Paul</h3>
<span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-50 text-purple-600 border border-purple-200">
            Outreach &amp; PR Lead
          </span>
<p className="text-xs text-google-gray-500 mt-2">Chemical 2nd Year</p>
</div>
</div>
</section>
{/*  10. TESTIMONIALS / STUDENT VOICES  */}
<section className="py-20 border-t border-google-gray-200" id="testimonials">
<div className="max-w-2xl mb-12">
<div className="flex items-center gap-2 text-xs font-mono text-google-red font-bold uppercase tracking-wider mb-2">
<span>Student Voices</span>
<span>//</span>
<span>Campus Impact</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">Student Stories</h2>
<p className="text-google-gray-600 text-sm mt-2">
          What happens when a close-knit engineering institute gets access to peer-driven technology culture.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Story 1 (Blue highlight)  */}
<div className="gdg-card rounded-2xl p-8 flex flex-col justify-between bg-white shadow-xs border-l-4 border-l-google-blue">
<div>
<div className="text-google-blue text-4xl font-serif leading-none mb-3">“</div>
<p className="text-google-gray-700 text-sm leading-relaxed">
              Coming from a small village in Punjab, I had never touched Google Cloud before joining the study jam. <strong className="text-google-gray-900 font-bold bg-blue-50 px-1 py-0.5 rounded">GDG SLIET gave me the confidence to push production containers before my 5th semester.</strong>
</p>
</div>
<div className="mt-8 pt-4 border-t border-google-gray-100 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 text-google-blue font-bold flex items-center justify-center text-xs">
              DS
            </div>
<div>
<div className="text-xs font-bold text-google-gray-900">Dilpreet Singh</div>
<div className="text-[11px] text-google-gray-500 font-mono">CSE ’25 • Cloud Engineer Intern</div>
</div>
</div>
</div>
{/*  Story 2 (Green highlight)  */}
<div className="gdg-card rounded-2xl p-8 flex flex-col justify-between bg-white shadow-xs border-l-4 border-l-google-green">
<div>
<div className="text-google-green text-4xl font-serif leading-none mb-3">“</div>
<p className="text-google-gray-700 text-sm leading-relaxed">
              HackSLIET was my first all-night hackathon. We built an IoT monitoring dashboard for campus water chillers. <strong className="text-google-gray-900 font-bold bg-emerald-50 px-1 py-0.5 rounded">The seniors sat with our team until 4 AM helping us debug asynchronous WebSocket callbacks.</strong>
</p>
</div>
<div className="mt-8 pt-4 border-t border-google-gray-100 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 text-google-green-dark font-bold flex items-center justify-center text-xs">
              SB
            </div>
<div>
<div className="text-xs font-bold text-google-gray-900">Simran Bhatia</div>
<div className="text-[11px] text-google-gray-500 font-mono">ECE ’26 • IoT Enthusiast</div>
</div>
</div>
</div>
{/*  Story 3 (Yellow highlight)  */}
<div className="gdg-card rounded-2xl p-8 flex flex-col justify-between bg-white shadow-xs border-l-4 border-l-google-yellow">
<div>
<div className="text-google-amber text-4xl font-serif leading-none mb-3">“</div>
<p className="text-google-gray-700 text-sm leading-relaxed">
              Most colleges just talk about syllabus theory. Here we talk about Jetpack Compose, edge-compute latency, and open PRs. <strong className="text-google-gray-900 font-bold bg-amber-50 px-1 py-0.5 rounded">It bridges the gap between Longowal and Silicon Valley.</strong>
</p>
</div>
<div className="mt-8 pt-4 border-t border-google-gray-100 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-100 text-google-amber font-bold flex items-center justify-center text-xs">
              RG
            </div>
<div>
<div className="text-xs font-bold text-google-gray-900">Rohan Gupta</div>
<div className="text-[11px] text-google-gray-500 font-mono">CSE ’24 • Placed at Tier-1 Product Firm</div>
</div>
</div>
</div>
</div>
</section>
{/*  11. ON-CAMPUS GALLERY (Masonry with light styling & modal)  */}
<section className="py-20 border-t border-google-gray-200" id="gallery">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<div className="flex items-center gap-2 text-xs font-mono text-google-gray-500 font-bold uppercase tracking-wider mb-2">
<span>Visual Archive</span>
<span>//</span>
<span>Campus Moments</span>
</div>
<h2 className="text-3xl sm:text-4xl font-bold text-google-gray-900 tracking-tight font-sans">On-Campus Gallery</h2>
</div>
<p className="text-google-gray-600 text-sm max-w-md">
          Candid snapshots from seminar auditoriums, lab sprint nights, and campus swag drops.
        </p>
</div>
{/*  Masonry simulation with clean light backgrounds  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="space-y-5">
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('DevFest Keynote, SLIET Main Auditorium')}}>
<div className="h-64 bg-gradient-to-br from-blue-100/70 via-blue-50 to-indigo-100/50 p-6 flex flex-col justify-end relative">
<div className="absolute inset-0 bg-google-dots opacity-40"></div>
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-google-blue bg-white px-2.5 py-1 rounded shadow-xs">DevFest 2024</span>
<p className="text-sm font-bold text-google-gray-900 mt-2 group-hover:text-google-blue transition">Main Auditorium Keynote Session</p>
<p className="text-xs text-google-gray-600 mt-1">420+ student developers gathered</p>
</div>
</div>
</div>
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('Cloud Study Jam Hands-on Lab')}}>
<div className="h-44 bg-gradient-to-br from-emerald-100/70 via-emerald-50 to-teal-100/50 p-6 flex flex-col justify-end relative">
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-google-green-dark bg-white px-2.5 py-1 rounded shadow-xs">Lab 2</span>
<p className="text-sm font-bold text-google-gray-900 mt-1 group-hover:text-google-green-dark transition">Docker &amp; K8s Live Demo</p>
<p className="text-xs text-google-gray-600">80 active terminal instances</p>
</div>
</div>
</div>
</div>
<div className="space-y-5">
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('Solution Challenge Mentorship Circle')}}>
<div className="h-44 bg-gradient-to-br from-amber-100/70 via-amber-50 to-yellow-100/50 p-6 flex flex-col justify-end relative">
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-google-amber bg-white px-2.5 py-1 rounded shadow-xs">HackSprint</span>
<p className="text-sm font-bold text-google-gray-900 mt-1 group-hover:text-google-amber transition">Midnight Architecture Review</p>
<p className="text-xs text-google-gray-600">Guidance on SDG metrics</p>
</div>
</div>
</div>
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('Campus Swag Distribution &amp; Stickers')}}>
<div className="h-64 bg-gradient-to-br from-red-100/70 via-red-50 to-rose-100/50 p-6 flex flex-col justify-end relative">
<div className="absolute inset-0 bg-google-dots opacity-40"></div>
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-google-red bg-white px-2.5 py-1 rounded shadow-xs">Community Swag</span>
<p className="text-sm font-bold text-google-gray-900 mt-2 group-hover:text-google-red transition">Google T-Shirts &amp; Badges Unboxing</p>
<p className="text-xs text-google-gray-600 mt-1">Official stickers, pens &amp; tees</p>
</div>
</div>
</div>
</div>
<div className="space-y-5 sm:col-span-2 lg:col-span-1">
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('Alumni Speaker Panel on Placements')}}>
<div className="h-56 bg-gradient-to-br from-purple-100/70 via-purple-50 to-indigo-100/50 p-6 flex flex-col justify-end relative">
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-purple-700 bg-white px-2.5 py-1 rounded shadow-xs">Career Track</span>
<p className="text-sm font-bold text-google-gray-900 mt-1 group-hover:text-purple-700 transition">Off-Campus Tech Hiring Playbook</p>
<p className="text-xs text-google-gray-600 mt-1">Resume audits &amp; mock interviews</p>
</div>
</div>
</div>
<div className="gdg-card rounded-2xl overflow-hidden group cursor-pointer relative" onClick={() => {openLightbox('Women in Tech Breakfast Round')}}>
<div className="h-52 bg-gradient-to-br from-teal-100/70 via-teal-50 to-emerald-100/50 p-6 flex flex-col justify-end relative">
<div className="relative z-10">
<span className="text-[11px] font-mono font-bold text-teal-700 bg-white px-2.5 py-1 rounded shadow-xs">WTM SLIET</span>
<p className="text-sm font-bold text-google-gray-900 mt-1 group-hover:text-teal-700 transition">Women Techmakers Campus Circle</p>
<p className="text-xs text-google-gray-600 mt-1">Empowering female engineers</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  12. FOOTER (Polished white standard with Google 4-color hairline divider)  */}
<footer className="border-t border-google-gray-200 bg-white relative z-10 pt-16 pb-12 mt-12">
{/*  Google 4-color strip on top of footer  */}
<div className="google-bar -mt-16 mb-16"></div>
<div className="max-w-[1240px] mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-google-gray-200">
{/*  Mission Col  */}
<div className="md:col-span-2 space-y-4">
<div className="flex items-center gap-3">
<svg className="w-7 h-7" fill="none" viewBox="0 0 192 192">
<path d="M48 64L16 96L48 128" stroke="#4285F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M144 64L176 96L144 128" stroke="#EA4335" strokeLinecap="round" strokeLinejoin="round" strokeWidth="22"></path>
<path d="M112 56L80 136" stroke="#34A853" strokeLinecap="round" strokeWidth="20"></path>
<circle cx="156" cy="46" fill="#FBBC04" r="10"></circle>
</svg>
<span className="font-sans font-bold text-google-gray-900 text-lg">GDG On Campus • SLIET</span>
</div>
<p className="text-google-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm">
            Fostering technical curiosity, code literacy, and software shipping at Sant Longowal Institute of Engineering &amp; Technology. Independent student organization supported by Google Developers.
          </p>
<div className="text-xs font-mono text-google-gray-500">
            Longowal, District Sangrur, Punjab 148106, India
          </div>
</div>
{/*  Col 1: About  */}
<div className="space-y-3">
<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-google-gray-900">About</h4>
<ul className="space-y-2 text-xs font-medium text-google-gray-600">
<li><a className="hover:text-google-blue transition" href="#about">Our Chapter DNA</a></li>
<li><a className="hover:text-google-blue transition" href="#team">Core Organizers</a></li>
<li><a className="hover:text-google-blue transition" href="http://sliet.ac.in" rel="noopener noreferrer" target="_blank">SLIET Official Portal ↗</a></li>
<li><a className="hover:text-google-blue transition" href="#testimonials">Student Stories</a></li>
</ul>
</div>
{/*  Col 2: Resources  */}
<div className="space-y-3">
<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-google-gray-900">Resources</h4>
<ul className="space-y-2 text-xs font-medium text-google-gray-600">
<li><a className="hover:text-google-blue transition" href="https://developers.google.com" rel="noopener noreferrer" target="_blank">Google for Developers ↗</a></li>
<li><a className="hover:text-google-blue transition" href="https://developers.google.com/community/gdg" rel="noopener noreferrer" target="_blank">Community Guidelines</a></li>
<li><a className="hover:text-google-blue transition" href="#events">Solution Challenge</a></li>
<li><a className="hover:text-google-blue transition" href="https://github.com" rel="noopener noreferrer" target="_blank">GitHub Organization ↗</a></li>
</ul>
</div>
{/*  Col 3: Connect  */}
<div className="space-y-3">
<h4 className="text-xs font-mono font-bold uppercase tracking-wider text-google-gray-900">Connect</h4>
<ul className="space-y-2 text-xs font-medium text-google-gray-600">
<li><a className="hover:text-google-blue transition" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">LinkedIn Page</a></li>
<li><a className="hover:text-google-blue transition" href="https://instagram.com" rel="noopener noreferrer" target="_blank">Instagram Updates</a></li>
<li><a className="hover:text-google-blue transition" href="https://chat.whatsapp.com" rel="noopener noreferrer" target="_blank">Community WhatsApp</a></li>
<li><a className="hover:text-google-blue transition" href="mailto:gdg@sliet.ac.in">Contact Organizers</a></li>
</ul>
</div>
</div>
{/*  Bottom Bar  */}
<div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-google-gray-500 font-mono">
<div>
          © 2025 GDG On Campus — SLIET. Inspired by Google Developers &amp; GDG community design.
        </div>
<div className="flex items-center gap-6 font-sans">
<a className="hover:text-google-blue transition" href="#">Code of Conduct</a>
<a className="hover:text-google-blue transition" href="#">Privacy</a>
<a className="hover:text-google-blue font-bold transition" href="#home">Back to Top ↑</a>
</div>
</div>
</div>
</footer>
</main>


    </div>
  );
}

export default App;
