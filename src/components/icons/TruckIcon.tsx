import LineIcon, { type IconProps } from './LineIcon'

// Flatbed truck icon for "Nákladní autodoprava" (3/4 front view)
export default function TruckIcon(props: IconProps) {
  return (
    <LineIcon {...props} viewBox="55 58 522 258" heightRatio={0.85}>
      {/* Cab – front face */}
      <path d="M 72 105 C 72 85 85 75 105 73 L 180 68 C 195 67 202 75 202 88 L 200 240 L 70 244 Z" />
      {/* Windshield */}
      <path d="M 86 96 C 86 88 91 84 101 83 L 175 79 C 183 79 187 84 187 92 L 186 150 L 86 155 Z" />
      {/* Grille */}
      <path d="M 88 174 L 186 170 L 186 206 L 90 210 Z" />
      <line x1="118" y1="188" x2="158" y2="187" />
      {/* Bumper with headlights */}
      <path d="M 66 244 L 204 240 L 204 272 C 204 278 199 281 193 281 L 77 285 C 71 285 66 281 66 276 Z" />
      <path d="M 78 252 L 110 251 L 110 262 L 78 263 Z" />
      <path d="M 160 250 L 193 249 L 193 260 L 160 261 Z" />
      {/* Mirror */}
      <path d="M 72 100 L 60 104 L 60 145 L 72 145" />

      {/* Cab – side with door and window */}
      <path d="M 185 68 L 270 66 C 280 66 286 72 286 80 L 286 230" />
      <path d="M 207 86 L 266 83 L 268 140 L 210 143 Z" />
      <path d="M 202 150 L 270 148 L 271 214" />
      <line x1="252" y1="162" x2="264" y2="162" />
      {/* Cab bottom edge with front wheel arch */}
      <path d="M 200 240 L 226 240 A 48 48 0 0 1 298 240 L 310 240" />

      {/* Headboard post behind the cab */}
      <path d="M 292 72 L 302 72 L 302 165" />

      {/* Flatbed with side rails */}
      <path d="M 302 165 L 568 168 L 568 215 L 302 215 Z" />
      <line x1="310" y1="183" x2="560" y2="185" />
      <line x1="310" y1="199" x2="560" y2="200" />

      {/* Chassis, fuel tank and rear fender */}
      <path d="M 310 226 L 444 226" />
      <path d="M 440 270 A 48 48 0 0 1 536 270" />
      <rect x="325" y="236" width="60" height="28" rx="4" />

      {/* Front wheel */}
      <circle cx="262" cy="272" r="36" />
      <circle cx="262" cy="272" r="18" />
      <circle cx="262" cy="272" r="5" />

      {/* Rear wheel */}
      <circle cx="488" cy="272" r="36" />
      <circle cx="488" cy="272" r="18" />
      <circle cx="488" cy="272" r="5" />
    </LineIcon>
  )
}
