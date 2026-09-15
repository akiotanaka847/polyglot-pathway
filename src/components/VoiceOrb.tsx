interface VoiceOrbProps {
  mode: 'idle' | 'speaking' | 'listening' | 'thinking';
  hue: number;
  onClick?: () => void;
  label?: string;
}

export default function VoiceOrb({ mode, hue, onClick, label }: VoiceOrbProps) {
  const ringScale = mode === 'listening' ? 'scale-110' : mode === 'speaking' ? 'scale-105' : 'scale-100';
  const speed = mode === 'listening' ? '1.1s' : mode === 'speaking' ? '1.8s' : '4s';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="relative flex items-center justify-center w-[220px] h-[220px] mx-auto select-none"
    >
      {/* outer halos */}
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className={`absolute rounded-full transition-transform duration-700 ${ringScale}`}
          style={{
            width: `${140 + i * 30}px`,
            height: `${140 + i * 30}px`,
            background: `radial-gradient(circle, hsl(${hue} 85% 62% / ${0.22 - i * 0.06}) 0%, transparent 70%)`,
            animation: `orb-pulse ${speed} ease-in-out ${i * 0.18}s infinite`,
          }}
        />
      ))}

      {/* core */}
      <span
        className={`relative rounded-full transition-transform duration-500 ${ringScale}`}
        style={{
          width: '124px',
          height: '124px',
          background: `radial-gradient(circle at 32% 28%, hsl(${hue} 95% 78%), hsl(${(hue + 45) % 360} 85% 55%) 55%, hsl(${(hue + 300) % 360} 70% 38%))`,
          boxShadow: `0 0 60px hsl(${hue} 85% 55% / 0.55), inset -10px -14px 30px hsl(${hue} 60% 25% / 0.55)`,
          animation: `orb-breathe ${speed} ease-in-out infinite`,
        }}
      />

      {/* mic / speaker glyph */}
      <span className="absolute text-2xl" aria-hidden>
        {mode === 'listening' ? '🎤' : mode === 'speaking' ? '🔊' : mode === 'thinking' ? '…' : '💬'}
      </span>

      <style>{`
        @keyframes orb-pulse { 0%,100% { opacity: .55; transform: scale(.95);} 50% { opacity: 1; transform: scale(1.08);} }
        @keyframes orb-breathe { 0%,100% { transform: scale(1);} 50% { transform: scale(1.05);} }
      `}</style>
    </button>
  );
}
