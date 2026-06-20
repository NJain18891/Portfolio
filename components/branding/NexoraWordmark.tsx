'use client';

export default function NexoraWordmark() {
  return (
    <div className="flex flex-col justify-center">
      <svg
        viewBox="0 0 760 88"
        className="h-[31px] w-[225px] overflow-visible sm:h-[41px] sm:w-[295px] lg:h-[47px] lg:w-[340px]"
        fill="none"
        role="img"
        aria-label="Nexora"
      >
        <defs>
          <linearGradient id="nexoraSilver" x1="0" x2="0" y1="6" y2="76" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="46%" stopColor="#F7F8FB" />
            <stop offset="78%" stopColor="#D4D7E1" />
            <stop offset="100%" stopColor="#F9FAFF" />
          </linearGradient>
          <linearGradient id="nexoraSilverReflection" x1="0" x2="760" y1="76" y2="76" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#BFAEFF" />
            <stop offset="34%" stopColor="#F8FAFF" stopOpacity="0.18" />
            <stop offset="64%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E4E8F3" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="nexoraXGradient" x1="260" x2="388" y1="6" y2="78" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="48%" stopColor="#00B8FF" />
            <stop offset="52%" stopColor="#FF2EFF" />
            <stop offset="100%" stopColor="#8E2BFF" />
          </linearGradient>
          <linearGradient id="nexoraXCore" x1="292" x2="354" y1="20" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#35FAFF" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FF44FF" />
          </linearGradient>
          <filter id="nexoraWordGlow" x="-4%" y="-20%" width="108%" height="140%">
            <feGaussianBlur stdDeviation="1.15" result="softGlow" />
            <feColorMatrix
              in="softGlow"
              result="coloredGlow"
              type="matrix"
              values="0 0 0 0 0.65  0 0 0 0 0.78  0 0 0 0 1  0 0 0 0.46 0"
            />
            <feMerge>
              <feMergeNode in="coloredGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nexoraDotGlow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="1.4" result="dotGlow" />
            <feMerge>
              <feMergeNode in="dotGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="nexoraLowerReflection">
            <rect x="0" y="58" width="760" height="22" rx="3" />
          </clipPath>
        </defs>

        <g filter="url(#nexoraWordGlow)">
          <path
            d="M6 75V9H23L96 54V9H115V75H98L25 30V75H6Z"
            fill="url(#nexoraSilver)"
          />

          <path
            d="M145 9H256V26H167V36H247V52H167V58H258V75H145V9Z"
            fill="url(#nexoraSilver)"
          />

          <g>
            <path d="M284 7H321L347 33L334 46L284 7Z" fill="#00F0FF" />
            <path d="M284 75L334 36L349 49L321 75H284Z" fill="#00B8FF" />
            <path d="M356 7H393L343 46L329 33L356 7Z" fill="#FF2EFF" />
            <path d="M343 49L356 36L393 75H356L343 49Z" fill="#8E2BFF" />
            <path d="M327 31L350 48L336 61L313 44L327 31Z" fill="url(#nexoraXCore)" opacity="0.78" />
          </g>

          <path
            d="M440 9H513C531 9 544 22 544 40V44C544 62 531 75 513 75H440C422 75 409 62 409 44V40C409 22 422 9 440 9ZM444 27C435 27 430 32 430 40V44C430 52 435 57 444 57H509C518 57 523 52 523 44V40C523 32 518 27 509 27H444Z"
            fill="url(#nexoraSilver)"
          />

          <path
            d="M575 9H655C672 9 683 19 683 35C683 48 675 58 662 61L683 75H652L634 62H597V75H575V9ZM597 27V45H650C657 45 661 42 661 36C661 30 657 27 650 27H597Z"
            fill="url(#nexoraSilver)"
          />

          <path
            d="M694 75L728 9H748L759 75H738L735 62H711L704 75H694ZM719 45H733L727 27L719 45Z"
            fill="url(#nexoraSilver)"
          />
          <circle cx="745" cy="66" r="5.6" fill="#FF2EFF" filter="url(#nexoraDotGlow)" />
        </g>

        <g clipPath="url(#nexoraLowerReflection)" opacity="0.36">
          <path d="M6 75V9H23L96 54V9H115V75H98L25 30V75H6Z" fill="url(#nexoraSilverReflection)" />
          <path d="M145 9H256V26H167V36H247V52H167V58H258V75H145V9Z" fill="url(#nexoraSilverReflection)" />
          <path d="M440 9H513C531 9 544 22 544 40V44C544 62 531 75 513 75H440C422 75 409 62 409 44V40C409 22 422 9 440 9ZM444 27C435 27 430 32 430 40V44C430 52 435 57 444 57H509C518 57 523 52 523 44V40C523 32 518 27 509 27H444Z" fill="url(#nexoraSilverReflection)" />
          <path d="M575 9H655C672 9 683 19 683 35C683 48 675 58 662 61L683 75H652L634 62H597V75H575V9ZM597 27V45H650C657 45 661 42 661 36C661 30 657 27 650 27H597Z" fill="url(#nexoraSilverReflection)" />
          <path d="M694 75L728 9H748L759 75H738L735 62H711L704 75H694ZM719 45H733L727 27L719 45Z" fill="url(#nexoraSilverReflection)" />
        </g>
      </svg>

      <div className="mt-1.5 flex w-[225px] items-center gap-2 sm:w-[295px] lg:w-[340px]">
        <span className="h-px w-7 shrink-0 bg-[#00F0FF] shadow-[0_0_6px_rgba(0,240,255,.72)] sm:w-9" />
        <p className="min-w-0 flex-1 whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#FF2EFF] bg-clip-text text-center font-mono text-[7px] font-bold uppercase tracking-[0.55em] text-transparent sm:text-[8px]">
          THE CENTRAL CREATIVE NEXUS
        </p>
        <span className="h-px w-7 shrink-0 bg-[#FF2EFF] shadow-[0_0_6px_rgba(255,46,255,.72)] sm:w-9" />
      </div>
    </div>
  );
}
