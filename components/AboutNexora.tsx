'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MonitorCog, Palette, Clapperboard } from 'lucide-react';
import Image from 'next/image';
import ViewfinderFrame from './branding/ViewfinderFrame';

export default function AboutNexora() {
  const [logoActive, setLogoActive] = useState(false);

  const stats = [
    {
      id: '01',
      title: 'DIGITAL FOUNDATIONS',
      desc: 'Crafting responsive websites with a focus on performance, thoughtful design, and seamless user experiences.',
      icon: <MonitorCog className="w-4 h-4 text-[#00F0FF]" />,
    },
    {
      id: '02',
      title: 'VISUAL IDENTITY',
      desc: 'Designing distinctive logos and brand elements that communicate personality with clarity and style.',
      icon: <Palette className="w-4 h-4 text-[#FF2EFF]" />,
    },
    {
      id: '03',
      title: 'CINEMATIC STORYTELLING',
      desc: 'Producing polished video content with refined editing, smooth pacing, and attention to every detail.',
      icon: <Clapperboard className="w-4 h-4 text-emerald-400" />,
    },
  ];

  return (
    <section 
      id="about-nexora" 
      className="relative w-full pt-32 pb-24 sm:pt-32 sm:pb-32 bg-[#09090D] border-b border-white/[0.04] overflow-hidden"
    >
      {/* Cybernetic Grid Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0 opacity-15" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#00F0FF]/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF2EFF]/3 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Intricate Logo Display with Targeting Corners */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="group cursor-pointer select-none relative"
              onMouseEnter={() => setLogoActive(true)}
              onMouseLeave={() => setLogoActive(false)}
            >
              {/* Extra large bespoke viewport frame */}
              <div className="relative p-1 bg-[#0E0E18]/60 border border-white/[0.05] rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.03)] group-hover:border-[#00F0FF]/30 transition-all duration-500">
                <div className="p-4 sm:p-8 flex items-center justify-center relative w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[360px] lg:h-[360px] xl:w-[420px] xl:h-[420px] mx-auto transition-all duration-500">
                  <Image 
                    src="/nexora_logo.png" 
                    alt="Nexora Logo" 
                    fill
                    priority
                    className="object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative and Tech Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight pb-2">
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-emerald-400 to-[#FF2EFF]">Hyper-Performance</span> Digital Ecosystems
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
                I'm <span className="text-white font-medium">Nikhil Jain</span>, the creator behind Nexora. I specialize in crafting modern, high-quality websites and creative media experiences, combining innovative technology with thoughtful design and a meticulous attention to detail.
              </p>
            </div>

            {/* Micro Specs List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {stats.map((stat) => (
                <div 
                  key={stat.id} 
                  className="p-5 rounded-xl border border-white/[0.05] bg-[#111116]/40 hover:bg-[#14141d]/85 hover:border-white/[0.1] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[14px] tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-emerald-400 to-[#FF2EFF] mb-2 min-h-[2.5rem] flex items-center">
                      {stat.title}
                    </span>
                    <div className="p-1.5 rounded bg-white/[0.02] border border-white/5">
                      {stat.icon}
                    </div>
                  </div>
                  <p className="text-[13px] text-white leading-relaxed font-light font-sans">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
