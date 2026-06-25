'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X,
  Sparkles,
  ChevronDown,
  MonitorCog,
  Palette,
  Clapperboard
} from 'lucide-react';

import VideoPortfolio from '@/components/VideoPortfolio';
import StudioBookingDesk from '@/components/StudioBookingDesk';
import WebPortfolio from '@/components/WebPortfolio';
import AboutNexora from '@/components/AboutNexora';
import { PROJECTS_DATA } from '@/lib/data';
import NexoraHeader from '@/components/branding/NexoraHeader';
import LogoDesign from '@/components/LogoDesign';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isSpecDrawerOpen, setIsSpecDrawerOpen] = useState<boolean>(false);
  const [bookingToast, setBookingToast] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);

  const triggerToast = (msg: string) => {
    setBookingToast(msg);
    setTimeout(() => setBookingToast(null), 5000);
  };

  const handleScrollToBooking = () => {
    setIsSpecDrawerOpen(false);
    document.getElementById('booking-desk')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeProject = PROJECTS_DATA[activeIndex];

  return (
    <div id="canvas-portal" className="min-h-screen bg-[#060608] text-[#F3F4F6] relative cinematic-grid font-sans selection:bg-[#00F0FF]/25 selection:text-[#00F0FF]">
      
      {/* 1. Minimal Header Frame */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#060608]/80 backdrop-blur-lg border-b border-white/[0.04]">
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 h-24 flex items-center">
          
          <NexoraHeader />

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10 ml-12">
            <div className="relative">
              {/* Web Design & Development */}
              <button
                onClick={() => document.getElementById('web-development')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-1 font-mono text-[16px] tracking-[0.2em] text-white hover:text-white transition-colors cursor-pointer"
              >
                <MonitorCog className="w-4 h-4 text-[#00F0FF] mr-2" />
                <span className="text-sm uppercase">
                  Web Design & Development
                </span>
              </button>
            </div>
            
              {/* Logo Design */}
              <button
                onClick={() => document.getElementById('logo-design')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-1 font-mono text-[16px] tracking-[0.2em] text-white hover:text-white transition-colors cursor-pointer"
              >
                <Palette className="w-4 h-4 text-[#FF2EFF] mr-2" />
                <span className="text-sm uppercase">
                  Logo Design
                </span>
              </button>

              {/* Video Editing */}
              <button
                onClick={() => document.getElementById('video-portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-1 font-mono text-[16px] tracking-[0.2em] text-white hover:text-white transition-colors cursor-pointer"
              >
                <Clapperboard className="w-4 h-4 text-emerald-400 mr-2" />
                <span className="text-sm uppercase">
                  Video Editing
                </span>
              </button>


            {/* BOOKING */}
            <button
              onClick={() =>
                document
                  .getElementById('studio-booking-desk')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="font-mono text-[16px] tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-emerald-400 to-[#FF2EFF] hover:text-white transition-colors cursor-pointer"
            >
              Contact Us
            </button>

          </nav>
        </div>
      </header>

      {/* 2. About Nexora Introduction */}
      <AboutNexora />

      {/* 3. Sliding Immersive Hero */}
      <section id="web-development">
        <WebPortfolio onSelectProject={setActiveIndex} />
      </section>

      <section id="logo-design">
        <LogoDesign />
      </section>

      {/* 3. The Video Editing & Finishing Portfolio Suite */}
      <section id="video-editing">
        <VideoPortfolio />
      </section>

      {/* 4. The Studio Booking Desk Component */}
      <section id="studio-booking-desk">
        <StudioBookingDesk
          onSuccessNotification={triggerToast}
          userEmail="njain1845@gmail.com"
        />
      </section>

      {/* 5. Nexora Footer */}
      <footer className="relative border-t border-white/[0.04] overflow-hidden">

        {/* subtle background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.04),transparent_65%)] pointer-events-none" />

        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Final CTA */}
          <div className="py-24 text-center border-b border-white/[0.04]">
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-[#00F0FF] mb-4">
              Ready To Start?
            </p>

            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight max-w-4xl mx-auto">
              Let&apos;s build something exceptional together.
            </h2>

            <button
              onClick={() =>
                document
                  .getElementById('studio-booking-desk')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="
              mt-10
              px-8
              py-4
              rounded-full
              border border-[#00F0FF]/20
              bg-[#00F0FF]/10
              text-[#00F0FF]
              font-mono
              text-xs
              tracking-[0.35em]
              uppercase
              hover:bg-[#00F0FF]
              hover:text-black
              transition-all
              duration-300
              cursor-pointer
              "
            >
              Start A Project
            </button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-20">

            {/* Brand */}
            <div>
              <div className="font-mono text-[11px] tracking-[0.4em] uppercase text-[#00F0FF] mb-5">
                Nexora
              </div>

              <p className="text-neutral-400 leading-relaxed max-w-sm">
                Designing websites, visual identities and digital content
                that help businesses launch, grow and scale with confidence.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-neutral-500 mb-5">
                Services
              </div>

              <div className="flex flex-col gap-4">

                <button
                  onClick={() =>
                    document
                      .getElementById('web-development')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-left text-neutral-300 hover:text-[#00F0FF] transition-colors"
                >
                  Web Design & Development
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('logo-design')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-left text-neutral-300 hover:text-[#FF2EFF] transition-colors"
                >
                  Logo Design
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('video-portfolio')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-left text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  Video Editing
                </button>

                <button
                  onClick={() =>
                    document
                      .getElementById('studio-booking-desk')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-left text-neutral-300 hover:text-white transition-colors"
                >
                  Project Enquiry
                </button>

              </div>
            </div>

            {/* Contact */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-neutral-500 mb-5">
                Contact
              </div>

              <div className="space-y-3">

                <a
                  href="mailto:njain1845@gmail.com"
                  className="
                  text-white
                  hover:text-[#00F0FF]
                  transition-colors
                  break-all
                  "
                >
                  njain1845@gmail.com
                </a>

                <p className="text-sm text-neutral-500">
                  Typically replies within 24 hours.
                </p>

              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.04] py-8 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-500">
              © 2026 Nexora Studio. All Rights Reserved.
            </p>

            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-neutral-600">
              Built With Next.js • Hosted On Vercel
            </p>

          </div>

        </div>
      </footer>

      {/* Floating global notification banner */}
      <AnimatePresence>
        {bookingToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-xl border border-emerald-500/20 bg-[#0B0C10]/95 backdrop-blur-md shadow-2xl max-w-sm flex items-start gap-3"
            id="global-feedback-toast"
          >
            <div className="p-2 border border-emerald-500/20 rounded bg-emerald-500/10 text-emerald-400">
              <Sparkles className="w-4 h-4" />
            </div>
            
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-bold">
                RESERVATION RECEIVED
              </div>
              <p className="text-xs text-[#E0F7FA] leading-relaxed font-light">
                {bookingToast}
              </p>
            </div>

            <button 
              onClick={() => setBookingToast(null)}
              className="p-1 hover:bg-white/5 rounded text-neutral-400 hover:text-white transition-colors cursor-pointer ml-auto"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
