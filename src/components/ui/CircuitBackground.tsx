export default function CircuitBackground() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* ── Static grid lines ─────────────────────────────── */}
      {/* Horizontal lines */}
      <line x1="0" y1="112" x2="1440" y2="112" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="0" y1="225" x2="1440" y2="225" stroke="#00d4ff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="0" y1="338" x2="1440" y2="338" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="0" y1="450" x2="1440" y2="450" stroke="#00d4ff" strokeOpacity="0.02" strokeWidth="1" />
      <line x1="0" y1="563" x2="1440" y2="563" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="0" y1="675" x2="1440" y2="675" stroke="#00d4ff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="0" y1="788" x2="1440" y2="788" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />

      {/* Vertical lines */}
      <line x1="120" y1="0" x2="120" y2="900" stroke="#00d4ff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="240" y1="0" x2="240" y2="900" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="360" y1="0" x2="360" y2="900" stroke="#00d4ff" strokeOpacity="0.02" strokeWidth="1" />
      <line x1="480" y1="0" x2="480" y2="900" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="600" y1="0" x2="600" y2="900" stroke="#00d4ff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="720" y1="0" x2="720" y2="900" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="840" y1="0" x2="840" y2="900" stroke="#00d4ff" strokeOpacity="0.02" strokeWidth="1" />
      <line x1="960" y1="0" x2="960" y2="900" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="1080" y1="0" x2="1080" y2="900" stroke="#00d4ff" strokeOpacity="0.03" strokeWidth="1" />
      <line x1="1200" y1="0" x2="1200" y2="900" stroke="#00d4ff" strokeOpacity="0.04" strokeWidth="1" />
      <line x1="1320" y1="0" x2="1320" y2="900" stroke="#00d4ff" strokeOpacity="0.02" strokeWidth="1" />

      {/* ── Circuit routing traces ─────────────────────────── */}
      <path d="M120,112 L240,112 L240,225 L360,225" fill="none" stroke="#00d4ff" strokeOpacity="0.07" strokeWidth="1.5" />
      <path d="M480,338 L600,338 L600,450 L720,450" fill="none" stroke="#00d4ff" strokeOpacity="0.06" strokeWidth="1.5" />
      <path d="M840,112 L960,112 L960,225 L1080,225" fill="none" stroke="#00d4ff" strokeOpacity="0.07" strokeWidth="1.5" />
      <path d="M240,563 L360,563 L360,675 L480,675" fill="none" stroke="#00d4ff" strokeOpacity="0.06" strokeWidth="1.5" />
      <path d="M1080,450 L1200,450 L1200,338 L1320,338" fill="none" stroke="#00d4ff" strokeOpacity="0.07" strokeWidth="1.5" />
      <path d="M600,675 L720,675 L720,788 L840,788" fill="none" stroke="#00d4ff" strokeOpacity="0.06" strokeWidth="1.5" />
      <path d="M960,563 L1080,563 L1080,675 L1200,675" fill="none" stroke="#00d4ff" strokeOpacity="0.05" strokeWidth="1.5" />
      <path d="M120,338 L240,338 L240,450" fill="none" stroke="#00d4ff" strokeOpacity="0.07" strokeWidth="1.5" />

      {/* ── Animated traces ────────────────────────────────── */}
      <path
        d="M0,225 L240,225 L240,338 L480,338"
        fill="none"
        stroke="#00d4ff"
        strokeOpacity="0.25"
        strokeWidth="1.5"
        strokeDasharray="40 200"
      >
        <animate attributeName="stroke-dashoffset" from="240" to="-240" dur="6s" repeatCount="indefinite" />
      </path>

      <path
        d="M1440,450 L1200,450 L1200,563 L960,563"
        fill="none"
        stroke="#00d4ff"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="40 200"
      >
        <animate attributeName="stroke-dashoffset" from="-240" to="240" dur="8s" repeatCount="indefinite" />
      </path>

      <path
        d="M480,900 L480,675 L720,675 L720,563"
        fill="none"
        stroke="#00d4ff"
        strokeOpacity="0.2"
        strokeWidth="1.5"
        strokeDasharray="30 180"
      >
        <animate attributeName="stroke-dashoffset" from="210" to="-210" dur="7s" repeatCount="indefinite" />
      </path>

      <path
        d="M960,0 L960,112 L1200,112 L1200,225"
        fill="none"
        stroke="#f59e0b"
        strokeOpacity="0.12"
        strokeWidth="1.5"
        strokeDasharray="30 160"
      >
        <animate attributeName="stroke-dashoffset" from="-190" to="190" dur="9s" repeatCount="indefinite" />
      </path>

      {/* ── Junction dots ──────────────────────────────────── */}
      <circle cx="240" cy="112" r="3" fill="#00d4ff" fillOpacity="0.15" />
      <circle cx="240" cy="225" r="3" fill="#00d4ff" fillOpacity="0.15" />
      <circle cx="360" cy="225" r="3" fill="#00d4ff" fillOpacity="0.15" />
      <circle cx="600" cy="338" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="600" cy="450" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="720" cy="450" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="960" cy="112" r="3" fill="#00d4ff" fillOpacity="0.15" />
      <circle cx="1080" cy="225" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="480" cy="338" r="4" fill="#00d4ff" fillOpacity="0.2" />
      <circle cx="1200" cy="450" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="720" cy="675" r="3" fill="#00d4ff" fillOpacity="0.12" />
      <circle cx="840" cy="788" r="3" fill="#00d4ff" fillOpacity="0.10" />
      <circle cx="1200" cy="112" r="3" fill="#f59e0b" fillOpacity="0.15" />
      <circle cx="960" cy="225" r="3" fill="#f59e0b" fillOpacity="0.12" />

      {/* ── Radial glow blobs ──────────────────────────────── */}
      <radialGradient id="glow1" cx="30%" cy="20%" r="40%">
        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glow2" cx="80%" cy="70%" r="35%">
        <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.03" />
        <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="glow3" cx="50%" cy="50%" r="30%">
        <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.02" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
      </radialGradient>

      <rect x="0" y="0" width="1440" height="900" fill="url(#glow1)" />
      <rect x="0" y="0" width="1440" height="900" fill="url(#glow2)" />
      <rect x="0" y="0" width="1440" height="900" fill="url(#glow3)" />
    </svg>
  );
}
