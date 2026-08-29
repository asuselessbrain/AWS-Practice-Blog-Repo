export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="24"
        cy="24"
        r="19"
        stroke="var(--color-ink)"
        strokeWidth="1.4"
      />
      <circle
        cx="24"
        cy="24"
        r="14.5"
        stroke="var(--color-ink)"
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* cardinal ticks */}
      <line x1="24" y1="5" x2="24" y2="10" stroke="var(--color-ink)" strokeWidth="1.4" />
      <line x1="24" y1="38" x2="24" y2="43" stroke="var(--color-ink)" strokeWidth="1.1" />
      <line x1="5" y1="24" x2="10" y2="24" stroke="var(--color-ink)" strokeWidth="1.1" />
      <line x1="38" y1="24" x2="43" y2="24" stroke="var(--color-ink)" strokeWidth="1.1" />

      {/* needle */}
      <path d="M24 11 L28.5 24 L24 22 Z" fill="var(--color-accent)" />
      <path d="M24 37 L19.5 24 L24 26 Z" fill="var(--color-ink)" />

      <circle cx="24" cy="24" r="2" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1" />
    </svg>
  );
}
