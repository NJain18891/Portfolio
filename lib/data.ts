import { ProjectSpec, CalendarSlot } from '@/types';

export const PROJECTS_DATA: ProjectSpec[] = [
  {
    title: 'VANGUARD ASTRO',
    shortDesc: 'Orbital performance telemetry system tracing deep-space communication node performance metrics.',
    tagline: 'HIGH-FREQUENCY TELEMETRY ENGINE',
    stack: ['Next.js 15', 'WebSockets', 'Rust WASM', 'gRPC-Web', 'Three.js'],
    architecture: 'Distributed telemetry node cluster streaming 12.8M msgs/sec with edge computing offsets.',
    metrics: [
      { label: 'Ingestion Latency', value: '<1.4ms' },
      { label: 'CPU Allocation', value: '12% load' },
      { label: 'Network Uptime', value: '99.9997%' },
      { label: 'Buffer Cache Size', value: '256MB raw' }
    ],
    highlight: 'Redesigned NASA-grade telemetric protocols, shaving 40% bytes-on-wire overhead and introducing zero-allocation binary serialization arrays.'
  },
  {
    title: 'APEX AGGREGATES',
    shortDesc: 'Dense machine learning data ingestion interface presenting streaming multi-threaded pipeline threads.',
    tagline: 'MULTI-PARTITION INGESTION LAYER',
    stack: ['Go Engine', 'Drizzle ORM', 'PostgreSQL', 'Tailwind v4', 'Apache Kafka'],
    architecture: 'Log-structured partition layout using lock-free data rings for parallelized ingestion cycles.',
    metrics: [
      { label: 'Log Throughput', value: '850k ops/sec' },
      { label: 'System Queue Lag', value: '0ms' },
      { label: 'Index Cardinality', value: 'Ultra-High' },
      { label: 'Gzip Compression Ratio', value: '4.2x' }
    ],
    highlight: 'Developed low-level lock-free memory rings for real-time thread safety, bypassing standard JavaScript GC cycles entirely.'
  },
  {
    title: 'ZORA MARKETPLACE',
    shortDesc: 'Sovereign liquidity exchange system with a dynamic transaction ledger tracking coordinate-guided vectors.',
    tagline: 'COORDINATE-GUIDED LIQUIDITY VECTOR',
    stack: ['React Router', 'Ethers.js', 'D3.js', 'Framer Motion', 'Solidity'],
    architecture: 'Decentralized automated market maker using high-precision coordinate price tracking curves.',
    metrics: [
      { label: 'Gas Optimization', value: '34% saved' },
      { label: 'Block Resolution Delay', value: '<12s' },
      { label: 'Simulated Volume', value: '$4.2M/day' },
      { label: 'Max Slippage Margin', value: '0.05%' }
    ],
    highlight: 'Recomputed liquidity distribution vectors inside highly optimized WebGL grids, speeding up interaction loops into perfect 120 FPS render frames.'
  },
  {
    title: 'ORIA WELLNESS',
    shortDesc: 'High-end mental health design ecosystem designed around kinetic breathing cycles and organic patterns.',
    tagline: 'PSYCHO-KINETIC BIO-SYSTEM',
    stack: ['Next.js', 'Framer Motion', 'Web Audio API', 'Tailwind CSS', 'Tailwind Animate'],
    architecture: 'Procedural layout engines synchronized with user breath feedback loops utilizing biometric feeds.',
    metrics: [
      { label: 'Initial Fluid Load Speed', value: '0.3s' },
      { label: 'Core Web Vitals Index', value: '100/100' },
      { label: 'Aesthetic Frame Drops', value: '0 absolute' },
      { label: 'Active Rendering Rate', value: '120Hz native' }
    ],
    highlight: 'Assembled kinetic responsive breathing timers that anchor psychological flow via soft-toned sine waves synthesized raw inside client Web Audio nodes.'
  }
];

export const JUNI_CALENDAR_SLOTS: CalendarSlot[] = [
  { date: 15, available: true },
  { date: 16, available: true },
  { date: 17, available: true },
  { date: 18, available: true },
  { date: 19, available: false },
  { date: 20, available: false },
  { date: 21, available: false },
  { date: 22, available: true },
  { date: 23, available: true },
  { date: 24, available: true },
  { date: 25, available: true },
  { date: 26, available: false },
  { date: 27, available: false },
  { date: 28, available: false }
];
