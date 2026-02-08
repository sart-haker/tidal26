export function SnowDivider() {
  return (
    <div className="relative w-full overflow-hidden -mt-32 z-10">
      <svg
        className="relative block w-full"
        viewBox="0 0 1440 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rolling snow hills — back layer (lighter, further away) */}
        <path
          d="M-50,180 Q80,100 200,140 Q340,185 450,120 Q580,55 720,110 Q860,165 1000,95 Q1120,40 1250,100 Q1360,150 1490,110 L1490,500 L-50,500 Z"
          fill="#D8E4EE"
        />

        {/* Rolling snow hills — mid layer */}
        <path
          d="M-50,210 Q100,140 230,175 Q370,215 500,155 Q640,95 780,150 Q920,210 1060,140 Q1180,80 1300,135 Q1400,175 1490,145 L1490,500 L-50,500 Z"
          fill="#E8EFF6"
        />

        {/* Rolling snow hills — front layer (brightest white) */}
        <path
          d="M-50,240 Q60,175 180,210 Q320,255 460,190 Q600,130 740,185 Q880,240 1020,175 Q1150,115 1280,170 Q1380,210 1490,180 L1490,500 L-50,500 Z"
          fill="#F2F7FB"
        />

        {/* Soft snow bumps on front edge for extra roundness */}
        <ellipse cx="180" cy="210" rx="80" ry="18" fill="#F5F9FC" opacity="0.7" />
        <ellipse cx="460" cy="190" rx="70" ry="15" fill="#F5F9FC" opacity="0.6" />
        <ellipse cx="740" cy="185" rx="75" ry="16" fill="#F5F9FC" opacity="0.7" />
        <ellipse cx="1020" cy="175" rx="70" ry="14" fill="#F5F9FC" opacity="0.6" />
        <ellipse cx="1280" cy="170" rx="65" ry="15" fill="#F5F9FC" opacity="0.7" />

        {/* Ski track grooves */}
        <path
          d="M100,280 Q300,250 500,290 Q700,330 900,280 Q1100,240 1400,270"
          fill="none"
          stroke="#C0CCDA"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <path
          d="M50,295 Q280,270 520,305 Q760,340 980,295 Q1180,255 1440,285"
          fill="none"
          stroke="#C0CCDA"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* Pine tree 1 - left area */}
        <g transform="translate(120, 205)">
          <rect x="8" y="40" width="4" height="12" fill="#5D4037" />
          <polygon points="10,0 0,25 6,20 -2,40 22,40 14,20 20,25" fill="#2E7D32" />
          <polygon points="10,8 2,28 7,24 0,38 20,38 13,24 18,28" fill="#388E3C" />
          <ellipse cx="10" cy="5" rx="5" ry="2" fill="white" opacity="0.8" />
          <ellipse cx="6" cy="20" rx="4" ry="1.5" fill="white" opacity="0.6" />
        </g>

        {/* Pine tree 2 - larger */}
        <g transform="translate(185, 185)">
          <rect x="10" y="50" width="5" height="15" fill="#5D4037" />
          <polygon points="12,0 0,30 7,24 -3,50 27,50 17,24 24,30" fill="#2E7D32" />
          <polygon points="12,10 3,34 8,30 1,48 23,48 16,30 21,34" fill="#388E3C" />
          <ellipse cx="12" cy="6" rx="6" ry="2.5" fill="white" opacity="0.8" />
          <ellipse cx="7" cy="24" rx="5" ry="1.5" fill="white" opacity="0.6" />
        </g>

        {/* Pine tree 3 - small */}
        <g transform="translate(80, 220)">
          <rect x="5" y="28" width="3" height="8" fill="#5D4037" />
          <polygon points="6,0 -1,18 3,14 -2,28 14,28 9,14 13,18" fill="#3E8B44" />
          <ellipse cx="6" cy="4" rx="4" ry="1.5" fill="white" opacity="0.7" />
        </g>

        {/* Pine tree cluster - right side */}
        <g transform="translate(1220, 200)">
          <rect x="10" y="50" width="5" height="15" fill="#5D4037" />
          <polygon points="12,0 0,30 7,24 -3,50 27,50 17,24 24,30" fill="#2E7D32" />
          <polygon points="12,10 3,34 8,30 1,48 23,48 16,30 21,34" fill="#388E3C" />
          <ellipse cx="12" cy="6" rx="6" ry="2.5" fill="white" opacity="0.8" />
        </g>
        <g transform="translate(1260, 180)">
          <rect x="8" y="40" width="4" height="12" fill="#5D4037" />
          <polygon points="10,0 0,25 6,20 -2,40 22,40 14,20 20,25" fill="#2E7D32" />
          <ellipse cx="10" cy="5" rx="5" ry="2" fill="white" opacity="0.8" />
        </g>
        <g transform="translate(1300, 210)">
          <rect x="5" y="28" width="3" height="8" fill="#5D4037" />
          <polygon points="6,0 -1,18 3,14 -2,28 14,28 9,14 13,18" fill="#3E8B44" />
          <ellipse cx="6" cy="4" rx="4" ry="1.5" fill="white" opacity="0.7" />
        </g>

        {/* Mid-area single tree */}
        <g transform="translate(700, 175)">
          <rect x="8" y="40" width="4" height="12" fill="#5D4037" />
          <polygon points="10,0 0,25 6,20 -2,40 22,40 14,20 20,25" fill="#2E7D32" />
          <polygon points="10,8 2,28 7,24 0,38 20,38 13,24 18,28" fill="#388E3C" />
          <ellipse cx="10" cy="5" rx="5" ry="2" fill="white" opacity="0.8" />
        </g>

        {/* Penguin footprints */}
        {[350, 390, 430, 470, 510, 550, 590].map((x, i) => (
          <g key={i} transform={`translate(${x}, ${265 + Math.sin(i * 0.8) * 12})`} opacity="0.25">
            <ellipse cx="0" cy="0" rx="3" ry="4" fill="#6B7B8D" transform="rotate(-10)" />
            <ellipse cx="8" cy="2" rx="3" ry="4" fill="#6B7B8D" transform="rotate(10)" />
          </g>
        ))}

        {/* Snowman */}
        <g transform="translate(920, 225)">
          <circle cx="0" cy="30" r="18" fill="#F0F4F8" stroke="#D0D8E0" strokeWidth="0.5" />
          <circle cx="0" cy="5" r="13" fill="#F5F8FB" stroke="#D0D8E0" strokeWidth="0.5" />
          <circle cx="0" cy="-16" r="10" fill="#F8FAFC" stroke="#D0D8E0" strokeWidth="0.5" />
          <circle cx="-4" cy="-19" r="1.5" fill="#333" />
          <circle cx="4" cy="-19" r="1.5" fill="#333" />
          <polygon points="0,-16 8,-14 0,-13" fill="#FF8A65" />
          <circle cx="0" cy="0" r="1.5" fill="#333" />
          <circle cx="0" cy="8" r="1.5" fill="#333" />
          <circle cx="0" cy="16" r="1.5" fill="#333" />
          <path d="M-12,-8 Q0,-4 12,-8" stroke="#E53935" strokeWidth="3" fill="none" />
          <path d="M8,-8 L12,-1" stroke="#E53935" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <rect x="-12" y="-27" width="24" height="2.5" rx="1" fill="#333" />
          <rect x="-7" y="-40" width="14" height="14" rx="2" fill="#333" />
          <line x1="-13" y1="5" x2="-32" y2="-8" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          <line x1="-28" y1="-4" x2="-33" y2="-12" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13" y1="5" x2="32" y2="-8" stroke="#5D4037" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="-4" x2="33" y2="-12" stroke="#5D4037" strokeWidth="1.5" strokeLinecap="round" />
        </g>

        {/* Snow mounds */}
        <ellipse cx="650" cy="310" rx="35" ry="7" fill="#EDF2F7" opacity="0.6" />
        <ellipse cx="350" cy="290" rx="22" ry="5" fill="#EDF2F7" opacity="0.5" />
        <ellipse cx="1080" cy="275" rx="28" ry="6" fill="#EDF2F7" opacity="0.5" />

        {/* Sparkle/ice crystals */}
        {[250, 480, 760, 1000, 1150].map((x, i) => (
          <g key={`sparkle-${i}`} transform={`translate(${x}, ${230 + i * 10})`} opacity="0.35">
            <line x1="0" y1="-3" x2="0" y2="3" stroke="white" strokeWidth="1" />
            <line x1="-3" y1="0" x2="3" y2="0" stroke="white" strokeWidth="1" />
            <line x1="-2" y1="-2" x2="2" y2="2" stroke="white" strokeWidth="0.7" />
            <line x1="2" y1="-2" x2="-2" y2="2" stroke="white" strokeWidth="0.7" />
          </g>
        ))}
      </svg>
    </div>
  );
}
