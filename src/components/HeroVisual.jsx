/**
 * The dark sculptural monolith with the gold light streak.
 *
 * This is a pure SVG/CSS recreation so the page ships with no image payload.
 * To swap in a real render instead, replace the <svg> below with:
 *
 *   import heroRender from '../assets/hero-render.jpg'
 *   ...
 *   <img src={heroRender} alt="" className="h-full w-full object-cover" />
 *
 * and keep the wrapping <div> and the fade overlays intact — they are what
 * blend the visual into the black background on the left edge.
 */
export default function HeroVisual() {
  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[68%]">
      <svg
        viewBox="0 0 900 1000"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          {/* Leaning backdrop plane */}
          <linearGradient id="slab" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#131110" />
            <stop offset="55%" stopColor="#2a2521" />
            <stop offset="100%" stopColor="#0c0b0a" />
          </linearGradient>

          {/* Floor */}
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a231c" />
            <stop offset="45%" stopColor="#191411" />
            <stop offset="100%" stopColor="#070606" />
          </linearGradient>

          {/* Stone facets */}
          <linearGradient id="stoneLit" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#6a625a" />
            <stop offset="45%" stopColor="#3d3833" />
            <stop offset="100%" stopColor="#191614" />
          </linearGradient>
          <linearGradient id="stoneDark" x1="0" y1="0" x2="1" y2="0.6">
            <stop offset="0%" stopColor="#2b2724" />
            <stop offset="100%" stopColor="#0d0c0b" />
          </linearGradient>
          <linearGradient id="stoneEdge" x1="0" y1="1" x2="0.6" y2="0">
            <stop offset="0%" stopColor="#4a443d" />
            <stop offset="70%" stopColor="#726a5e" />
            <stop offset="100%" stopColor="#8d8375" />
          </linearGradient>

          {/* Warm glow around the light streak */}
          <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="18" result="b1" />
            <feGaussianBlur stdDeviation="46" result="b2" />
            <feMerge>
              <feMergeNode in="b2" />
              <feMergeNode in="b1" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="7" />
          </filter>

          {/* Volumetric haze cast by the streak */}
          <radialGradient id="haze" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#e8c07d" stopOpacity="0.26" />
            <stop offset="60%" stopColor="#c79a52" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Fades the whole scene out toward the left, into the headline */}
          <linearGradient id="leftFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#050505" stopOpacity="1" />
            <stop offset="38%" stopColor="#050505" stopOpacity="0.72" />
            <stop offset="72%" stopColor="#050505" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="topFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050505" stopOpacity="0.85" />
            <stop offset="30%" stopColor="#050505" stopOpacity="0" />
            <stop offset="88%" stopColor="#050505" stopOpacity="0" />
            <stop offset="100%" stopColor="#050505" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect width="900" height="1000" fill="#050505" />

        {/* Leaning backdrop plane */}
        <polygon points="545,-20 900,-20 900,690 455,742" fill="url(#slab)" />

        {/* Floor */}
        <polygon points="-20,742 920,690 920,1020 -20,1020" fill="url(#floor)" />

        {/* Ambient haze pooled behind the sculpture */}
        <ellipse cx="600" cy="620" rx="420" ry="300" fill="url(#haze)" />

        {/* Back shard */}
        <polygon
          points="612,286 806,372 818,752 640,748"
          fill="url(#stoneDark)"
        />
        <polygon
          points="612,286 806,372 742,470 636,432"
          fill="url(#stoneLit)"
          opacity="0.55"
        />

        {/* Main monolith — rounded crown, faceted body */}
        <path
          d="M430,752 L430,530 Q430,414 526,414 Q622,414 622,530 L634,750 Z"
          fill="url(#stoneEdge)"
        />
        <path
          d="M528,418 Q622,428 622,530 L634,750 L540,748 Z"
          fill="url(#stoneDark)"
          opacity="0.92"
        />
        <path
          d="M430,752 L430,530 Q430,414 526,414 L512,752 Z"
          fill="url(#stoneLit)"
          opacity="0.9"
        />

        {/* Low angled slab at the foot */}
        <polygon
          points="296,754 372,614 470,650 470,754"
          fill="url(#stoneDark)"
        />
        <polygon
          points="296,754 372,614 402,628 336,754"
          fill="url(#stoneLit)"
          opacity="0.5"
        />

        {/* Fracture lines in the stone */}
        <path
          d="M470,752 L486,590 L452,470"
          stroke="#0b0a09"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M640,748 L690,560 L672,412"
          stroke="#0b0a09"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />

        {/* THE light streak — floor sweep curving up the sculpture's edge */}
        <g className="breathe">
          <path
            className="streak"
            d="M120,900 C300,880 430,812 520,706 C606,604 636,470 626,300"
            stroke="#f2d9a8"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
            opacity="0.85"
          />
        </g>
        <path
          className="streak"
          d="M120,900 C300,880 430,812 520,706 C606,604 636,470 626,300"
          stroke="#fff6e4"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Rim light along the monolith's lit edge */}
        <path
          className="streak"
          d="M430,752 L430,530 Q430,414 526,414"
          stroke="#e8c07d"
          strokeWidth="3"
          fill="none"
          filter="url(#softGlow)"
          opacity="0.9"
        />

        {/* Warm bounce where the streak meets the floor */}
        <ellipse
          cx="470"
          cy="770"
          rx="300"
          ry="46"
          fill="url(#haze)"
          opacity="0.8"
        />

        {/* Blend into the page */}
        <rect width="900" height="1000" fill="url(#leftFade)" />
        <rect width="900" height="1000" fill="url(#topFade)" />
      </svg>
    </div>
  )
}
