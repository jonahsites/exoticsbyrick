/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Car, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- DATA ---

const FLEET = [
  { n: "MCLAREN 720S", y: "2024", p: "$1,499/D", c: "YELLOW" },
  { n: "FERRARI F8", y: "2023", p: "$1,599/D", c: "ROSSO CORSA" },
  { n: "LAMBO AVENTADOR", y: "2024", p: "$1,899/D", c: "NERO" },
  { n: "765LT SPYDER", y: "2023", p: "$2,200/D", c: "ORANGE" }
];

// --- SECTIONS ---

const Header = ({ scrolled }: { scrolled: boolean }) => (
  <nav 
    className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Car className="text-yellow-500 w-8 h-8" />
        <span className="text-2xl font-display uppercase tracking-tighter italic text-white flex gap-2">
          Exotics <span className="text-yellow-500">By Rick</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-12">
        {['Registry', 'Legacy', 'Details', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.4em] text-white hover:text-yellow-500 transition-colors">
            {item}
          </a>
        ))}
        <a href="tel:4088885040" className="bg-yellow-500 text-black px-8 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 transition-all">
          408.888.5040
        </a>
      </div>
    </div>
  </nav>
);

const CinematicHero = () => (
  <section className="relative h-screen w-full flex flex-col justify-end p-12 md:p-24 overflow-hidden bg-black text-white font-outfit">
    <div className="absolute inset-0 opacity-60">
      <img 
        src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2670&auto=format&fit=crop" 
        alt="Yellow McLaren 720s"
        className="w-full h-full object-cover scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="absolute inset-0 bg-transparent" />
    <div className="relative z-10 max-w-4xl">
      <div className="flex items-center gap-6 mb-12">
        <div className="w-px h-12 bg-yellow-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-yellow-500">Departure_Protocol // LA_Hub</span>
      </div>
      <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.85] mb-12">
        Exotics <br /> <span className="italic font-light opacity-60 text-yellow-500">By Rick.</span>
      </h1>
      <div className="flex flex-wrap gap-12 items-center">
        <button className="px-16 py-6 bg-yellow-500 text-black font-black uppercase text-xs tracking-widest hover:bg-yellow-400 transition-all active:scale-95">
          Initiate Sortie
        </button>
        <div className="flex flex-col">
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">Base of Operations</span>
          <span className="text-xs font-bold uppercase tracking-widest text-white">Los Angeles, CA</span>
        </div>
      </div>
    </div>
  </section>
);

const SpotlightMcLaren = () => (
  <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-black text-white px-8 md:px-24 py-24 font-grotesk">
     <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="text-[30vw] font-black italic tracking-tighter leading-none text-yellow-500 uppercase">720S</h2>
     </div>
     <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 items-center gap-24">
        <div className="md:col-span-4 flex flex-col gap-12">
           <div className="flex flex-col border-l-2 border-yellow-500 pl-8">
              <span className="text-[10px] uppercase tracking-widest text-yellow-500 mb-2">Power_Unit</span>
              <span className="text-4xl md:text-5xl font-bold italic">4.0L V8 TWIN</span>
           </div>
           <div className="flex flex-col border-l-2 border-white/20 pl-8 opacity-40">
              <span className="text-[10px] uppercase tracking-widest mb-2">Velocity_Max</span>
              <span className="text-4xl md:text-5xl font-bold italic">341 KM/H</span>
           </div>
        </div>
        <div className="md:col-span-8 relative aspect-video flex items-center justify-center">
           <div className="absolute inset-0 bg-yellow-500/5 blur-[100px] rounded-full scale-150" />
           <img 
             src="https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2670&auto=format&fit=crop" 
             className="w-full h-full object-cover z-10 rounded-2xl shadow-2xl" 
             referrerPolicy="no-referrer"
           />
           <div className="absolute -bottom-8 -right-8 bg-black p-8 z-20 border border-white/10 hidden md:block">
              <h3 className="text-2xl font-black uppercase italic italic-90 leading-none">SIGNATURE_UNIT.</h3>
              <p className="text-[10px] text-yellow-500 font-bold tracking-widest mt-2 uppercase">Yellow McLaren 720s</p>
           </div>
        </div>
     </div>
  </section>
);

const SwissValues = () => (
  <section className="relative min-h-screen w-full bg-white text-black p-12 md:p-24 font-grotesk font-black flex items-center overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full uppercase">
       <div className="hidden md:flex col-span-1 border-l-4 border-black pl-8 flex-col justify-between h-[500px]">
          <span className="text-xs">01</span>
          <span className="text-xs">02</span>
          <span className="text-xs">03</span>
       </div>
       <div className="md:col-span-11 flex flex-col gap-12">
          <div className="flex flex-col">
             <h2 className="text-6xl md:text-9xl tracking-tighter leading-none italic">PRECISION.</h2>
             <p className="text-[10px] md:text-xs font-medium max-w-md mt-4 ml-0 md:ml-2">Everything down to the PSI is calculated for the perfect Rick experience.</p>
          </div>
          <div className="flex flex-col md:ml-24">
             <h2 className="text-6xl md:text-9xl tracking-tighter leading-none italic">SPEED.</h2>
             <p className="text-[10px] md:text-xs font-medium max-w-md mt-4 ml-0 md:ml-2">Not just velocity, but the speed of service. Delivery across all of LA.</p>
          </div>
          <div className="flex flex-col md:ml-48 text-yellow-600">
             <h2 className="text-6xl md:text-9xl tracking-tighter leading-none italic">PURITY.</h2>
             <p className="text-[10px] md:text-xs font-medium max-w-md mt-4 ml-0 md:ml-2 text-black">Unfiltered experiences, no compromise on raw exotic power.</p>
          </div>
       </div>
    </div>
  </section>
);

const FleetRegistry = () => (
   <section id="registry" className="relative min-h-screen w-full p-12 md:p-24 overflow-hidden bg-white text-black font-sans uppercase font-black">
    <div className="h-full flex flex-col max-w-7xl mx-auto w-full">
       <div className="flex justify-between items-end mb-20 border-b-2 border-black pb-8">
          <h2 className="text-4xl md:text-8xl tracking-tighter">REGISTRY.</h2>
          <div className="flex flex-col items-end">
             <span className="text-2xl md:text-5xl italic leading-none text-yellow-600">008</span>
             <span className="text-[8px] opacity-30 mt-1 uppercase font-bold tracking-widest">Total_Units_LA</span>
          </div>
       </div>
       <div className="flex-1">
          {FLEET.map((car, i) => (
            <div key={i} className="flex justify-between items-center py-12 border-b border-black/5 hover:italic transition-all group cursor-pointer overflow-hidden">
               <div className="flex items-baseline gap-4 md:gap-12">
                  <span className="text-[8px] md:text-[10px] opacity-20">{car.y}</span>
                  <span className="text-3xl md:text-8xl tracking-tight leading-none group-hover:scale-105 transition-transform origin-left">{car.n}</span>
               </div>
               <div className="flex flex-col items-end shrink-0">
                  <span className="text-sm md:text-2xl">{car.p}</span>
                  <span className="text-[8px] text-yellow-600 mb-1">{car.c}</span>
                  <button className="text-[8px] md:text-[10px] opacity-40 hover:opacity-100 italic transition-opacity uppercase font-bold tracking-tighter">Initialize_Handover</button>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const TimelineLegacy = () => (
  <section id="legacy" className="relative min-h-screen w-full p-12 md:p-24 bg-yellow-500 text-black font-retro italic overflow-hidden">
    <div className="flex flex-col h-full max-w-7xl mx-auto">
       <h2 className="text-6xl md:text-9xl tracking-tighter uppercase mb-24 border-b-8 border-black pb-8 font-black">LEGACY.</h2>
       <div className="flex-1 flex flex-col md:flex-row gap-24 items-start md:items-end w-full">
          {[
            {y: "2021", t: "Genesis", d: "Operation starts in the heart of Los Angeles."},
            {y: "2023", t: "Expansion", d: "First signature McLaren 720S acquired."},
            {y: "2026", t: "Zenith", d: "Rick scales exotic luxury beyond limits."}
          ].map((item, i) => (
            <div key={i} className="flex-1 flex flex-col gap-6 w-full">
               <span className="text-6xl md:text-9xl leading-none font-black">{item.y}</span>
               <div className="flex flex-col gap-2">
                 <span className="text-2xl uppercase font-black">{item.t}</span>
                 <p className="text-xs not-italic max-w-xs opacity-60 font-bold uppercase tracking-widest">{item.d}</p>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const FocusDetails = () => (
  <section id="details" className="relative min-h-screen w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden bg-zinc-950 text-white font-fashion">
    <div className="col-span-full md:col-span-8 p-12 md:p-24 flex flex-col justify-between border-r border-white/5">
       <span className="text-xs uppercase tracking-[0.6em] text-yellow-500 font-sans not-italic font-black">Focus // LA No.001</span>
       <div className="flex flex-col gap-8 my-12 md:my-0">
          <h2 className="text-6xl md:text-[10vw] font-light italic leading-[0.8] tracking-tighter text-white">PURE <br /> DETAILS.</h2>
          <p className="max-w-md text-lg italic font-light leading-relaxed text-white/50">
            It's the tactile response of the carbon paddles. The specific acoustic resonance of our 720s at 9,000 RPM. Rick explores the minutiae of high performance.
          </p>
       </div>
       <div className="flex gap-12 border-t border-white/5 pt-12">
          {["PADDLES", "PCH_VALVES", "AERO"].map(f => (
            <div key={f} className="flex flex-col gap-2">
               <span className="text-[10px] opacity-20 uppercase font-sans not-italic font-black tracking-widest">{f}</span>
               <span className="text-xl font-fashion italic text-yellow-500">Optimized</span>
            </div>
          ))}
       </div>
    </div>
    <div className="col-span-full md:col-span-4 relative overflow-hidden flex items-center justify-center bg-white/5 min-h-[400px] md:min-h-0">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.2)_0%,transparent_70%)]" />
       <img 
         src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1500" 
         className="w-[150%] h-full object-cover transform scale-150 rotate-6 grayscale hover:grayscale-0 transition-all duration-1000" 
         referrerPolicy="no-referrer"
       />
    </div>
  </section>
);

const OperationalInfo = () => (
  <section id="contact" className="relative min-h-screen w-full flex flex-col p-12 md:p-24 overflow-hidden bg-black text-white font-syne font-black">
    <div className="flex justify-between items-start mb-24 border-b border-white pb-8">
      <h2 className="text-6xl md:text-9xl uppercase tracking-tighter">I N F O.</h2>
      <div className="text-right">
        <span className="text-xs opacity-40 block">Operational_V4</span>
        <span className="text-xs text-yellow-500 block uppercase tracking-widest">408.888.5040</span>
      </div>
    </div>
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-1">
      {[ {q: "MINIMUM AGE?", a: "Operational clearance in LA requires 25+ with verified credentials." },
         {q: "INSURANCE?", a: "Comprehensive Rick-protocol protection active on all sorties." },
         {q: "DELIVERY?", a: "Synchronized drop-off within LA County included in all bookings." },
         {q: "DEPOSIT?", a: "Refundable security hold applied to any verified payment method." }
      ].map((item, i) => (
        <div key={i} className="border border-white/10 p-12 hover:bg-white hover:text-black transition-all group flex flex-col justify-between">
           <span className="text-2xl md:text-4xl uppercase italic group-hover:text-black">{item.q}</span>
           <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] leading-loose mt-8 opacity-40 group-hover:opacity-100 group-hover:text-black">
             {item.a}
           </p>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 bg-zinc-950 border-t border-white/5 font-sans">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mb-24">
        <div className="col-span-1 md:col-span-2">
           <div className="flex items-center gap-2 mb-8">
            <Car className="text-yellow-500 w-8 h-8" />
            <span className="text-2xl font-display uppercase tracking-tighter italic text-white">Exotics <span className="text-yellow-500">By Rick</span></span>
          </div>
          <h4 className="text-white text-5xl md:text-8xl font-black tracking-tighter italic uppercase mb-12">DRIVE <br /> RICK.</h4>
          <div className="flex gap-4">
             {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all group">
                <Icon className="w-5 h-5 text-zinc-500 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-yellow-500 text-[10px] uppercase font-black tracking-[0.5em] mb-8">Base_LA</h4>
            <p className="text-white/40 text-sm font-bold uppercase tracking-widest leading-loose">
              Beverly Hills Terminal <br />
              Los Angeles, CA <br />
              408.888.5040
            </p>
          </div>
          <p className="text-zinc-800 text-[8px] uppercase font-bold tracking-[0.2em] mt-12">
            © 2026 EXOTICS BY RICK. ALL HORSEPOWER RESERVED.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black scroll-smooth">
      <Header scrolled={scrolled} />
      
      <main>
        <CinematicHero />
        <SpotlightMcLaren />
        <SwissValues />
        <FleetRegistry />
        <TimelineLegacy />
        <FocusDetails />
        <OperationalInfo />
      </main>

      <Footer />
    </div>
  );
}
