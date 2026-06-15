'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Check, 
  Copy, 
  ArrowUpRight, 
  AlertCircle, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { JUNI_CALENDAR_SLOTS } from '@/lib/data';

interface StudioBookingDeskProps {
  onSuccessNotification: (msg: string) => void;
  userEmail: string;
}

export default function StudioBookingDesk({
  onSuccessNotification,
  userEmail,
}: StudioBookingDeskProps) {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [clientName, setClientName] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('Interactive Prototype');
  const [clientNote, setClientNote] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      setLocalError('Please select an available calendar slot.');
      setTimeout(() => setLocalError(null), 3500);
      return;
    }
    if (!clientName.trim()) {
      setLocalError('Please enter your name or company reference.');
      setTimeout(() => setLocalError(null), 3500);
      return;
    }

    setLocalError(null);
    onSuccessNotification(
      `Reservation requested for June ${selectedDate}, 2026. Nikhil will contact you within 4 hours.`
    );

    // Clear state
    setClientName('');
    setClientNote('');
    setSelectedDate(null);
  };

  return (
    <div className="w-full bg-[#060608] relative z-30 pt-24 border-t border-white/[0.04]">
      <section 
        id="booking-desk" 
        className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 relative"
      >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-emerald-400 uppercase">
            {"// STUDIO CONTRACT BOOKING"}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
            Have a prototype or design you need brought to life?
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-light">
            Integrate with high-precision engineering workflows. Secure your studio development reservation or get directly in touch for urgent consulting.
          </p>

          <div className="pt-6">
            <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
              DIRECT INTAKE PORTAL
            </p>
            
            {/* Copyable direct email component */}
            <div 
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-between border border-white/[0.06] hover:border-emerald-500/30 bg-white/[0.01] hover:bg-emerald-500/[0.02] p-4 rounded-lg w-full max-w-sm cursor-pointer transition-all duration-300 group"
              id="copy-email-dashboard-pill"
              role="button"
              tabIndex={0}
              aria-label="Copy direct contact email address"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCopyEmail();
                }
              }}
            >
              <div className="flex items-center gap-3">
                <span className="p-2 border border-white/10 rounded bg-[#09090D] group-hover:border-emerald-500/30 transition-colors">
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400 animate-scale" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#9CA3AF] group-hover:text-emerald-400 transition-colors" />
                  )}
                </span>
                <div>
                  <div className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">EMAIL ADDRESS</div>
                  <div className="text-sm font-mono text-white tracking-wider mt-0.5">{userEmail}</div>
                </div>
              </div>
              <div className="font-mono text-[9px] text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-widest select-none">
                {copiedEmail ? 'Copied' : 'Copy'}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#09090D] border border-white/[0.05] p-6 sm:p-10 rounded-2xl relative shadow-2xl">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500 animate-pulse" />
            <span className="font-mono text-[8px] text-emerald-400 tracking-widest">BOOKER V3.2 ONLINE</span>
          </div>

          <form onSubmit={handleReserve} className="space-y-8">
            
            {/* Calendar Grid Integration */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#E5E7EB] uppercase">
                  SELECT JUNE 2026 SLOT
                </span>
                <span className="font-mono text-[10px] text-neutral-500">
                  JUNE 2026 {"//"} EST
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center">
                {/* Calendar Headers */}
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, hIdx) => (
                  <div key={hIdx} className="font-mono text-[9px] text-neutral-600 uppercase font-bold py-1 select-none">
                    {day}
                  </div>
                ))}

                {/* Calendar Slots */}
                {JUNI_CALENDAR_SLOTS.map((item) => {
                  const isSelected = selectedDate === item.date;
                  if (!item.available) {
                    return (
                      <div 
                        key={item.date} 
                        className="border border-white/[0.02] bg-[#050508] p-3 rounded text-[#374151] font-mono text-xs flex flex-col items-center justify-center relative group select-none h-12"
                      >
                        <span className="opacity-40">{item.date}</span>
                        <Lock className="w-2.5 h-2.5 text-[#EF4444]/20 absolute bottom-1 cursor-not-allowed" />
                      </div>
                    );
                  }
                  return (
                    <button
                      type="button"
                      key={item.date}
                      onClick={() => setSelectedDate(item.date)}
                      className={`border rounded p-3 h-12 font-mono text-xs flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                        isSelected 
                          ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold scale-[1.03] z-10 glow-emerald' 
                          : 'border-white/[0.05] hover:border-emerald-500/30 text-[#D1D5DB] hover:text-white'
                      }`}
                    >
                      <span>{item.date}</span>
                      <span className={`w-1/2 h-[2px] rounded-full absolute bottom-1.5 ${
                        isSelected ? 'bg-emerald-400' : 'bg-emerald-500/40'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error notifications */}
            <AnimatePresence>
              {localError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs px-4 py-3 rounded flex items-center gap-2 font-mono"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{localError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Project details fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  YOUR NAME OR ORG
                </label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="E.g., Founders, VCs"
                  className="w-full bg-black/40 border border-white/[0.05] focus:border-emerald-500/60 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F3F4F6] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  PROJECT CORE CATEGORY
                </label>
                <select 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-black/40 border border-white/[0.05] focus:border-emerald-500/60 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F2F3F5] transition-colors cursor-pointer appearance-none"
                >
                  <option className="bg-[#09090D]" value="Interactive Prototype">Interactive Prototype</option>
                  <option className="bg-[#09090D]" value="SaaS Interface">SaaS Interface</option>
                  <option className="bg-[#09090D]" value="Full-Stack MVP">Full-Stack MVP</option>
                  <option className="bg-[#09090D]" value="Design & Consulting">Design &amp; Consulting</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                PROJECT SCOPE DETAILS (OPTIONAL)
              </label>
              <textarea 
                rows={3}
                value={clientNote}
                onChange={(e) => setClientNote(e.target.value)}
                placeholder="Outline the interface constraints and performance goals."
                className="w-full bg-black/40 border border-white/[0.05] focus:border-emerald-500/60 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F3F4F6] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#060608] hover:text-black bg-emerald-400 hover:bg-emerald-300 py-3.5 px-6 rounded-lg transition-all cursor-pointer font-bold uppercase shadow-lg shadow-emerald-500/10"
              >
                SEND RESERVATION REQUEST <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  </div>
  );
}
