'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Clapperboard } from 'lucide-react';
import ReactPlayer from 'react-player';

interface VideoTile {
  id: string;
  title: string;
  client: string;
  duration: string;
  videoPath: string;
  thumbnailPath: string;
  software: string[];
  description: string;
}

const VIDEOS_DATA: VideoTile[] = [
  {
    id: "startive-launch",
    title: "STARTive Bootcamp Launch",
    client: "STARTive",
    duration: "60",
    videoPath:
      "/Startive_vid1.mp4",
    thumbnailPath: "",
      software: [
      "Clipchamp",
      "Mobile Production",
      "Dynamic Subtitling"
    ],
    description:
      "Short-form promotional reel created to introduce STARTive's new business bootcamp program. Produced from concept to final edit to generate awareness, excitement, and engagement across social media."
  },

  {
    id: "suchitra-art",
    title: "Art Process Reel",
    client: "Suchitra Art Studio",
    duration: "69",
    videoPath:
      "/Sketching_vid1.mp4",
    thumbnailPath: "",
      software: [
      "ShotCut",
      "Mobile Production",
      "Tripod Filming"
    ],
    description:
      "Instagram reel designed to capture attention through a fast-paced sketching time-lapse. Combined process footage with a persistent artwork preview to keep viewers engaged and encourage longer watch times."
  },

  {
    id: "sarvam-ai",
    title: "AI Product Showcase",
    client: "Sarvam AI",
    duration: "45",
    videoPath:
      "/Sarvam_vid1.mp4",
    thumbnailPath: "",
      software: [
      "Clipchamp",
      "Audio Editing",
      "Dynamic Subtitling"
    ],
    description:
      "Edited a 25-minute educational presentation into a concise 45-second highlight video, combining custom music, dynamic pacing, and a cinematic opening sequence to communicate key product capabilities in an engaging format."
  }
];

export default function VideoPortfolio() {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);

  return (
    <section
      id="video-portfolio"
      className="relative py-32 font-serif"
    >
      {/* Absolute Aesthetic Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-25" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00F0FF]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#5B4DFF]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg border border-[#00F0FF]/20 bg-[#00F0FF]/10">
              <Clapperboard className="w-4 h-4 text-[#00F0FF]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              VIDEO EDITING • MOTION DESIGN
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
            Motion Archive
          </h2>
          <p className="text-neutral-400 leading-relaxed max-w-2xl">
            A collection of videos and short-form content created with a focus on
            pacing, storytelling, and visual impact.
          </p>
        </div>

        {/* 3-Tile Horizontal / Vertical Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {VIDEOS_DATA.map((tile, idx) => {

            return (
              <motion.div
                key={tile.id}
                onMouseEnter={() => setActiveTileId(tile.id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="
                  group
                  flex
                  flex-col
                  justify-between
                  bg-[#111116]/40
                  border
                  border-white/[0.05]
                  hover:border-[#00F0FF]/20
                  hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]
                  rounded-2xl
                  p-6
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                {/* Header info bar */}
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3.5 mb-4">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#00F0FF]">
                    PROJECT // 0{idx + 1}
                  </div>
                  <div className="w-6" />
                </div>
                
                {/* Video Viewport */}
                <div
                  className="
                  overflow-hidden
                  rounded-xl
                  border border-white/[0.05]
                  bg-black
                  shadow-[0_0_30px_rgba(0,0,0,0.5)]
                  "
                >
                  {/* Preview Video */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#00F0FF]">
                      PROJECT 0{idx + 1}
                    </div>

                    <div
                      className="
                      px-3
                      py-1
                      rounded-full
                      border border-[#00F0FF]/15
                      bg-[#00F0FF]/5
                      text-[9px]
                      font-mono
                      uppercase
                      tracking-[0.2em]
                      text-[#00F0FF]
                      "
                    >
                      LIVE PREVIEW
                    </div>
                  </div>

                  {/* Video Player */}
                  <div className="aspect-video">
                    <ReactPlayer
                      src={tile.videoPath}
                      controls
                      width="100%"
                      height="100%"
                      style={{
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-5">

                  <span className="text-[10px] text-neutral-500 uppercase tracking-[0.25em]">
                    {tile.client}
                  </span>

                  <h3 className="mt-2 text-xl sm:text-2xl text-white tracking-wide font-normal group-hover:text-[#00F0FF] transition-colors">
                    {tile.title}
                  </h3>

                  <p className="mt-4 text-xs text-neutral-400 leading-relaxed font-light">
                    {tile.description}
                  </p>

                  {/* Software Used */}
                  <div className="mt-6 flex flex-wrap gap-2">

                    {tile.software.map((software) => (

                      <div
                        key={software}
                        className="
                        px-3
                        py-2
                        rounded-lg
                        border border-white/[0.06]
                        bg-black/30
                        text-[9px]
                        tracking-[0.15em]
                        uppercase
                        text-neutral-300
                        hover:border-[#00F0FF]/20
                        transition-colors
                        "
                      >
                        {software}
                      </div>

                    ))}

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}