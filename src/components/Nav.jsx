import React from "react";

export default function Nav({ onTab }) {
  return (
    <nav className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl grid place-items-center bg-[linear-gradient(135deg,#071026,#0b1220)] text-glowblue text-lg font-semibold" style={{color:"#2ca6ff"}}>
          E
        </div>
        <div>
          <div className="text-lg font-semibold">Ellen</div>
          <div className="text-sm text-muted">Writer • Developer</div>
        </div>
      </div>

      <ul className="flex items-center gap-6 text-muted">
        <li><button onClick={() => onTab("home")} className="hover:text-white">Home</button></li>
        <li><button onClick={() => onTab("projects")} className="hover:text-white">Projects</button></li>
        <li><button onClick={() => onTab("socials")} className="hover:text-white">Socials</button></li>
      </ul>
    </nav>
  );
}
