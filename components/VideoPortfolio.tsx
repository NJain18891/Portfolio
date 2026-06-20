'use client';

import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Film, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface VideoTile {
  id: string;
  title: string;
  client: string;
  role: string;
  duration: string;
  resolution: string;
  fps: string;
  codec: string;
  colorSpace: string;
  videoUrl: string;
  tags: string[];
  description: string;
}

const VIDEOS_DATA: VideoTile[] = [
  {
    id: "neon-cyberpunk",
    title: "NEON CHROMATICS EX-01",
    client: "SYNTHESIS MEDIA",
    role: "Lead Editor & Colorist",
    duration: "45",
    resolution: "4K DCI (3840x2160)",
    fps: "23.976 fps",
    codec: "ProRes 422 HQ",
    colorSpace: "Rec. 2020",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-and-people-41743-large.mp4",
    tags: ["Color Grading", "Cinematic Cut", "Sfx Design"],
    description: "Multi-layered neon frequency composite tracking with synchronized sub-bass cues. Features detailed speed-ramping and high-contrast color treatment."
  },
  {
    id: "urban-matrix",
    title: "METROPOLIS MATRIX TR-02",
    client: "VERTEX CORP",
    role: "VFX & Principal Editor",
    duration: "62",
    resolution: "CinemaScope (4320x1800)",
    fps: "24.000 fps",
    codec: "REDCODE RAW",
    colorSpace: "REDWideGamut",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-urban-city-street-at-night-42295-large.mp4",
    tags: ["Visual Effects", "Matchmoving", "Compositing"],
    description: "Anamorphic urban cityscape sequence detailing night activity. Custom spatial stabilization and high-threshold bloom passes."
  },
  {
    id: "building-architect",
    title: "KINETIC GLOW STR-03",
    client: "LUMEN STUDIOS",
    role: "Creative Director",
    duration: "30",
    resolution: "4K UHD (3840x2160)",
    fps: "59.940 fps",
    codec: "DNxHR HQX",
    colorSpace: "S-Gamut3",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-building-at-night-42289-large.mp4",
    tags: ["Sound Sync", "Motion Design", "HDR Finishing"],
    description: "Ultraviolet architectural showcase with automated luminance tracking. Programmatic visual pulses matching the tech soundscape."
  }
];

export default function VideoPortfolio() {
  const [activeTileId, setActiveTileId] = useState<string | null>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [mutedId, setMutedId] = useState<string | null>('all'); // default muted for clean auto-interaction

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Pause other playing videos
      Object.keys(videoRefs.current).forEach(key => {
        if (key !== id && videoRefs.current[key]) {
          videoRefs.current[key]?.pause();
        }
      });
      video.play().catch(err => console.log("Autoplay restrictions: ", err));
      setPlayingId(id);
    }
  };

  const toggleMute = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    video.muted = !video.muted;
    if (video.muted) {
      setMutedId(id);
    } else {
      setMutedId(null);
    }
  };

  return (
    <section 
      id="video-portfolio" 
      className="w-full relative py-28 bg-[#09090D] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Absolute Aesthetic Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-25" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-emerald-950/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded font-mono text-[9px] tracking-widest text-[#10B981] font-semibold uppercase">
              <Film className="w-3.5 h-3.5" />
              <span>[ VIDEOGRAPHY & SHOWCASE ]</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] font-light">
              Visual Narrative <span className="italic text-emerald-400 font-normal">& Motion Design</span>
            </h2>
          </div>
        </div>

        {/* 3-Tile Horizontal / Vertical Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {VIDEOS_DATA.map((tile, idx) => {
            const isPlaying = playingId === tile.id;
            const isMuted = mutedId === tile.id || mutedId === 'all';
            const isHovered = activeTileId === tile.id;

            return (
              <motion.div
                key={tile.id}
                onMouseEnter={() => setActiveTileId(tile.id)}
                onMouseLeave={() => setActiveTileId(null)}
                className="group flex flex-col justify-between bg-[#13131A] border border-white/[0.06] hover:border-[#10B981]/30 rounded-2xl p-5 transition-all duration-300 relative overflow-hidden flex-grow"
              >
                {/* Header info bar */}
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-3.5 mb-4">
                  <div className="font-mono text-[10px] text-emerald-400 font-bold tracking-wider">
                    PROJECT // 0{idx + 1}
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500">{tile.duration}s</span>
                </div>

                {/* Video Viewport */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black/95 group/player border border-white/[0.04]">
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[tile.id] = el;
                    }}
                    src={tile.videoUrl}
                    className={`w-full h-full object-cover object-center transition-transform duration-500 ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                    loop
                    muted={isMuted}
                    playsInline
                  />

                  {/* Aesthetic Shadow Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

                  {/* Playback Controls Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-25">
                    <button
                      onClick={() => togglePlay(tile.id)}
                      className="p-3 bg-emerald-500 text-[#060608] hover:scale-110 active:scale-95 rounded-full transition-all duration-200 cursor-pointer shadow-lg outline-none"
                      title={isPlaying ? "Pause Preview" : "Play Preview"}
                    >
                      {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current translate-x-0.5" />}
                    </button>
                    <button
                      onClick={() => toggleMute(tile.id)}
                      className="p-3 bg-black/60 text-white hover:text-emerald-400 hover:scale-110 active:scale-95 rounded-full transition-all duration-200 cursor-pointer shadow-lg outline-none"
                      title={isMuted ? "Unmute Audio" : "Mute Audio"}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mt-5 space-y-2">
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-[0.25em]">
                    {tile.client} {'//'} {tile.role}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white tracking-wide font-normal group-hover:text-emerald-400 transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-light pt-2 line-clamp-3">
                    {tile.description}
                  </p>
                </div>

                {/* Specs and tags footer */}
                <div className="mt-5 pt-4 border-t border-white/[0.04] flex flex-col gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {tile.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-white/[0.02] border border-white/10 font-mono text-[7.5px] text-neutral-400 px-2.5 py-0.5 rounded uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between font-mono text-[8px] text-neutral-500 mt-1 uppercase tracking-wider">
                    <span>FORMAT: {tile.resolution}</span>
                    <span>FPS: {tile.fps.split(' ')[0]}</span>
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

