import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import SocialButton from "./components/SocialButton";
import SkillBadge from "./components/SkillBadge";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsMoonStars } from "react-icons/bs";
import { SiPython, SiDjango, SiFlask, SiJavascript, SiNodedotjs, SiExpress, SiTypescript, SiHtml5, SiCss3, SiCanva, SiMicrosoftpowerpoint } from "react-icons/si";

export default function App() {
  const [tab, setTab] = useState("home");
  const [theme, setTheme] = useState("dark"); // dark by default
  const [proxActive, setProxActive] = useState(false);

  useEffect(() => {
    document.documentElement.style.backgroundImage = theme === "dark"
      ? "radial-gradient(1200px 400px at 10% 8%, rgba(44,166,255,0.04), transparent), linear-gradient(180deg,#02030a 0%, #020517 30%, #040616 100%)"
      : "linear-gradient(180deg,#f8fafc,#eef2ff)";
    document.body.style.color = theme === "dark" ? "#e8f1ff" : "#07101a";
  }, [theme]);

  // placeholder socials (replace with your real urls)
  const socials = {
    instagram: "https://instagram.com/your_username",
    linkedin: "https://linkedin.com/in/your_profile",
    whatsapp: "https://wa.me/yourphonenumber"
  };

  // proximity handling for glow (pointer/touch)
  useEffect(() => {
    const buttons = Array.from(document.querySelectorAll(".btn-glow"));
    function updateProx(x, y) {
      let any = false;
      buttons.forEach(el => {
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const d = Math.hypot(cx - x, cy - y);
        const TH = 90;
        if (d < TH) { el.classList.add("prox"); any = true; } else el.classList.remove("prox");
      });
      setProxActive(any);
    }
    function onPointer(e) { updateProx(e.clientX, e.clientY); }
    function onTouch(e) { if (e.touches[0]) updateProx(e.touches[0].clientX, e.touches[0].clientY); }
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  useEffect(() => {
    // load saved theme
    const s = localStorage.getItem("ellen_theme");
    if (s) setTheme(s);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("ellen_theme", next);
    // tiny click feedback
    const el = document.getElementById("themeBtn");
    if (el) el.animate([{ transform: "scale(.98)" }, { transform: "scale(1)" }], { duration: 220, easing: "cubic-bezier(.2,.9,.3,1)" });
  }

  return (
    <div className="min-h-screen" style={{ transition: "background 300ms ease, color 300ms ease" }}>
      <div className="container">
        <Nav onTab={setTab} />

        {/* header */}
        <header className="mt-8 flex items-start gap-8">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Ellen</h1>
            <p className="mt-2 text-muted max-w-xl">
              Where code meets carefully-crafted stories. I build user-centered web apps and write long-form fiction — both with the same obsession for polish and clarity.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <SocialButton id="insta" href={socials.instagram} title="Instagram">
                <FaInstagram size={20} />
              </SocialButton>

              <SocialButton id="wa" href={socials.whatsapp} title="WhatsApp">
                <FaWhatsapp size={20} />
              </SocialButton>

              <SocialButton id="li" href={socials.linkedin} title="LinkedIn">
                <FaLinkedin size={20} />
              </SocialButton>

              <button id="themeBtn" onClick={toggleTheme} className="btn-circle btn-glow" title="Switch theme" aria-label="Switch theme">
                <BsMoonStars size={18} />
              </button>
            </div>

            <div className="mt-8">
              <div className="text-lg font-semibold mb-3">About</div>

              <div className="prose text-muted max-w-none" style={{ color: "var(--tw-text-opacity, 1) rgba(170,186,199,0.9)" }}>
                <p>
                  I'm a hands-on builder who treats software like writing: architecture as grammar, APIs as voice, and UX as pacing. I learn by shipping — creating small playable prototypes, iterating fast, and polishing the interface until the experience feels intuitive.
                </p>

                <p>
                  Technically, I work across Python (Flask, Django) and modern JavaScript stacks (React, Node.js, Express.js, TypeScript). I focus on building reliable server-side logic, clean REST/GraphQL endpoints, and responsive front-ends that degrade gracefully. I care deeply about testable code, readable structure, and performance optimizations that actually improve user experience — not micro-optimizations for their own sake.
                </p>

                <p>
                  Beyond code, I design narrative: microcopy, onboarding flows, and error messages that speak human. I combine storytelling sensibilities with engineering rigor — so a project is both enjoyable and maintainable. When I approach a new idea (from a SIH problem statement to a personal writing brand), I first map the user journey, prototype a minimal viable flow, then expand features iteratively while keeping the product tight and focused.
                </p>
              </div>
            </div>
          </div>

          {/* right column */}
          <aside className="w-80 hidden md:block">
            <div className="rounded-xl p-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
              <div className="text-sm text-muted">Quick Info</div>
              <div className="mt-3">
                <div className="text-xs text-muted">Location</div>
                <div className="font-medium">India</div>
              </div>
              <div className="mt-4">
                <div className="text-xs text-muted">Skills</div>
                <div className="mt-2 grid gap-2">
                  <SkillBadge><SiPython /> <span className="ml-2">Python</span></SkillBadge>
                  <SkillBadge><SiFlask /> <span className="ml-2">Flask</span></SkillBadge>
                  <SkillBadge><SiDjango /> <span className="ml-2">Django</span></SkillBadge>
                </div>
              </div>
            </div>
          </aside>
        </header>

        {/* content tabs */}
        <main className="mt-10">
          {tab === "home" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <SkillBadge><SiPython /> <span className="ml-2">Python</span></SkillBadge>
                <SkillBadge><SiFlask /> <span className="ml-2">Flask</span></SkillBadge>
                <SkillBadge><SiDjango /> <span className="ml-2">Django</span></SkillBadge>
                <SkillBadge><SiJavascript /> <span className="ml-2">JavaScript</span></SkillBadge>
                <SkillBadge><SiNodedotjs /> <span className="ml-2">Node.js</span></SkillBadge>
                <SkillBadge><SiExpress /> <span className="ml-2">Express.js</span></SkillBadge>
                <SkillBadge><SiTypescript /> <span className="ml-2">TypeScript</span></SkillBadge>
                <SkillBadge><SiHtml5 /> <span className="ml-2">HTML</span></SkillBadge>
                <SkillBadge><SiCss3 /> <span className="ml-2">CSS</span></SkillBadge>
                <SkillBadge><SiCanva /> <span className="ml-2">Canva</span></SkillBadge>
                <SkillBadge><SiMicrosoftpowerpoint /> <span className="ml-2">PowerPoint</span></SkillBadge>
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <p className="text-muted">Below are placeholders — add your links & descriptions in the repo. Suggested projects to include:</p>

                <ul className="mt-4 space-y-3 text-muted">
                  <li>• <strong>Phoequills</strong> — writing brand website (your authored website)</li>
                  <li>• <strong>SIH Problem Statement</strong> — the Smart India Hackathon project entry (you can add this as a project)</li>
                  <li>• <strong>Uni-Verse</strong> — your college app project</li>
                  <li>• <strong>Other Apps</strong> — mobile/web apps you built</li>
                </ul>

                <div className="mt-5 text-sm text-muted">
                  <div>Want tabs for each project? Use the Projects tab above — I left them as placeholders so you can paste links and descriptions easily.</div>
                </div>
              </div>
            </section>
          )}

          {tab === "projects" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Projects (placeholders)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <article className="p-5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
                  <h3 className="font-semibold">Phoequills — Writing Brand</h3>
                  <p className="text-muted mt-2">Small site featuring featured stories, blog posts, and newsletter signup. (Add your link.)</p>
                </article>

                <article className="p-5 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)]">
                  <h3 className="font-semibold">SIH Problem Statement</h3>
                  <p className="text-muted mt-2">Description of the challenge, approach you took, and any demos or deployment. (Add your repo or demo link.)</p>
                </article>
              </div>
            </section>
          )}

          {tab === "socials" && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">Socials</h2>
              <p className="text-muted mb-4">Follow me, or use these links to contact:</p>

              <div className="flex items-center gap-4">
                <SocialButton href={socials.instagram} title="Instagram">
                  <FaInstagram />
                </SocialButton>
                <SocialButton href={socials.whatsapp} title="WhatsApp">
                  <FaWhatsapp />
                </SocialButton>
                <SocialButton href={socials.linkedin} title="LinkedIn">
                  <FaLinkedin />
                </SocialButton>
              </div>
            </section>
          )}
        </main>

        <footer className="mt-12 py-10 text-center text-muted">
          © {new Date().getFullYear()} Ellen — Crafted with care.
        </footer>
      </div>
    </div>
  );
}
