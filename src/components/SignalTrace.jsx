// The portfolio's signature motif: a thin animated "signal trace" — a nod to
// Rathisri's sensor/embedded-systems work, where a waveform pulses along a
// circuit-style path. Used as a section divider throughout the page.
export default function SignalTrace({ flip = false }) {
  return (
    <div className={`signal-trace ${flip ? 'signal-trace--flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" width="100%" height="60">
        <defs>
          <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-blue)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-violet)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="signal-trace__path"
          d="M0,30 L280,30 L320,10 L360,50 L400,30 L920,30 L960,10 L1000,50 L1040,30 L1200,30"
          fill="none"
        />
        <circle className="signal-trace__pulse" r="4" fill="var(--accent-glow)">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M0,30 L280,30 L320,10 L360,50 L400,30 L920,30 L960,10 L1000,50 L1040,30 L1200,30"
          />
        </circle>
      </svg>
    </div>
  );
}
