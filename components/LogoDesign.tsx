'use client';

import Image from 'next/image';
import { Palette } from 'lucide-react';
import { motion } from 'motion/react';

const LOGO_DATA = [
  {
    id: 1,
    image: '/logos/vanguard-logo.png',
    name: 'Vanguard Astro',
    category: 'Deep Space Travel Brand',
  },
  {
    id: 2,
    image: '/logos/zora-logo.png',
    name: 'Zora',
    category: 'Marketplace Brand',
  },
  {
    id: 3,
    image: '/logos/oria-logo.png',
    name: 'Oria',
    category: 'Healthy Food Consumer Brand',
  },
];

export default function LogoDesign() {
  return (
    <section
      id="logo-design"
      className="relative max-w-[1600px] mx-auto px-6 lg:px-12 py-32"
    >
      {/* Section Header */}
      <div className="max-w-3xl mb-20">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg border border-[#FF2EFF]/20 bg-[#FF2EFF]/10">
            <Palette className="w-4 h-4 text-[#FF2EFF]" />
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            BRANDING • VISUAL IDENTITY
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
          Visual Identity Archive
        </h2>

        <p className="text-neutral-400 leading-relaxed max-w-2xl">
          A collection of logos and brand identities designed with a focus on
          clarity, creativity, and lasting impressions.
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {LOGO_DATA.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="
              group
              rounded-2xl
              border border-white/[0.05]
              bg-[#111116]/40
              backdrop-blur-sm
              overflow-hidden
              transition-all duration-500
              hover:border-white/[0.1]
              hover:bg-[#14141d]/70
            "
          >
            {/* Image Area */}
            <div
              className="
                h-72
                flex
                items-center
                justify-center
                bg-gradient-to-b
                from-[#0C0C14]
                to-[#09090F]
                p-10
              "
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="p-6">
              <h3
                className="
                  font-mono
                  uppercase
                  tracking-[0.2em]
                  text-sm
                  font-bold
                  text-white
                "
              >
                {logo.name}
              </h3>

              <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                {logo.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

