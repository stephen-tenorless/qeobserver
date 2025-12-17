import React from 'react';

/**
 * Animated quantum lattice background for hero section
 * Represents the quantum-aware technology concept
 */
export const QuantumLatticeBackground: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes pulse-node {
          0%, 100% { r: 3; opacity: 0.5; }
          50% { r: 6; opacity: 1; }
        }
        @keyframes flow-line {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .quantum-node {
          animation: pulse-node 3s ease-in-out infinite;
        }
        .quantum-node:nth-child(2) {
          animation-delay: 0.3s;
        }
        .quantum-node:nth-child(3) {
          animation-delay: 0.6s;
        }
        .quantum-node:nth-child(4) {
          animation-delay: 0.9s;
        }
        .quantum-line {
          stroke: #06b6d4;
          stroke-width: 1;
          fill: none;
          opacity: 0.3;
        }
      `}</style>
    </defs>

    {/* Grid of connected nodes */}
    {[0, 1, 2, 3, 4].map((i) =>
      [0, 1, 2, 3, 4].map((j) => {
        const x = 100 + i * 250;
        const y = 100 + j * 120;
        return (
          <g key={`node-${i}-${j}`}>
            {/* Horizontal connections */}
            {i < 4 && (
              <line
                x1={x}
                y1={y}
                x2={x + 250}
                y2={y}
                className="quantum-line"
                strokeDasharray="100"
                strokeDashoffset="100"
                style={{
                  animation: `flow-line 4s linear infinite`,
                  animationDelay: `${(i + j) * 0.2}s`,
                }}
              />
            )}
            {/* Vertical connections */}
            {j < 4 && (
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={y + 120}
                className="quantum-line"
                strokeDasharray="100"
                strokeDashoffset="100"
                style={{
                  animation: `flow-line 4s linear infinite`,
                  animationDelay: `${(i + j) * 0.2}s`,
                }}
              />
            )}
            {/* Node */}
            <circle cx={x} cy={y} r="3" fill="#06b6d4" className="quantum-node" />
          </g>
        );
      })
    )}
  </svg>
);

/**
 * Stress visualization background for "Keep the world in one piece" section
 * Shows materials responding to stress
 */
export const StressVisualization: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes stress-wave {
          0% { d: path('M 0 300 Q 150 280 300 300 T 600 300 T 900 300 T 1200 300 L 1200 600 L 0 600 Z'); }
          50% { d: path('M 0 300 Q 150 320 300 300 T 600 280 T 900 320 T 1200 300 L 1200 600 L 0 600 Z'); }
          100% { d: path('M 0 300 Q 150 280 300 300 T 600 300 T 900 300 T 1200 300 L 1200 600 L 0 600 Z'); }
        }
        @keyframes crack-grow {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .stress-fill {
          fill: #06b6d4;
          animation: stress-wave 6s ease-in-out infinite;
        }
        .crack-line {
          stroke: #06b6d4;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 200;
        }
      `}</style>
    </defs>

    {/* Animated wave pattern */}
    <path
      className="stress-fill"
      d="M 0 300 Q 150 280 300 300 T 600 300 T 900 300 T 1200 300 L 1200 600 L 0 600 Z"
    />

    {/* Crack lines representing stress points */}
    {[1, 2, 3, 4, 5].map((i) => (
      <path
        key={`crack-${i}`}
        d={`M ${i * 200} 150 L ${i * 200 + 50} 300 L ${i * 200 - 30} 450`}
        className="crack-line"
        style={{
          animation: `crack-grow 4s ease-out infinite`,
          animationDelay: `${i * 0.2}s`,
        }}
      />
    ))}

    {/* Healing nodes */}
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <circle
        key={`heal-${i}`}
        cx={i * 170 + 100}
        cy={300}
        r="8"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
        opacity="0.6"
        style={{
          animation: `pulse 2s ease-in-out infinite`,
          animationDelay: `${i * 0.15}s`,
        }}
      />
    ))}
  </svg>
);

/**
 * Sense-Encode-Act cycle visualization
 * Shows the three-layer process from sensing to action
 */
export const SenseEncodeActVisualization: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes circle-orbit {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        @keyframes bounce-in {
          0% { r: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { r: 8; opacity: 0.5; }
        }
        .sense-layer { fill: #06b6d4; opacity: 0.3; }
        .encode-layer { fill: #3b82f6; opacity: 0.2; }
        .act-layer { fill: #8b5cf6; opacity: 0.2; }
        .orb {
          animation: bounce-in 2s ease-out infinite;
        }
      `}</style>
    </defs>

    {/* Three concentric circles representing layers */}
    <circle cx="600" cy="300" r="80" className="sense-layer" />
    <circle cx="600" cy="300" r="120" className="encode-layer" />
    <circle cx="600" cy="300" r="160" className="act-layer" />

    {/* Orbiting particles for each layer */}
    {[0, 1, 2].map((layer) =>
      [0, 1, 2].map((particle) => (
        <g
          key={`orbit-${layer}-${particle}`}
          style={{
            transformOrigin: '600px 300px',
            animation: `circle-orbit ${8 + layer * 2}s linear infinite`,
            animationDirection: layer % 2 === 0 ? 'normal' : 'reverse',
          }}
        >
          <circle
            cx={600}
            cy={300 - (80 + layer * 40)}
            r="4"
            fill="#06b6d4"
            opacity={0.8 - layer * 0.2}
            style={{
              animationDelay: `${particle * 0.3}s`,
            }}
          />
        </g>
      ))
    )}

    {/* Center pulse */}
    <circle
      cx="600"
      cy="300"
      r="20"
      fill="none"
      stroke="#06b6d4"
      strokeWidth="2"
      style={{
        animation: `pulse 2s ease-in-out infinite`,
      }}
    />
  </svg>
);

/**
 * Stack components visualization
 * Shows Pebble, Anchor Matter, and Drive Channel
 */
export const StackComponentsVisualization: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .pebble { fill: #06b6d4; }
        .anchor { fill: #8b5cf6; }
        .channel { fill: #ec4899; }
      `}</style>
    </defs>

    {/* Pebble (wearable) - on the left */}
    <g style={{ animation: `float-up 3s ease-in-out infinite` }}>
      <circle cx="300" cy="250" r="60" className="pebble" opacity="0.3" />
      <circle cx="300" cy="250" r="50" className="pebble" opacity="0.5" />
      <circle cx="300" cy="250" r="40" fill="none" stroke="#06b6d4" strokeWidth="2" />
      <circle cx="300" cy="250" r="20" fill="#06b6d4" opacity="0.8" />
    </g>

    {/* Anchor Matter (material) - on the right */}
    <g style={{ animation: `float-up 3s ease-in-out infinite`, animationDelay: '0.5s' }}>
      <rect x="900" y="180" width="120" height="140" className="anchor" opacity="0.3" rx="10" />
      <rect x="910" y="190" width="100" height="120" className="anchor" opacity="0.5" rx="8" />
      <line x1="920" y1="230" x2="1000" y2="230" stroke="#8b5cf6" strokeWidth="3" opacity="0.8" />
      <line x1="920" y1="260" x2="1000" y2="260" stroke="#8b5cf6" strokeWidth="3" opacity="0.8" />
    </g>

    {/* Drive Channel (connection) - in the middle */}
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <circle
          key={`channel-${i}`}
          cx={400 + i * 100}
          cy="300"
          r="6"
          className="channel"
          opacity="0.5"
          style={{
            animation: `pulse 1.5s ease-in-out infinite`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
      <line
        x1="400"
        y1="300"
        x2="900"
        y2="300"
        stroke="#ec4899"
        strokeWidth="2"
        opacity="0.3"
        strokeDasharray="10,5"
      />
    </g>

    {/* Energy waves connecting them */}
    {[0, 1, 2].map((wave) => (
      <circle
        key={`wave-${wave}`}
        cx="600"
        cy="300"
        r="30 + wave * 40"
        fill="none"
        stroke="#06b6d4"
        strokeWidth="2"
        opacity="0.2"
        style={{
          animation: `glow-pulse 2s ease-in-out infinite`,
          animationDelay: `${wave * 0.3}s`,
        }}
      />
    ))}
  </svg>
);

/**
 * Ethics & Safety background
 * Shows secure boundaries and safe zones
 */
export const EthicsSafetyVisualization: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes shield-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boundary-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .shield { fill: none; stroke: #22d3ee; stroke-width: 2; }
        .safe-zone { fill: #06b6d4; opacity: 0.1; }
      `}</style>
    </defs>

    {/* Multiple protective zones */}
    {[1, 2, 3].map((layer) => (
      <g key={`zone-${layer}`}>
        <rect
          x={200 + layer * 50}
          y={150 + layer * 50}
          width={800 - layer * 100}
          height={300 - layer * 100}
          className="safe-zone"
          rx={20}
          style={{
            animation: `boundary-glow 3s ease-in-out infinite`,
            animationDelay: `${layer * 0.3}s`,
          }}
        />
        <rect
          x={200 + layer * 50}
          y={150 + layer * 50}
          width={800 - layer * 100}
          height={300 - layer * 100}
          className="shield"
          rx={20}
          style={{
            animation: `boundary-glow 3s ease-in-out infinite`,
            animationDelay: `${layer * 0.3}s`,
          }}
        />
      </g>
    ))}

    {/* Checkpoints/validators around the perimeter */}
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
      const angle = (i / 8) * Math.PI * 2;
      const x = 600 + Math.cos(angle) * 250;
      const y = 300 + Math.sin(angle) * 150;
      return (
        <g key={`checkpoint-${i}`}>
          <circle
            cx={x}
            cy={y}
            r="8"
            fill="#22d3ee"
            style={{
              animation: `pulse 1.5s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
          <circle cx={x} cy={y} r="15" fill="none" stroke="#22d3ee" strokeWidth="1" opacity="0.3" />
        </g>
      );
    })}
  </svg>
);

/**
 * Blog/Research visualization
 * Shows data points and research flows
 */
export const ResearchVisualization: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes data-flow {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes scatter {
          0% { transform: translate(0, 0); }
          50% { transform: translate(var(--tx), var(--ty)); }
          100% { transform: translate(0, 0); }
        }
        .data-point { fill: #06b6d4; }
      `}</style>
    </defs>

    {/* Grid of data points */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <circle
          key={`data-${row}-${col}`}
          cx={150 + col * 200}
          cy={80 + row * 60}
          r="3"
          className="data-point"
          style={{
            animation: `data-flow 3s ease-in-out infinite`,
            animationDelay: `${(row + col) * 0.1}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))
    )}

    {/* Connection lines between data points */}
    {[0, 1, 2, 3].map((i) => (
      <line
        key={`line-${i}`}
        x1={150 + i * 200}
        y1="80"
        x2={150 + i * 200}
        y2="680"
        stroke="#06b6d4"
        strokeWidth="1"
        opacity="0.1"
        strokeDasharray="5,5"
      />
    ))}
  </svg>
);

/**
 * Healing Brick animation - shows a brick with a crack that self-repairs
 */
export const HealingBrickAnimation: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes crack-form {
          0% { stroke-dashoffset: 200; opacity: 1; }
          40% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes heal-glow {
          0%, 40% { opacity: 0; }
          50% { opacity: 0.8; }
          100% { opacity: 0; }
        }
        @keyframes brick-shake {
          0%, 100% { transform: translateX(0); }
          10%, 20%, 30% { transform: translateX(-2px); }
          15%, 25% { transform: translateX(2px); }
        }
        .healing-crack {
          animation: crack-form 4s ease-in-out infinite;
          stroke: #ef4444;
          stroke-width: 2;
          fill: none;
          stroke-dasharray: 200;
        }
        .heal-glow-effect {
          animation: heal-glow 4s ease-in-out infinite;
          fill: #06b6d4;
        }
        .brick-container {
          animation: brick-shake 4s ease-in-out infinite;
        }
      `}</style>
    </defs>

    {/* Multiple bricks showing healing cycle */}
    {[0, 1, 2].map((i) => {
      const startX = 150 + i * 320;
      const startY = 200;
      return (
        <g key={`brick-${i}`} className="brick-container" style={{ transformOrigin: `${startX + 75}px ${startY + 75}px`, animationDelay: `${i * 1.5}s` }}>
          {/* Brick body */}
          <rect
            x={startX}
            y={startY}
            width="150"
            height="100"
            fill="#8b4513"
            stroke="#654321"
            strokeWidth="2"
            rx="4"
          />

          {/* Crack that forms and heals */}
          <path
            className="healing-crack"
            d={`M ${startX + 30} ${startY + 20} Q ${startX + 60} ${startY + 40} ${startX + 90} ${startY + 60} T ${startX + 120} ${startY + 80}`}
            style={{ animationDelay: `${i * 1.5}s` }}
          />

          {/* Healing glow particles */}
          {[0, 1, 2, 3].map((p) => (
            <circle
              key={`glow-${i}-${p}`}
              cx={startX + 30 + p * 30}
              cy={startY + 20 + p * 15}
              r="4"
              className="heal-glow-effect"
              style={{ animationDelay: `${i * 1.5 + 1.5}s` }}
            />
          ))}

          {/* Repaired state indicator */}
          <circle
            cx={startX + 75}
            cy={startY + 50}
            r="40"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0"
            style={{
              animation: `0.5s ease-out forwards`,
              animationName: 'repair-check',
              animationDelay: `${i * 1.5 + 2.8}s`,
            }}
          />
        </g>
      );
    })}

    <style>{`
      @keyframes repair-check {
        0% { opacity: 0; r: 20; }
        50% { opacity: 1; r: 45; }
        100% { opacity: 0; r: 60; }
      }
    `}</style>
  </svg>
);

/**
 * Healing Glass animation - shows tempered glass with stress cracks healing
 */
export const HealingGlassAnimation: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes glass-crack-spread {
          0% { stroke-dashoffset: 300; }
          30% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes glass-heal {
          0%, 30% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes glass-glow-pulse {
          0%, 30% { r: 2; opacity: 0; }
          50% { r: 8; opacity: 1; }
          100% { r: 2; opacity: 0; }
        }
        .glass-pane {
          fill: rgba(6, 182, 212, 0.1);
          stroke: #06b6d4;
          stroke-width: 2;
        }
        .stress-crack {
          stroke: #f59e0b;
          stroke-width: 1.5;
          fill: none;
          stroke-dasharray: 300;
          animation: glass-crack-spread 4s ease-out infinite;
        }
        .glass-healing-zone {
          fill: none;
          stroke: #10b981;
          stroke-width: 2;
          opacity: 0;
          animation: glass-heal 4s ease-in-out infinite;
        }
        .healing-particle {
          animation: glass-glow-pulse 4s ease-in-out infinite;
          fill: #06b6d4;
        }
      `}</style>
    </defs>

    {/* Multiple glass panels */}
    {[0, 1, 2].map((i) => {
      const startX = 150 + i * 320;
      const startY = 150;
      return (
        <g key={`glass-${i}`}>
          {/* Glass pane */}
          <rect
            className="glass-pane"
            x={startX}
            y={startY}
            width="200"
            height="200"
            rx="8"
          />

          {/* Stress cracks spreading */}
          <path
            className="stress-crack"
            d={`M ${startX + 100} ${startY + 50} L ${startX + 80} ${startY + 100} L ${startX + 120} ${startY + 140} L ${startX + 60} ${startY + 180}`}
            style={{ animationDelay: `${i * 1.5}s` }}
          />
          <path
            className="stress-crack"
            d={`M ${startX + 100} ${startY + 50} L ${startX + 130} ${startY + 110} L ${startX + 150} ${startY + 160}`}
            style={{ animationDelay: `${i * 1.5 + 0.2}s` }}
          />

          {/* Healing zone spreading inward */}
          <circle
            className="glass-healing-zone"
            cx={startX + 100}
            cy={startY + 100}
            r="30"
            style={{ animationDelay: `${i * 1.5 + 2}s` }}
          />

          {/* Healing particles */}
          {[0, 1, 2, 3, 4].map((p) => (
            <circle
              key={`particle-${i}-${p}`}
              className="healing-particle"
              cx={startX + 50 + p * 30}
              cy={startY + 60 + Math.sin(p) * 40}
              r="2"
              style={{ animationDelay: `${i * 1.5 + 2.2 + p * 0.1}s` }}
            />
          ))}
        </g>
      );
    })}
  </svg>
);

/**
 * Healing Steel animation - shows structural steel beam with stress and auto-repair
 */
export const HealingSteelAnimation: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <style>{`
        @keyframes stress-wave {
          0% { y: 0; opacity: 1; }
          50% { y: -20px; opacity: 0.5; }
          100% { y: 0; opacity: 0; }
        }
        @keyframes repair-wave {
          0% { x: 0; opacity: 0; }
          50% { x: 100px; opacity: 1; }
          100% { x: 200px; opacity: 0; }
        }
        @keyframes strengthen-glow {
          0%, 60% { opacity: 0; }
          70% { opacity: 1; }
          100% { opacity: 0; }
        }
        .steel-beam {
          fill: #4b5563;
          stroke: #374151;
          stroke-width: 1;
        }
        .stress-indicator {
          animation: stress-wave 4s ease-in-out infinite;
          fill: #ef4444;
          opacity: 0.6;
        }
        .repair-wave-element {
          animation: repair-wave 4s ease-in-out infinite;
          fill: #06b6d4;
          opacity: 0.5;
        }
        .strength-indicator {
          animation: strengthen-glow 4s ease-in-out infinite;
          stroke: #10b981;
          stroke-width: 2;
          fill: none;
        }
      `}</style>
    </defs>

    {/* Multiple steel beams */}
    {[0, 1].map((i) => {
      const startX = 200;
      const startY = 150 + i * 200;
      return (
        <g key={`steel-${i}`}>
          {/* Steel I-beam shape */}
          <rect
            className="steel-beam"
            x={startX}
            y={startY}
            width="400"
            height="60"
            rx="4"
          />
          
          {/* Top flange */}
          <rect
            className="steel-beam"
            x={startX}
            y={startY - 15}
            width="400"
            height="15"
            rx="2"
          />

          {/* Stress points showing damage */}
          {[0, 1, 2].map((p) => (
            <circle
              key={`stress-${i}-${p}`}
              className="stress-indicator"
              cx={startX + 80 + p * 120}
              cy={startY + 30}
              r="8"
              style={{ animationDelay: `${i * 1.5 + p * 0.3}s` }}
            />
          ))}

          {/* Repair wave traveling through beam */}
          {[0, 1, 2, 3, 4].map((p) => (
            <rect
              key={`repair-${i}-${p}`}
              className="repair-wave-element"
              x={startX + 60 + p * 70}
              y={startY + 20}
              width="50"
              height="20"
              rx="2"
              style={{ animationDelay: `${i * 1.5 + 2 + p * 0.15}s` }}
            />
          ))}

          {/* Strength restoration indicator */}
          <rect
            className="strength-indicator"
            x={startX}
            y={startY}
            width="400"
            height="60"
            rx="4"
            style={{ animationDelay: `${i * 1.5 + 2.8}s` }}
          />
        </g>
      );
    })}
  </svg>
);
