"use client";

import BrandLogo from "./BrandLogo";

const KEYBOARD_ROWS = [
  { keys: ["esc", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "del"], sizes: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.3] },
  { keys: ["tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"], sizes: [1.3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.2] },
  { keys: ["caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "enter"], sizes: [1.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.8] },
  { keys: ["shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "shift"], sizes: [1.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1.9] },
  { keys: ["fn", "ctrl", "opt", "cmd", "", "cmd", "opt", "←", "↑", "↓", "→"], sizes: [1, 1, 1, 1, 5.5, 1, 1, 1, 1, 1, 1] },
];

export default function LaptopScene({
  lidRef,
  screenGlowRef,
  logoCenterRef,
}) {
  return (
    <>
      <style>{`
        .laptop-body {
          position: relative;
          width: 540px;
          height: 470px;
          transform-style: preserve-3d;
        }

        /* ── LID / SCREEN ── */
        .laptop-lid {
          position: absolute;
          bottom: 152px;
          left: 0;
          width: 540px;
          height: 318px;
          transform-origin: center bottom;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .lid-shell {
          width: 100%;
          height: 100%;
          background: linear-gradient(155deg, #5c5c62 0%, #3a3a3e 18%, #252528 45%, #18181b 72%, #101012 100%);
          border-radius: 14px 14px 4px 4px;
          border: 1px solid #6b6b70;
          border-bottom: 2px solid #0c0c0e;
          position: relative;
          overflow: hidden;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.22),
            inset 0 -2px 6px rgba(0,0,0,0.45),
            0 -12px 40px rgba(0,0,0,0.55);
        }

        .lid-shell::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%);
          pointer-events: none;
          z-index: 5;
        }

        .lid-webcam {
          position: absolute;
          top: 9px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, #1a1a22, #050508);
          border: 1px solid #2a2a30;
          box-shadow: inset 0 0 3px rgba(0,0,0,0.8);
          z-index: 6;
        }

        .screen-bezel {
          position: absolute;
          top: 22px;
          left: 16px;
          right: 16px;
          bottom: 16px;
          border-radius: 6px;
          background: #030308;
          overflow: hidden;
          border: 1px solid #0a0a10;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 2px 20px rgba(0,0,0,0.6);
        }

        .screen-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0.06) 40%, transparent 70%);
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          will-change: opacity;
        }

        .screen-window {
          position: absolute;
          inset: 0;
          z-index: 2;
          display: flex;
          flex-direction: column;
          background: linear-gradient(165deg, #0c1220 0%, #060a14 45%, #030508 100%);
        }

        .screen-titlebar {
          flex-shrink: 0;
          height: 24px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 5px;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .traffic-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .traffic-dot.red { background: #ff5f57; box-shadow: 0 0 4px rgba(255,95,87,0.4); }
        .traffic-dot.yellow { background: #febc2e; box-shadow: 0 0 4px rgba(254,188,46,0.3); }
        .traffic-dot.green { background: #28c840; box-shadow: 0 0 4px rgba(40,200,64,0.3); }

        .screen-titlebar span {
          margin-left: 6px;
          font-size: 8px;
          color: #64748b;
          letter-spacing: 0.04em;
          font-weight: 500;
        }

        .screen-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 10px 18px 14px;
          text-align: center;
          position: relative;
          gap: 6px;
        }

        .screen-brand-block {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .screen-logo-wrap {
          position: relative;
          width: 280px;
          height: 52px;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .screen-tagline {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: linear-gradient(90deg, #fff 0%, #93c5fd 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 8px;
          line-height: 1.3;
        }

        .screen-desc {
          font-size: 8.5px;
          line-height: 1.55;
          color: #94a3b8;
          font-weight: 400;
          max-width: 92%;
          margin: 0 auto;
        }

        .screen-scanline {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.012) 2px,
            rgba(255,255,255,0.012) 3px
          );
          pointer-events: none;
          z-index: 3;
        }

        /* ── KEYBOARD DECK ── */
        .laptop-deck {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 540px;
          height: 152px;
          transform-style: preserve-3d;
          background: linear-gradient(180deg, #323236 0%, #222225 12%, #1a1a1d 55%, #121214 100%);
          border-radius: 0 0 16px 16px;
          border: 1px solid #48484d;
          border-top: 1px solid #1a1a1c;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.1),
            0 24px 64px rgba(0,0,0,0.75),
            0 8px 28px rgba(0,0,0,0.55);
        }

        .laptop-deck::before {
          content: '';
          position: absolute;
          top: 0;
          left: 10px;
          right: 10px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #0a0a0c 15%, #3f3f44 50%, #0a0a0c 85%, transparent);
          border-radius: 0 0 2px 2px;
        }

        .laptop-deck-edge {
          position: absolute;
          bottom: -10px;
          left: 4px;
          right: 4px;
          height: 10px;
          background: linear-gradient(180deg, #161618, #08080a);
          border-radius: 0 0 18px 18px;
          border: 1px solid #222226;
          border-top: none;
          transform: rotateX(-52deg);
          transform-origin: top center;
          box-shadow: 0 16px 40px rgba(0,0,0,0.6);
        }

        .keyboard-area {
          padding: 14px 16px 6px;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .key-row {
          display: flex;
          gap: 3px;
          justify-content: center;
        }

        .kb-key {
          min-width: 0;
          height: 20px;
          background: linear-gradient(180deg, #45454a 0%, #2e2e32 35%, #222226 70%, #1a1a1e 100%);
          border: 1px solid #0c0c0e;
          border-radius: 4px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.09),
            0 2px 3px rgba(0,0,0,0.45),
            inset 0 -1px 0 rgba(0,0,0,0.3);
          font-size: 7.5px;
          font-weight: 600;
          color: #d4d4d8;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-jetbrains-mono), ui-monospace, monospace;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .kb-key.blank {
          color: transparent;
        }

        .trackpad {
          width: 148px;
          height: 38px;
          margin: 6px auto 10px;
          background: linear-gradient(180deg, #2a2a2e 0%, #1e1e22 100%);
          border-radius: 6px;
          border: 1px solid #0e0e10;
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.05),
            inset 0 -2px 6px rgba(0,0,0,0.35),
            0 1px 0 rgba(255,255,255,0.04);
        }
      `}</style>

      <div ref={lidRef} className="laptop-lid">
        <div className="lid-shell">
          <div className="lid-webcam" />
          <div className="screen-bezel">
            <div ref={screenGlowRef} className="screen-glow" />
            <div className="screen-window">
              <div className="screen-titlebar">
                <div className="traffic-dot red" />
                <div className="traffic-dot yellow" />
                <div className="traffic-dot green" />
                <span>scaledesk — engineering portal</span>
              </div>

              <div className="screen-body">
                <div ref={logoCenterRef} className="screen-brand-block">
                  <div className="screen-logo screen-logo-wrap">
                    <BrandLogo variant="medium" />
                  </div>
                  <p className="screen-tagline">Engineering What&apos;s Next</p>
                </div>
                <p className="screen-desc">
                  We engineer intelligent digital products that drive innovation,
                  operational efficiency, and sustainable business growth.
                </p>
                <div className="screen-scanline" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="laptop-deck">
        <div className="keyboard-area">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="key-row">
              {row.keys.map((label, ki) => (
                <div
                  key={`${ri}-${ki}`}
                  className={`kb-key${label === "" ? " blank" : ""}`}
                  style={{ flex: `${row.sizes[ki]} 1 0` }}
                >
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="trackpad" />
        <div className="laptop-deck-edge" />
      </div>
    </>
  );
}
