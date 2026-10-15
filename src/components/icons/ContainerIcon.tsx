import LineIcon, { type IconProps } from './LineIcon'

// Skip container icon for "Kontejnerová doprava"
export default function ContainerIcon(props: IconProps) {
  return (
    <LineIcon {...props} viewBox="38 36 359 220" heightRatio={0.85}>
      {/* Top rim */}
      <path d="M 104.4 163.6 L 390.4 97.6 L 330.4 42.6 L 44.4 108.6 Z" />
      {/* Inner rim edge */}
      <path d="M 115.4 152.8 L 365.0 95.2 L 319.4 53.4 L 69.8 111.0 Z" />
      {/* Front side */}
      <path d="M 104.4 163.6 L 390.4 97.6 L 338.4 199.6 L 161.6 240.4 Z" />
      {/* Sloped left end */}
      <path d="M 104.4 163.6 L 44.4 108.6 L 101.6 185.4 L 161.6 240.4 Z" />
      {/* Lifting rail with two brackets and pins */}
      <path d="M 233.4 161.2 L 379.0 127.5 L 379.0 138.0 L 233.4 171.7 Z" />
      <path d="M 265.6 126.4 L 269.8 130.2 L 269.8 152.8 L 265.6 148.9 Z" />
      <circle cx="269.8" cy="145.2" r="3" />
      <path d="M 338.4 109.6 L 342.6 113.4 L 342.6 135.9 L 338.4 132.1 Z" />
      <circle cx="342.6" cy="128.4" r="3" />
      {/* Feet */}
      <path d="M 172.0 238.0 L 172.0 248.5 L 208.4 240.1 L 208.4 229.6" />
      <path d="M 291.6 210.4 L 291.6 220.9 L 328.0 212.5 L 328.0 202.0" />
      {/* Rubble heap */}
      <path d="M 133.6 148.6 Q 140.4 125.2 147.2 125.2 Q 156.4 109.7 165.6 113.7 Q 177.2 109.7 188.8 115.6 Q 202.8 115.6 216.8 129.4" />
    </LineIcon>
  )
}
