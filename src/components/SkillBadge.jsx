import React from "react";

export default function SkillBadge({ children }) {
  return (
    <div className="px-3 py-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-sm flex items-center gap-2">
      {children}
    </div>
  );
}
