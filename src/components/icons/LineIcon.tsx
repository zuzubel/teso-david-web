import type { ReactNode } from 'react'

/** Props shared by the custom icons – same size/className API as lucide-react icons */
export interface IconProps {
  size?: number
  className?: string
}

interface LineIconProps extends IconProps {
  /** viewBox tightly around the drawing: "minX minY width height" */
  viewBox: string
  /** Rendered height as a fraction of `size`; wide drawings look as big as square icons below 1 */
  heightRatio?: number
  children: ReactNode
}

/**
 * Base for the custom line-art icons (service icons). Drawings are often wider than tall, so the
 * width follows the viewBox aspect ratio instead of being squeezed into a `size`×`size` square.
 */
export default function LineIcon({
  size = 24,
  className,
  viewBox,
  heightRatio = 1,
  children,
}: LineIconProps) {
  const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number)
  const height = size * heightRatio

  return (
    <svg
      width={(height * vbWidth) / vbHeight}
      height={height}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}
