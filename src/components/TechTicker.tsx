const STACK = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Rust',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg',
  },
  {
    name: 'Solidity',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
  },
  {
    name: 'Django',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'Solana',
    icon: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
  },
  {
    name: 'Supabase',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  },
];

// Duplicate for seamless loop
const ITEMS = [...STACK, ...STACK];

export function TechTicker() {
  return (
    <div className="tech-ticker" aria-label="Tech stack">
      <div className="tech-ticker__label" aria-hidden="true">
        // TOOLS OF THE TRADE
      </div>

      <div className="tech-ticker__track-wrap">
        {/* Fade edges */}
        <div className="tech-ticker__fade tech-ticker__fade--left" />
        <div className="tech-ticker__fade tech-ticker__fade--right" />

        <div className="tech-ticker__track">
          {ITEMS.map((tech, i) => (
            <div className="tech-ticker__item" key={`${tech.name}-${i}`}>
              <img
                src={tech.icon}
                alt={tech.name}
                className="tech-ticker__logo"
                loading="lazy"
              />
              <span className="tech-ticker__name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
