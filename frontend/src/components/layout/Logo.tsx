interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <button className="pc-logo" onClick={onClick} aria-label="Porcelaneczka home">
      <span className="pc-logo__mark" aria-hidden="true">
        <svg viewBox="0 0 28 28" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
          <path d="M5 16c0-4.5 4-8 9-8s9 3.5 9 8"/>
          <path d="M3 16h22"/>
          <path d="M6.5 16c.6 3.5 3.7 6 7.5 6s6.9-2.5 7.5-6"/>
          <path d="M14 22v3"/><path d="M11 25h6"/>
        </svg>
      </span>
      <span className="pc-logo__word">Porcelaneczka</span>
    </button>
  );
}
