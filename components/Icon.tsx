import type { IconName } from "@/data/platforms";

// Insights use one extra topic icon (chart) beyond the platform set.
export type AnyIcon = IconName | "chart";

const paths: Record<AnyIcon, React.ReactNode> = {
  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3 3 0 0 0 8 18a2.5 2.5 0 0 0 4 0V6a2 2 0 0 0-3-2Z" />
      <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3 3 0 0 1 16 18a2.5 2.5 0 0 1-4 0" />
    </>
  ),
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
  exchange: (
    <>
      <path d="M4 8h13l-3-3M20 16H7l3 3" />
    </>
  ),
  graduation: (
    <>
      <path d="M3 9l9-4 9 4-9 4-9-4Z" />
      <path d="M7 11v4c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4M21 9v5" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M7 15l4-4 3 2 5-6" />
    </>
  ),
};

export function Icon({
  name,
  className = "",
  size = 24,
}: {
  name: AnyIcon;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
