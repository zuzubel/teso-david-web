import LineIcon, { type IconProps } from './LineIcon'

// Excavator icon for "Zemní práce"
export default function ExcavatorIcon(props: IconProps) {
  return (
    <LineIcon {...props} viewBox="65 70 395 235" heightRatio={0.9}>
      {/* Tracks / Belt */}
      <rect x="80" y="260" width="220" height="35" rx="17.5" />
      {/* Track details (wheels & links) */}
      <line x1="80" y1="277.5" x2="300" y2="277.5" strokeDasharray="4 4" />
      <circle cx="100" cy="277.5" r="10" />
      <circle cx="130" cy="277.5" r="7" />
      <circle cx="160" cy="277.5" r="7" />
      <circle cx="190" cy="277.5" r="7" />
      <circle cx="220" cy="277.5" r="7" />
      <circle cx="250" cy="277.5" r="7" />
      <circle cx="280" cy="277.5" r="10" />

      {/* Base / Upper Body Chassis */}
      <path d="M 75 260 L 75 220 C 75 210 85 200 95 200 L 280 200 C 290 200 295 205 295 215 L 295 260 Z" />
      {/* Engine grills / Vent lines */}
      <line x1="85" y1="210" x2="130" y2="210" />
      <line x1="85" y1="218" x2="130" y2="218" />
      <line x1="85" y1="226" x2="130" y2="226" />
      <line x1="85" y1="234" x2="130" y2="234" />
      <line x1="85" y1="242" x2="130" y2="242" />
      {/* Exhaust pipe */}
      <path d="M 105 200 L 105 180 L 115 180 L 115 200" />

      {/* Cabin */}
      <path d="M 175 200 L 175 140 C 175 130 185 125 195 125 L 265 125 C 275 125 280 130 282 140 L 290 200" />
      {/* Cabin Windows */}
      <path d="M 185 135 L 230 135 L 230 190 L 185 190 Z" />
      <path d="M 238 135 L 273 135 L 280 190 L 238 190 Z" />
      {/* Door handle */}
      <line x1="222" y1="165" x2="222" y2="175" strokeWidth={3} />

      {/* Main Pivot Joint */}
      <circle cx="260" cy="190" r="12" />

      {/* Boom (Main Arm) */}
      <path d="M 260 190 Q 280 110 350 80 C 370 70 380 90 365 110 Q 320 150 280 200" />
      {/* Hydraulic Cylinder 1 (Boom) */}
      <line x1="235" y1="180" x2="310" y2="105" strokeWidth={4} />
      <line x1="310" y1="105" x2="330" y2="95" strokeWidth={2} />

      {/* Stick (Outer Arm) */}
      <path d="M 350 80 L 420 150 C 425 155 415 165 410 160 L 365 110" />
      {/* Hydraulic Cylinder 2 (Stick) */}
      <line x1="315" y1="90" x2="380" y2="120" strokeWidth={3} />

      {/* Bucket Linkage & Cylinder */}
      <line x1="410" y1="150" x2="430" y2="165" />
      <line x1="400" y1="155" x2="420" y2="175" />

      {/* Bucket (Scoop) */}
      <path d="M 420 150 C 440 160 455 180 445 210 C 435 230 405 235 380 230 C 370 228 365 215 375 210 C 400 210 420 200 410 170 C 405 160 410 155 420 150 Z" />
      {/* Bucket Teeth */}
      <path d="M 380 230 L 370 238 L 375 227 L 365 234 L 372 223 L 360 228" />
    </LineIcon>
  )
}
