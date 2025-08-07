interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 32, height = 32 }: LogoProps) {
  return (
    <svg 
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#10b981", stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: "#059669", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#047857", stopOpacity: 1}} />
        </linearGradient>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "#0f172a", stopOpacity: 1}} />
          <stop offset="50%" style={{stopColor: "#1e40af", stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: "#7c3aed", stopOpacity: 1}} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="drop-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.25"/>
        </filter>
      </defs>
      
      {/* Background with shadow */}
      <rect width="32" height="32" rx="6" fill="url(#bgGradient)" filter="url(#drop-shadow)" />
      
      {/* Shield shape */}
      <path d="M16 4 L24 8 L24 16 Q24 22 16 26 Q8 22 8 16 L8 8 Z" 
            fill="url(#shieldGradient)" 
            filter="url(#glow)" 
            stroke="#10b981" 
            strokeWidth="0.5" />
      
      {/* AI Circuit pattern */}
      <g stroke="#34d399" strokeWidth="1" fill="none" opacity="0.7">
        <circle cx="16" cy="12" r="1.5" fill="#34d399" />
        <circle cx="12" cy="16" r="1" fill="#34d399" />
        <circle cx="20" cy="16" r="1" fill="#34d399" />
        <circle cx="16" cy="20" r="1" fill="#34d399" />
        
        {/* Connection lines */}
        <line x1="16" y1="12" x2="12" y2="16" />
        <line x1="16" y1="12" x2="20" y2="16" />
        <line x1="12" y1="16" x2="16" y2="20" />
        <line x1="20" y1="16" x2="16" y2="20" />
      </g>
      
      {/* Checkmark */}
      <path d="M12 16 L15 19 L20 12" 
            stroke="#ffffff" 
            strokeWidth="2" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" />
    </svg>
  );
}