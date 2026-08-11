export interface Project {
  id: string;
  exhibit: string;
  name: string;
  description: string;
  stack: string[];
  github: string;
  live?: string;
  colosseum?: string;
  image?: string;
  status: 'SHIPPED' | 'ARCHIVED' | 'IN PROGRESS';
  won?: string;
}

export const projects: Project[] = [
  {
    id: 'forge',
    exhibit: 'EXHIBIT A',
    name: 'Forge',
    description: 'A decentralised, trustless freelance marketplace on Solana. Every payment is governed by a smart contract escrow. Every reputation is permanently minted on-chain as a Soulbound Token. Developer skills are verified through AI-powered GitHub attestation — not self-reported claims. Clients hire based on cryptographically verified code history, not keywords.',
    stack: ['Anchor', 'Next.js 15', 'Solana', 'Rust', 'Groq LLaMA-3.3', 'TypeScript'],
    github: 'https://github.com/SamuelOluwayomi/Forge-V1',
    live: 'https://forge-frontier.vercel.app/',
    colosseum: 'https://colosseum.com/arena/projects/explore/forge-2',
    image: '/forge.png',
    status: 'SHIPPED',
  },
  {
    id: 'sentry',
    exhibit: 'EXHIBIT B',
    name: 'Sentry',
    description: 'A full-stack Solana transaction operations system. Streams live network state via Yellowstone gRPC, constructs and submits Jito-powered mainnet transactions, and tracks each submission through its full commitment lifecycle — Processed, Confirmed, Finalised. An autonomous AI agent makes real-time tip adjustment, retry, and hold decisions based on observed network risk.',
    stack: ['Rust', 'Next.js 15', 'Yellowstone gRPC', 'Jito Bundle API', 'Groq LLaMA-3.3', 'Solana Mainnet'],
    github: 'https://github.com/SamuelOluwayomi/smart-transaction-observatory',
    live: 'https://sentryy.vercel.app/',
    image: '/sentry.png',
    status: 'SHIPPED',
  },
  {
    id: 'hodegos',
    exhibit: 'EXHIBIT C',
    name: 'Hodegos',
    description: 'An AI-powered trading terminal built on Injective. The crypto trading environment is hostile to newcomers. Hodegos removes that barrier — it layers a conversational AI companion on top of a fully functional Injective DEX interface, letting complete beginners learn trading fundamentals, practice without risk, and execute real trades in one product. Spot, Perpetual Futures, Automated Bots, and Forex modes all included.',
    stack: ['Next.js', 'TypeScript', 'Injective SDK', 'Groq API', 'LLaMA-3.3'],
    github: 'https://github.com/SamuelOluwayomi/Hodegos',
    live: 'https://hodegos.vercel.app/',
    image: '/hodegos.png',
    status: 'SHIPPED',
  },
  {
    id: 'cyberschroll',
    exhibit: 'EXHIBIT D',
    name: 'Cyber Scroll',
    description: 'A neon-soaked infinite vertical platformer built for the Scrolly x Superteam UK Game Jam. Jump, shoot, and survive the ascent. Boss battles every five levels, four distinct characters with unique stats, crypto-themed power-ups — BITs, BYTES, CORES, the SOL orb. Meta-progression via a Bit Shop. Solana wallet integration included. Won $500 as one of ten selected winners.',
    stack: ['Next.js', 'React', 'TypeScript', 'Solana Web3.js', 'Canvas API'],
    github: 'https://github.com/SamuelOluwayomi/Cyber-Scroll',
    live: 'https://cyber-scroll.vercel.app/',
    image: '/cyber-scroll.png',
    status: 'SHIPPED',
    won: '$500 — Scrolly x Superteam UK Game Jam',
  },
  {
    id: 'cadpay-fairscore',
    exhibit: 'EXHIBIT E',
    name: 'CadPay FairScore',
    description: 'CadPay extended with FairScale reputation scoring for Sybil resistance on Solana. Only wallets with a FairScore above 40 can access the faucet. Merchants can gate services by minimum trust score. Savings pot behaviour earns additional reputation points on-chain. Combines passkey wallets, gasless transactions, and onchain reputation into one cohesive application.',
    stack: ['Next.js 16', 'Solana', 'FairScale API', 'Lazorkit SDK', 'USDC', 'Framer Motion'],
    github: 'https://github.com/SamuelOluwayomi/CadPay-FairScore-Powered',
    live: 'https://cadpayfairscore.vercel.app/',
    image: '/cadpay-fairscore.png',
    status: 'SHIPPED',
    won: 'Special Mention — FairScale Solana Build Bounty',
  },
  {
    id: 'cadpay',
    exhibit: 'EXHIBIT F',
    name: 'CadPay',
    description: 'A subscription payment platform on Solana using Lazorkit Account Abstraction. Users create wallets with biometrics — no seed phrases. Subscribe to Netflix, Spotify, and other services. Pay with zero gas fees via the Paymaster. Includes savings pots with time-locked USDC vaults, Jupiter DEX integration for auto-swapping, and a merchant dashboard with live analytics.',
    stack: ['Next.js 16', 'Solana', 'Lazorkit SDK', 'Jupiter Aggregator', 'USDC', 'Anchor'],
    github: 'https://github.com/SamuelOluwayomi/solana-subscriptions-starter',
    live: 'https://cadpay.vercel.app/',
    image: '/cadpay.png',
    status: 'SHIPPED',
  },
  {
    id: 'injective',
    exhibit: 'EXHIBIT G',
    name: 'Injective Overview',
    description: 'A lightweight React-based educational site explaining the Injective ecosystem — what it is, what it was built for, and how it fits into the broader Web3 and DeFi landscape. Built to be beginner-friendly and visual. The first bounty win. Where the journey on-chain began.',
    stack: ['React', 'JavaScript', 'CSS'],
    github: 'https://github.com/SamuelOluwayomi/Injective-hackathon',
    live: 'https://injective-hackathon.vercel.app/',
    image: '/injective.png',
    status: 'SHIPPED',
    won: 'Win — Injective UI Bounty, Ninja Labs',
  },
  {
    id: 'anchor-pinocchio',
    exhibit: 'EXHIBIT H',
    name: 'Anchor Pinocchio Security',
    description: 'An educational Solana security reference repository. Each example pairs a deliberately broken instruction with its fixed counterpart, with inline comments explaining the vulnerability and the correct approach. Covers missing account validation, authority checks, unsafe arithmetic, and CPI re-entrancy risk — the mistakes that actually cause exploits.',
    stack: ['Rust', 'Anchor', 'Pinocchio', 'Solana'],
    github: 'https://github.com/SamuelOluwayomi/Anchor-Pinocchio-Security-Template',
    image: '/sentry.png',
    status: 'SHIPPED',
  },
  {
    id: 'ledger-agent',
    exhibit: 'EXHIBIT I',
    name: 'Ledger Solana Agent',
    description: 'An AI agent integrated with the Ledger hardware signing stack. The agent assembles a transaction, routes it through a Ledger device for hardware-enforced review and signing, then broadcasts to Solana. Hardware-in-the-loop as a root of trust for autonomous agents handling real value. One of the first 50 valid submissions globally.',
    stack: ['TypeScript', 'Ledger DMK', 'Ledger Wallet CLI', 'Solana', 'Node.js'],
    github: 'https://github.com/SamuelOluwayomi/Ledger-solana-agent',
    image: '/sentry.png',
    status: 'SHIPPED',
    won: '$100 — Ledger N3XT Build and Show',
  },
  {
    id: 'solana-ops-skill',
    exhibit: 'EXHIBIT J',
    name: 'Solana Ops Skill',
    description: 'A contributed AI skill for the Solana AI Kit — a production-ready Claude Code configuration that turns coding agents into expert Solana builders. The ops skill covers Solana transaction infrastructure operations: bundle submission, lifecycle tracking, tip strategy, and failure classification for agents building onchain.',
    stack: ['Markdown', 'SKILL.md architecture', 'Solana tooling'],
    github: 'https://github.com/SamuelOluwayomi/solana-ops-skill',
    status: 'SHIPPED',
  },
  {
    id: 'tunnel-autocare',
    exhibit: 'EXHIBIT K',
    name: 'Tunnel Auto Care',
    description: 'A Django-based website built for a local auto repair shop. The very first real project — no bounty, no prize, no deadline. Just the first thing that got finished. It is archived now, but this is where the practice of shipping began.',
    stack: ['Python', 'Django', 'HTML', 'CSS'],
    github: 'https://github.com/SamuelOluwayomi/tunnelautocare',
    image: '/defi1.jpg',
    status: 'ARCHIVED',
  },
];
