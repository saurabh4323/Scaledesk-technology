export default function ThreatTicker() {
  const items = [
    { type: 'red', text: 'Fraud Attempt Blocked · $12,400 · 3s ago' },
    { type: 'blue', text: 'Payment Verified · Enterprise Account' },
    { type: 'red', text: 'Anomalous Login · Flagged · IP: 194.xx.xx' },
    { type: 'blue', text: 'Churn Risk Mitigated · Account #8821' },
    { type: 'red', text: 'Duplicate Transaction · Blocked · $4,200' },
    { type: 'blue', text: 'Revenue Recovered · $28K · Q4' },
    { type: 'red', text: 'Velocity Fraud Detected · Card #xxxx' },
    { type: 'blue', text: 'Pipeline Protected · Deal Closed $180K' },
  ];

  return (
    <div className="w-full bg-[#020202] border-y border-white/5 py-3 overflow-hidden group">
      <div className="flex w-max animate-[ticker_30s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center px-8 text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">
            {item.type === 'red' ? (
               <><span className="mr-2 text-red-500">🔴</span> <span className="text-zinc-500">{item.text}</span></>
            ) : (
               <><span className="mr-2 text-blue-500">🔵</span> <span className="text-zinc-500">{item.text}</span></>
            )}
            <span className="ml-8 text-zinc-800">|</span>
          </div>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}} />
    </div>
  );
}
