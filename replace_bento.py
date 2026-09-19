import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

# I will find the <section className="py-24 border-t border-google-gray-200" id="about"> block
# and replace it with my new version.

start_str = '{/*  6. WHO WE ARE'
end_str = '{/*  7. FLAGSHIP GATHERINGS'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx == -1 or end_idx == -1:
    print("Could not find section.")
    exit(1)

new_section = r"""{/*  6. WHO WE ARE  */}
<section className="py-24" id="about">
<div className="text-center max-w-3xl mx-auto mb-14">
<h2 className="text-5xl sm:text-6xl font-extrabold text-google-gray-900 tracking-tight font-sans">
    Who <span className="font-serif italic font-medium text-google-gray-900 font-normal">We</span> Are
  </h2>
<p className="mt-4 text-base sm:text-lg text-google-gray-600 font-normal leading-relaxed">
    Where ideas take shape and stories spark inspiration
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch relative">
{/*  Row 1 Left: "Community for ALL"  */}
<div className="bento-card md:col-span-3 rounded-3xl p-6 bg-[#FEF8EC] border border-[#FDE5BE] flex flex-col justify-between relative overflow-hidden min-h-[260px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.02 - 10 : 0}px)` }}>
<div>
<h3 className="text-2xl font-bold text-[#925C0C] font-sans leading-tight">
        Community<br/>for ALL
      </h3>
</div>
<div className="flex flex-col items-start gap-2 mt-4 relative z-10">
  <div className="flex gap-2">
    <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">Design Enthusiasts</span>
    <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">Web Devs</span>
  </div>
  <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">Android Geeks</span>
  <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">Cloud Architects</span>
  <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">Rust & Go Hackers</span>
  <span className="px-3 py-1.5 rounded-full bg-white text-[10px] font-semibold text-[#B45309] shadow-sm border border-[#FDE047]">AI Explorers</span>
</div>
</div>

{/*  Row 1 Left-Middle: Bugdroid  */}
<div className="bento-card md:col-span-2 rounded-3xl p-4 bg-[#EDF8F1] border border-[#D0ECD9] flex flex-col items-center justify-center relative overflow-hidden min-h-[260px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * -0.015 + 10 : 0}px)` }}>
<div className="relative w-36 h-48 flex items-center justify-center">
<svg className="w-full h-full drop-shadow-md" fill="none" viewBox="0 0 160 210">
<line stroke="#34A853" strokeLinecap="round" strokeWidth="4.5" x1="58" x2="42" y1="36" y2="15"></line>
<line stroke="#34A853" strokeLinecap="round" strokeWidth="4.5" x1="102" x2="118" y1="36" y2="15"></line>
<path d="M40 54 C40 30, 120 30, 120 54 Z" fill="#34A853"></path>
<circle cx="62" cy="42" fill="#FFFFFF" r="3.8"></circle>
<circle cx="98" cy="42" fill="#FFFFFF" r="3.8"></circle>
<rect fill="#34A853" height="58" rx="8" width="14" x="18" y="65"></rect>
<rect fill="#34A853" height="58" rx="8" width="14" x="128" y="65"></rect>
<rect fill="#34A853" height="74" rx="14" width="80" x="40" y="60"></rect>
{/* Blue Jacket */}
<path d="M40 64 L74 64 L68 134 L40 134 Z" fill="#1A73E8"></path>
<path d="M120 64 L86 64 L92 134 L120 134 Z" fill="#1A73E8"></path>
<rect fill="#FBBC04" height="6" width="3" x="52" y="75" rx="1.5"></rect>
<rect fill="#FBBC04" height="6" width="3" x="52" y="90" rx="1.5"></rect>
<rect fill="#FBBC04" height="6" width="3" x="52" y="105" rx="1.5"></rect>
<rect fill="#FBBC04" height="6" width="3" x="105" y="75" rx="1.5"></rect>
<rect fill="#FBBC04" height="6" width="3" x="105" y="90" rx="1.5"></rect>
<rect fill="#FBBC04" height="6" width="3" x="105" y="105" rx="1.5"></rect>
{/* Tie/Center line */}
<rect fill="#EA4335" height="45" width="2" x="79" y="75"></rect>
<rect fill="#34A853" height="34" rx="7" width="16" x="52" y="132"></rect>
<rect fill="#34A853" height="34" rx="7" width="16" x="92" y="132"></rect>
</svg>
</div>
<span className="mt-2 text-[10px] font-mono font-semibold text-[#1C6934] bg-white px-2 py-0.5 rounded-full shadow-sm">
        SLIET Bugdroid
      </span>
</div>

{/*  Row 1 Center-Top: 5+ Golden Years  */}
<div className="bento-card md:col-span-3 rounded-3xl p-5 bg-[#F0FDF4] border border-[#DCFCE7] flex flex-col justify-between overflow-hidden min-h-[260px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.01 - 5 : 0}px)` }}>
<div className="w-full bg-[#111827] rounded-full p-2 border border-neutral-800 flex items-center justify-center shadow-inner relative overflow-hidden mx-auto max-w-[140px]">
<span className="font-mono text-xs font-bold tracking-[0.2em] text-[#FDE047]">
        GDG SLIET
      </span>
</div>
<div className="flex items-end justify-between mt-auto">
<div>
<span className="text-5xl font-extrabold text-[#15803D] font-sans tracking-tight">5+</span>
<div className="text-xs font-bold text-google-gray-700 leading-tight mt-1">
          Golden<br/>Years
        </div>
</div>
<div className="flex -space-x-3 pr-2 mb-2">
<div className="w-12 h-14 bg-white p-1 rounded shadow border border-google-gray-200 transform -rotate-12 z-10">
<div className="w-full h-8 bg-blue-100 rounded flex items-center justify-center text-[7px] font-bold text-blue-800">Hack '23</div>
<div className="text-[6px] text-center font-mono text-gray-500 mt-1">DevLab</div>
</div>
<div className="w-12 h-14 bg-white p-1 rounded shadow border border-google-gray-200 transform rotate-6 z-20">
<div className="w-full h-8 bg-amber-100 rounded flex items-center justify-center text-[7px] font-bold text-amber-800">Jam '24</div>
<div className="text-[6px] text-center font-mono text-gray-500 mt-1">StudyJam</div>
</div>
</div>
</div>
</div>

{/*  Row 1 Right 1: 1,250+  */}
<div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#EFF6FF] border border-[#DBEAFE] flex flex-col justify-center text-left min-h-[260px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * -0.025 + 15 : 0}px)` }}>
<div className="text-4xl sm:text-5xl font-bold text-[#2563EB] font-sans tracking-tight">
      1,250<span className="text-3xl text-[#2563EB]">+</span>
</div>
<p className="text-sm font-semibold text-[#1E40AF] mt-3 leading-snug">
      Community<br/>members
    </p>
</div>

{/*  Row 1 Right 2: 40+  */}
<div className="bento-card md:col-span-2 rounded-3xl p-6 bg-[#FFFBEB] border border-[#FEF3C7] flex flex-col justify-center text-left min-h-[260px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.02 - 10 : 0}px)` }}>
<div className="text-5xl font-serif italic font-bold text-[#D97706] tracking-tight">
      40<span className="text-3xl font-serif italic font-normal text-[#D97706]">+</span>
</div>
<p className="text-sm font-semibold text-[#92400E] mt-3 leading-snug">
      Successful Events
    </p>
</div>

{/*  Row 2: Left Tech Diverse Card  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#F8FAFC] border border-google-gray-200 flex flex-col justify-between relative overflow-hidden min-h-[380px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * -0.01 + 5 : 0}px)` }}>
<div className="flex items-center justify-between relative z-10">
<span className="text-xs font-mono font-medium text-google-gray-400">We are a</span>
<span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200">Diversity</span>
</div>
<div className="my-auto relative z-10 text-center">
<h3 className="text-4xl font-serif italic text-google-gray-900">
        Tech <span className="font-sans font-extrabold not-italic text-[#2563EB]">Diverse</span>
</h3>
<p className="text-sm font-sans font-medium text-google-gray-500 mt-2">community</p>
</div>
<div className="flex items-center justify-around gap-2 mt-auto relative z-10">
  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-google-gray-100 flex items-center justify-center text-xs text-blue-500">📘</div>
  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-google-gray-100 flex items-center justify-center text-xs text-emerald-500">🍵</div>
  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-google-gray-100 flex items-center justify-center text-xs text-amber-500">🔥</div>
  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-google-gray-100 flex items-center justify-center text-xs text-red-500">☁️</div>
  <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-google-gray-100 flex items-center justify-center text-xs text-purple-500">📱</div>
</div>
</div>

{/*  Centerpiece: GIANT HERO CARD (Longowal)  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-white border border-google-gray-200 flex flex-col justify-between overflow-hidden min-h-[380px] shadow-sm relative transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.015 - 8 : 0}px)` }}>
<div className="flex flex-col items-center justify-center pt-2 relative z-10">
<span className="text-[10px] font-mono tracking-[0.2em] uppercase text-google-gray-400 block mb-3 font-semibold">
          SANGRUR • PUNJAB
        </span>
{/* Faux Gurmukhi Font / Stylized text for Longowal */}
<div className="relative text-center w-full flex justify-center mb-1">
  <svg viewBox="0 0 300 70" className="w-64 h-auto text-black fill-current">
    {/* Just drawing some stylized text for Longowal */}
    <path d="M40 20 L40 50 C40 55, 50 55, 50 50 L50 45" stroke="currentColor" strokeWidth="3" fill="none" />
    <circle cx="45" cy="12" r="3" />
    
    <path d="M60 30 A10 10 0 1 0 80 30 A10 10 0 1 0 60 30" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M90 20 L90 50 M90 35 C100 25, 110 30, 110 50" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M125 35 A10 10 0 1 0 145 35 A10 10 0 1 0 125 35 M145 25 L145 50 C145 55, 130 60, 125 55" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M160 30 A10 10 0 1 0 180 30 A10 10 0 1 0 160 30" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M195 20 L195 50 M195 50 L205 35 L215 50 M215 20 L215 50" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M225 30 A10 10 0 1 0 245 30 A10 10 0 1 0 225 30 M245 20 L245 50" stroke="currentColor" strokeWidth="3" fill="none" />
    
    <path d="M260 20 L260 50 L275 50" stroke="currentColor" strokeWidth="3" fill="none" />
    
    {/* Overline bar */}
    <path d="M30 18 L280 18" stroke="currentColor" strokeWidth="2" strokeDasharray="30 5" fill="none" />
  </svg>
</div>

<div className="h-1.5 w-32 mx-auto google-bar"></div>

{/*  Gurdwara Sketch  */}
<div className="w-full h-36 mt-6 relative flex flex-col justify-end items-center">
<svg className="w-full h-full" fill="none" viewBox="0 0 320 140">
  {/* Domes */}
  <path d="M160 20 C140 20, 130 50, 130 70 L190 70 C190 50, 180 20, 160 20 Z" stroke="#333" strokeWidth="1.5" fill="none" />
  <path d="M160 10 L160 20 M155 15 L165 15" stroke="#333" strokeWidth="1.5" />
  
  {/* Small domes */}
  <path d="M100 50 C90 50, 85 65, 85 75 L115 75 C115 65, 110 50, 100 50 Z" stroke="#333" strokeWidth="1.2" fill="none" />
  <path d="M220 50 C210 50, 205 65, 205 75 L235 75 C235 65, 230 50, 220 50 Z" stroke="#333" strokeWidth="1.2" fill="none" />
  
  {/* Building body */}
  <rect x="70" y="75" width="180" height="45" stroke="#333" strokeWidth="1.5" fill="none" />
  <rect x="120" y="70" width="80" height="50" stroke="#333" strokeWidth="1.5" fill="none" />
  
  {/* Doors/Arches */}
  <path d="M145 120 L145 95 A15 15 0 0 1 175 95 L175 120" stroke="#333" strokeWidth="1.5" fill="none" />
  <path d="M90 120 L90 100 A10 10 0 0 1 110 100 L110 120" stroke="#333" strokeWidth="1.2" fill="none" />
  <path d="M210 120 L210 100 A10 10 0 0 1 230 100 L230 120" stroke="#333" strokeWidth="1.2" fill="none" />
  
  {/* Water reflections or crowd */}
  <path d="M50 120 L270 120" stroke="#333" strokeWidth="1.5" />
  <path d="M70 125 A5 5 0 0 0 80 125 A5 5 0 0 0 90 125 A5 5 0 0 0 100 125" stroke="#666" strokeWidth="1" fill="none" />
  <path d="M220 125 A5 5 0 0 0 230 125 A5 5 0 0 0 240 125 A5 5 0 0 0 250 125" stroke="#666" strokeWidth="1" fill="none" />
</svg>
</div>
</div>
{/*  Industry leaders  */}
<div className="mt-4 pt-3 border-t border-google-gray-100 relative z-10">
<span className="text-[10px] font-mono text-google-gray-400 block text-center mb-2 font-medium">Industry leaders from</span>
<div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-xs font-bold text-google-gray-800">
<span className="text-[#EA4335] font-sans font-semibold">zomato</span>
<span className="text-[#4285F4] font-sans font-bold">Google</span>
<span className="text-[#24292F] font-sans font-semibold">GitHub</span>
<span className="text-[#FF9900] font-sans font-bold">amazon</span>
<span className="text-[#0078D4] font-sans font-semibold">Microsoft</span>
</div>
</div>
</div>

{/*  Row 2 Right: Digital Trendsetters  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#EDFDF5] border border-[#C6F6D5] flex flex-col justify-between overflow-hidden min-h-[380px] relative transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * -0.015 + 8 : 0}px)` }}>
<div className="flex items-start justify-between gap-4 relative z-10">
<div>
<h3 className="text-4xl sm:text-4xl font-serif italic text-[#166534] font-normal leading-tight">
          Digital<br/>
<span className="font-sans not-italic font-bold text-[#15803D]">Trendsetters</span>
</h3>
<p className="text-xs text-[#166534] mt-3 max-w-[170px] leading-relaxed">
          Award for having the most active tech community in Malwa & Punjab region
        </p>
</div>
{/* Physical Trophy Mockup */}
<div className="relative w-24 h-36 shrink-0 bg-white rounded-2xl p-2.5 shadow-sm border border-emerald-200 flex flex-col items-center justify-between text-center group-hover:rotate-2 transition-transform">
<div className="w-8 h-10 rounded-md bg-amber-100 flex items-center justify-center text-sm text-amber-600 shadow-inner mt-1 border border-amber-200">
          🏆
        </div>
<div className="my-1">
<div className="text-[7px] font-bold text-google-gray-800 uppercase tracking-tighter">GOOGLE DEVELOPERS</div>
<div className="text-[8px] font-bold text-google-blue mt-0.5">GDG SLIET</div>
</div>
<span className="text-[7px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-[#166534] font-semibold">
          Top Chapter '24
        </span>
</div>
</div>
{/* Social Handle Badge Pill */}
<div className="inline-flex items-center gap-2 mt-auto px-4 py-1.5 rounded-full bg-white/90 border border-emerald-200 text-xs font-mono text-[#166534] shadow-sm w-max relative z-10">
<div className="flex items-center gap-1.5 text-[#15803D]">
<span>📷</span>
<span>💼</span>
<span>𝕏</span>
</div>
<span className="font-bold">@gdg_sliet</span>
</div>
</div>

{/*  Row 3 Left: Team  */}
<div className="bento-card md:col-span-4 rounded-3xl overflow-hidden relative min-h-[240px] flex flex-col justify-end p-6 group transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.02 - 15 : 0}px)` }}>
<div className="absolute inset-0 bg-neutral-900 z-10"></div>
<div className="absolute inset-0 flex items-center justify-center z-10 opacity-20 text-blue-500 font-mono text-6xl font-bold select-none tracking-widest">
      &lt;TEAM/&gt;
    </div>
<div className="relative z-20">
<span className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/30 inline-block mb-2">
        GDG SLIET Team
      </span>
<h4 className="text-xl font-bold text-white font-sans tracking-tight">
        Team that brings energy
      </h4>
<p className="text-[11px] text-white/60 mt-1">45+ passionate leads, mentors & volunteers</p>
</div>
</div>

{/*  Row 3 Middle: Developer Syntax  */}
<div className="bento-card md:col-span-4 rounded-3xl p-6 bg-[#EFF6FF] border border-[#BFDBFE] flex flex-col items-center justify-center relative overflow-hidden min-h-[240px] text-center transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * -0.01 + 5 : 0}px)` }}>
<div className="relative w-full h-full flex flex-col items-center justify-center">
<span className="absolute top-2 left-6 text-xs font-mono text-blue-500 font-bold">{"{ }"}</span>
<span className="absolute top-4 right-10 text-xs font-mono text-emerald-500 font-bold">//</span>
<span className="absolute bottom-10 left-10 text-xs font-mono text-amber-500 font-bold">#</span>
<span className="absolute bottom-8 right-8 text-xs font-mono text-purple-500 font-bold">func()</span>
<svg className="w-20 h-20 mb-3 drop-shadow-sm transition-transform hover:scale-110 duration-300" fill="none" viewBox="0 0 192 192">
<path d="M48 64L16 96L48 128" stroke="#4285F4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></path>
<path d="M144 64L176 96L144 128" stroke="#EA4335" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></path>
<path d="M112 56L80 136" stroke="#34A853" strokeLinecap="round" strokeWidth="22"></path>
</svg>
<span className="text-xs font-mono font-semibold text-[#2563EB] bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100">
      Developers for Developers
    </span>
</div>
</div>

{/*  Row 3 Right: Behind the Scenes  */}
<div className="bento-card md:col-span-4 rounded-3xl p-5 bg-[#FFF7ED] border border-[#FED7AA] flex flex-col justify-between min-h-[240px] transform hover:scale-[1.02] transition-transform" style={{ transform: `translateY(${typeof window !== 'undefined' ? window.scrollY * 0.015 - 10 : 0}px)` }}>
<div className="flex items-center justify-between">
<h4 className="text-lg font-bold text-[#9A3412] font-sans">
        Behind the Scenes
      </h4>
<span className="text-[9px] font-mono font-bold bg-[#FFEDD5] text-[#9A3412] px-2 py-0.5 rounded-full border border-[#FDBA74]">
        SLIET Diary
      </span>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="h-14 rounded-xl bg-white border border-[#FED7AA] p-2 flex flex-col justify-between shadow-sm">
<span className="text-[10px] font-bold text-google-gray-800">Hostel 8</span>
<span className="text-[8px] font-mono text-google-gray-500">3 AM Code Sprints</span>
</div>
<div className="h-14 rounded-xl bg-white border border-[#FED7AA] p-2 flex flex-col justify-between shadow-sm">
<span className="text-[10px] font-bold text-google-gray-800">Nescafe Tapri</span>
<span className="text-[8px] font-mono text-google-gray-500">Chai & Hack Ideation</span>
</div>
<div className="h-14 rounded-xl bg-white border border-[#FED7AA] p-2 flex flex-col justify-between shadow-sm">
<span className="text-[10px] font-bold text-google-gray-800">CSE Lab 2</span>
<span className="text-[8px] font-mono text-google-gray-500">Docker Jam Setup</span>
</div>
<div className="h-14 rounded-xl bg-white border border-[#FED7AA] p-2 flex flex-col justify-between shadow-sm">
<span className="text-[10px] font-bold text-google-gray-800">Swag Boxes</span>
<span className="text-[8px] font-mono text-google-gray-500">Google T-Shirt Unbox</span>
</div>
</div>
</div>
</div>
</section>
"""

new_content = content[:start_idx] + new_section + content[end_idx:]

# Additionally, add window.addEventListener to App.jsx to capture scrollY
if 'const [scrollY, setScrollY] = useState(0);' not in new_content:
    hook_insert = "  const [scrollY, setScrollY] = useState(0);\n  useEffect(() => {\n    const handleScroll = () => setScrollY(window.scrollY);\n    window.addEventListener('scroll', handleScroll, { passive: true });\n    return () => window.removeEventListener('scroll', handleScroll);\n  }, []);\n"
    
    # insert after const [loaderWidth, setLoaderWidth] = useState('0%');
    parts = new_content.split("const [loaderWidth, setLoaderWidth] = useState('0%');\n")
    if len(parts) == 2:
        new_content = parts[0] + "const [loaderWidth, setLoaderWidth] = useState('0%');\n" + hook_insert + parts[1]

with open('src/App.jsx', 'w') as f:
    f.write(new_content)
