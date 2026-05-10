// Single-stroke line icons matching the brand kit. All icons are 24x24
// viewBox, rendered at the parent's color via currentColor. Stroke 1.7
// keeps them feeling delicate but readable at 20px+.

export type IconName =
  | "rocket"
  | "chart"
  | "target"
  | "spark"
  | "users"
  | "handshake"
  | "compass"
  | "shield"
  | "trend"
  | "mail"
  | "calendar"
  | "arrow-right"
  | "check"
  | "linkedin";

interface Props {
  name: IconName;
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
}

export default function Icon({
  name,
  size = 22,
  className,
  "aria-hidden": ariaHidden = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  rocket: (
    <>
      <path d="M14.5 3.5c4 0 6 2 6 6-2.4 1.8-5 4.4-7.4 7.4-1 1.2-2.6 1.8-4.1 1.6L7 18l-1.5-1.5L4 14.6c-.2-1.5.4-3.1 1.6-4.1C8.6 8.1 11.2 5.5 13 3.1c.5-.4 1-.6 1.5.4z" />
      <circle cx="15" cy="9" r="1.4" />
      <path d="M5.5 15c-1 1-1.6 3-1.6 4.6 1.6 0 3.6-.6 4.6-1.6" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v17a1 1 0 001 1h17" />
      <path d="M7 14l3.4-3.4 3.6 3.6L20.5 8" />
      <circle cx="20.5" cy="8" r="1.4" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.4" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5l1.7 5 5 1.7-5 1.7-1.7 5-1.7-5-5-1.7 5-1.7L12 3.5z" />
      <path d="M19 16l.7 1.8L21.5 18.5l-1.8.7L19 21l-.7-1.8L16.5 18.5l1.8-.7L19 16z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3.4 19.4c.4-2.8 3-5 5.6-5s5.2 2.2 5.6 5" />
      <circle cx="17" cy="9.5" r="2.6" />
      <path d="M14.6 17.6c.4-1.8 2.2-3 4-3 1.5 0 2.8.6 3.4 1.6" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11l3-3 3 1 3-2 3 2 3-1 3 3v3l-3 3-3-1-3 1-3-1-3 1-3-3v-3z" />
      <path d="M9 12l3 2 3-2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15 9l-1.5 4.5L9 15l1.5-4.5L15 9z" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3.4v5c0 4.6-3.2 8.6-8 9.6-4.8-1-8-5-8-9.6v-5L12 3z" />
      <path d="M9 12l2.2 2.2L15 10.4" />
    </>
  ),
  trend: (
    <>
      <path d="M3 17l5-5 4 3 5-7" />
      <path d="M14 8h4v4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.6 6.4l8.4 6 8.4-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
      <circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4 4L19 7" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <circle cx="8" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <path d="M8 11.5v6M12 11.5v6M12 14.5c0-1.7 1-3 2.6-3s2.4 1.3 2.4 3v3" />
    </>
  ),
};
