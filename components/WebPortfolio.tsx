'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/lib/data';

interface SlidingHeroProps {
  onSelectProject: (idx: number) => void;
}

export default function SlidingHero({
  onSelectProject,
}: SlidingHeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const duration = 6000;

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const updateProgress = (time: number) => {
      const elapsed = time - startTime;
      const pct = Math.min((elapsed / duration) * 100, 100);

      setProgress(pct);

      if (pct >= 100) {
        setCurrentSlide(
          (curr) => (curr + 1) % PROJECTS_DATA.length
        );
      } else {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % PROJECTS_DATA.length
    );
  };

  const handlePrev = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + PROJECTS_DATA.length) %
        PROJECTS_DATA.length
    );
  };

  const handleSelectSlide = (idx: number) => {
    setCurrentSlide(idx);
  };

  const handleCtaClick = () => {
    onSelectProject(currentSlide);

    document
      .getElementById('project-engine')
      ?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <section
      id="web-development"
      className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-32"
    >
      {/* Header */}
      <div className="max-w-3xl mb-10">

        <div className="flex items-center gap-3 mb-5">

          <div className="p-2 rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/10">
            <Activity className="w-4 h-4 text-[#00F0FF]" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            DEVELOPMENT • DIGITAL EXPERIENCES
          </span>

        </div>

        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Project Archive
        </h2>

        <p className="text-neutral-400 leading-relaxed max-w-2xl">
          A collection of websites and interfaces designed with a focus on
          performance, usability, and visual refinement.
        </p>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-[1.45fr_1fr] gap-8">

        {/* Screenshot Card */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.05] bg-[#111116]/40 min-h-[550px]">

          {/* Navigation Header */}
          <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="
              p-3
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/[0.08]
              hover:border-[#00F0FF]/30
              hover:bg-black/80
              transition-all duration-300
              "
            >
              <ChevronLeft className="w-5 h-5 text-neutral-300" />
            </button>

            {/* Center Badge */}
            <div
              className="
              px-5
              py-2.5
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/[0.08]
              shadow-[0_0_25px_rgba(0,240,255,0.05)]
              "
            >
              <span className="
                font-mono
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-neutral-300
              ">
                PROJECT {(currentSlide + 1)
                  .toString()
                  .padStart(2, '0')}
                {' / '}
                {PROJECTS_DATA.length
                  .toString()
                  .padStart(2, '0')}
              </span>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="
              p-3
              rounded-full
              bg-black/60
              backdrop-blur-md
              border border-white/[0.08]
              hover:border-[#00F0FF]/30
              hover:bg-black/80
              transition-all duration-300
              "
            >
              <ChevronRight className="w-5 h-5 text-neutral-300" />
            </button>

          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={PROJECTS_DATA[currentSlide].imagePath}
                alt={PROJECTS_DATA[currentSlide].title}
                fill
                priority
                className="object-contain"
              />
            </motion.div>

          </AnimatePresence>

        </div>

        {/* Information Panel */}
        <div className="rounded-2xl border border-white/[0.05] bg-[#111116]/40 p-8 flex flex-col">

          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >

            <div className="mb-4">

              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-neutral-500">
                PROJECT {(currentSlide + 1)
                  .toString()
                  .padStart(2, '0')}
              </span>

            </div>

            <h3 className="text-3xl text-white font-light mb-6">
              {PROJECTS_DATA[currentSlide].title}
            </h3>

            <p className="text-neutral-400 leading-relaxed mb-10">
              {PROJECTS_DATA[currentSlide].description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-12">

              {PROJECTS_DATA[currentSlide].techStack.map(
                (tech) => (
                  <div
                    key={tech}
                    className="
                    px-4 py-2
                    rounded-lg
                    border border-white/[0.06]
                    bg-black/30
                    text-xs
                    font-mono
                    tracking-[0.15em]
                    text-neutral-300
                    uppercase
                    "
                  >
                    {tech}
                  </div>
                )
              )}

            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 mt-auto">

              <a
                href={PROJECTS_DATA[currentSlide].websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-6
                py-4
                rounded-xl
                bg-[#00F0FF]/10
                border border-[#00F0FF]/20
                text-[#00F0FF]
                hover:bg-[#00F0FF]/15
                transition-all
                "
              >
                VISIT WEBSITE

                <ArrowRight className="w-4 h-4" />

              </a>

              <button
                onClick={handleCtaClick}
                className="
                px-6
                py-4
                rounded-xl
                border border-white/[0.05]
                bg-white/[0.02]
                hover:bg-white/[0.05]
                text-neutral-300
                transition-all
                "
              >
                VIEW PROJECT DETAILS
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-center">
        {/* Indicators */}
        <div className="flex items-center gap-3">

          {PROJECTS_DATA.map((project, idx) => {

            const isSelected = idx === currentSlide;

            return (
              <button
                key={project.title}
                onClick={() => handleSelectSlide(idx)}
                className="group"
              >
                <div
                  className={`h-1 rounded-full relative overflow-hidden transition-all duration-500 ${
                    isSelected
                      ? 'bg-emerald-500/30 w-14'
                      : 'bg-white/10 w-4'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      className="absolute inset-y-0 left-0 bg-emerald-400"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
}
