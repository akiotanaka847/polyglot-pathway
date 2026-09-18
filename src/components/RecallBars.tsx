interface RecallBarsProps {
  bars: 0 | 1 | 2 | 3;
  className?: string;
}

// Three bars summarise repeated retrieval over time.
// Three bars require correct recall on different days.
export default function RecallBars({ bars, className = '' }: RecallBarsProps) {
  return (
    <span className={`inline-flex items-end gap-[2px] align-middle ${className}`} aria-label={`Memoria ${bars}/3`}>
      {[1, 2, 3].map(i => (
        <span
          key={i}
          className={`w-[3px] rounded-sm transition-all ${bars >= i ? 'bg-success' : 'bg-border'}`}
          style={{ height: `${5 + i * 3}px` }}
        />
      ))}
    </span>
  );
}
