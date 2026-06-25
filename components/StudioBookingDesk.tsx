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
  const [clientEmail, setClientEmail] = useState('');
  const [projectType, setProjectType] = useState<string>('Web Design & Development');
  const [timeline, setTimeline] = useState<string>('ASAP');
  const [clientNote, setClientNote] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [localError, setLocalError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleReserve = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!clientName.trim()) {
    setLocalError('Please enter your name or company reference.');
    setTimeout(() => setLocalError(null), 3500);
    return;
  }

  if (!clientEmail.trim()) {
    setLocalError('Please enter an email address.');
    setTimeout(() => setLocalError(null), 3500);
    return;
  }

  if (!/\S+@\S+\.\S+/.test(clientEmail)) {
    setLocalError('Please enter a valid email address.');
    setTimeout(() => setLocalError(null), 3500);
    return;
  }

  if (!clientNote.trim()) {
    setLocalError('Please provide some project details.');
    setTimeout(() => setLocalError(null), 3500);
    return;
  }

  try {
    setIsSending(true);
    setLocalError(null);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: clientName,
        email: clientEmail,
        service: projectType,
        timeline,
        message: clientNote,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send');
    }

    onSuccessNotification(
      'Project enquiry sent successfully. I will get back to you shortly.'
    );

    setClientName('');
    setClientEmail('');
    setClientNote('');
    setProjectType('Web Design & Development');
    setTimeline('ASAP');
  } catch (error) {
    console.error(error);

    setLocalError(
      'Unable to send enquiry. Please try again or contact me directly.'
    );
  } finally {
    setIsSending(false);
  }
};

  return (
    <div className="w-full bg-[#060608] relative z-30 pt-24 border-t border-white/[0.04]">
      <section 
        id="booking-desk" 
        className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32 relative"
      >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <p className="font-mono text-[10px] tracking-[0.3em] text-[#00F0FF] uppercase">
            {"// PROJECT ENQUIRY "}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]">
            Ready to bring your next project to life?
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-light">
            Whether you're launching a new brand, refreshing an existing business, or creating content for your audience, let's discuss how Nexora can help.
          </p>

          <div className="pt-6">
            <p className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase mb-3">
              DIRECT CONTACT
            </p>
            <p className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase mb-3">
              Typically replies within 24 hours
            </p>
            
            {/* Copyable direct email component */}
            <div 
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-between border border-white/[0.06] hover:border-[#00F0FF]/20 bg-white/[0.01] hover:bg-[#00F0FF] p-4 rounded-lg w-full max-w-sm cursor-pointer transition-all duration-300 group"
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
                <span className="p-2 border border-white/10 rounded bg-[#09090D] group-hover:border-[#00F0FF]/20 transition-colors">
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#00F0FF] animate-scale" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#00F0FF] transition-colors" />
                  )}
                </span>
                <div>
                  <div className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">EMAIL ADDRESS</div>
                  <div className="text-sm font-mono text-white tracking-wider mt-0.5">{userEmail}</div>
                </div>
              </div>
              <div className="font-mono text-[9px] text-[#00F0FF] opacity-0 group-hover:opacity-100 transition-all duration-300 uppercase tracking-widest select-none">
                {copiedEmail ? 'Copied' : 'Copy'}
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <Check className="w-4 h-4 text-[#00F0FF]" />
              Responsive Website Design
            </div>

            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <Check className="w-4 h-4 text-[#00F0FF]" />
              Brand Identity & Logos
            </div>

            <div className="flex items-center gap-3 text-neutral-300 text-sm">
              <Check className="w-4 h-4 text-[#00F0FF]" />
              Short-Form Video Editing
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(0,240,255,0.06),transparent_50%)] before:pointer-events-none before:rounded-2xl bg-[#09090D] border border-white/[0.05] p-6 sm:p-10 rounded-2xl relative shadow-2xl">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] border border-emerald-500 animate-pulse" />
            <span className="font-mono text-[12px] text-[#00F0FF] tracking-widest"> NEXORA CLIENT PORTAL </span>
          </div>

          <form onSubmit={handleReserve} className="space-y-8">
            <div className="flex flex-wrap gap-3">
              {[
                'Web Design & Development',
                'Logo Design',
                'Video Editing',
              ].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setProjectType(service)}
                  className={`
                    px-4 py-2
                    rounded-full
                    border
                    text-xs
                    font-mono
                    tracking-[0.2em]
                    uppercase
                    transition-all

                    ${
                      projectType === service
                        ? 'border-[#00F0FF]/40 bg-[#00F0FF]/10 text-[#00F0FF]'
                        : 'border-white/[0.08] bg-white/[0.02] text-neutral-400 hover:border-[#00F0FF]/20 hover:text-[#00F0FF]'
                    }
                  `}
                >
                  {service}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  Name or Business
                </label>
                <input 
                  type="text" 
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="E.g., Founders, VCs"
                  className="w-full bg-black/40 border border-white/[0.05] focus:border-[#00F0FF]/20 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F3F4F6] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="
                  w-full
                  bg-black/40
                  border border-white/[0.05]
                  focus:border-[#00F0FF]/20
                  focus:outline-[#059669]/20
                  p-3
                  rounded
                  font-mono
                  text-xs
                  text-[#F3F4F6]
                  transition-colors
                  "
                />
              </div>

              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  Service Required
                </label>
                <select 
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-black/40 border border-white/[0.05] focus:border-[#00F0FF]/20 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F2F3F5] transition-colors cursor-pointer appearance-none"
                >
                  <option className="bg-[#09090D]" value="Web Design & Development">Web Design & Development</option>
                  <option className="bg-[#09090D]" value="Logo Design">Logo Design</option>
                  <option className="bg-[#09090D]" value="Video Editing">Video Editing</option>
                  <option className="bg-[#09090D]" value="Multiple Services">Multiple Services</option>
                  <option className="bg-[#09090D]" value="Not Sure Yet">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                  DESIRED TIMELINE
                </label>
                <select 
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full bg-black/40 border border-white/[0.05] focus:border-[#00F0FF]/20 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F2F3F5] transition-colors cursor-pointer appearance-none"
                >
                  <option className="bg-[#09090D]" value="ASAP">ASAP</option>
                  <option className="bg-[#09090D]" value="1-2 Weeks">1-2 Weeks</option>
                  <option className="bg-[#09090D]" value="Within a month">Within a month</option>
                  <option className="bg-[#09090D]" value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-mono text-[9px] tracking-widest text-[#9CA3AF] uppercase mb-2">
                Tell Me About Your Project
              </label>
              <textarea 
                rows={3}
                value={clientNote}
                onChange={(e) => setClientNote(e.target.value)}
                placeholder="Tell me about your project, goals, audience, and anything you'd like included."
                className="w-full bg-black/40 border border-white/[0.05] focus:border-[#00F0FF]/20 focus:outline-[#059669]/20 p-3 rounded font-mono text-xs text-[#F3F4F6] transition-colors resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-[10px] text-neutral-500 font-mono tracking-wider">
              <Sparkles className="w-3 h-3 text-[#00F0FF]" />
              Typical response time: within 24 hours
            </div>

            {localError && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-3">
                <p className="text-xs text-red-400 font-mono">
                  {localError}
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSending}
                className="
                w-full
                inline-flex
                items-center
                justify-center
                gap-2
                font-mono
                text-[11px]
                tracking-[0.25em]
                text-[#060608]
                hover:text-black
                bg-emerald-400
                hover:bg-emerald-300
                py-3.5
                px-6
                rounded-lg
                transition-all
                cursor-pointer
                font-bold
                uppercase
                shadow-lg
                shadow-emerald-500/10
                disabled:opacity-50
                disabled:cursor-not-allowed
                "
              >
                {isSending ? (
                  'SENDING...'
                ) : (
                  <>
                    SEND PROJECT INQUIRY
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  </div>
  );
}
