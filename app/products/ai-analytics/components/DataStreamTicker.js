"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  "● REVENUE SIGNAL +2.4%",
  "● CHURN RISK: LOW",
  "● 3 ANOMALIES FLAGGED",
  "● LEAD SCORE UPDATED",
  "● PIPELINE VELOCITY ↑18%",
  "● FRAUD ATTEMPT BLOCKED",
  "● MODEL RETRAINED 4H AGO",
  "● 99.97% UPTIME"
];

const DataStreamTicker = () => {
  return (
    <div className="w-full bg-[#0f0f0f] border-y border-white/10 py-4 overflow-hidden relative z-10">
      <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {TICKER_ITEMS.map((item, idx) => (
              <span 
                key={idx} 
                className={`mx-12 text-[13px] font-mono font-bold tracking-wider ${
                  item.includes("+") || item.includes("↑") || item.includes("UPTIME") 
                    ? "text-[#00ff88]" 
                    : "text-zinc-500"
                }`}
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DataStreamTicker;
