import { cn } from '@/lib/utils'

/**
 * Substrate mark — three stacked nodes joined by a spine, evoking a
 * layered infrastructure stack / orchestration graph.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <path
        d="M12 2 4 6.5v11L12 22l8-4.5v-11L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="opacity-40"
      />
      <path
        d="M12 7 8 9.25v4.5L12 16l4-2.25v-4.5L12 7Z"
        fill="currentColor"
      />
      <circle cx="12" cy="11.5" r="1.4" className="fill-background" />
    </svg>
  )
}
