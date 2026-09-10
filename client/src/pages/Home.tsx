import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Circle,
  Menu,
  Minus,
  Plus,
  Sparkles,
  X,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "NOVA / Rituals",
    type: "Brand world · E-commerce",
    year: "2024",
    accent: "violet",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    title: "Lumen House",
    type: "Digital flagship · Hospitality",
    year: "2024",
    accent: "peach",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    title: "Arc / Objects",
    type: "Identity system · Retail",
    year: "2023",
    accent: "mint",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
  },
];

const process = [
  ["01", "Find the signal", "We listen for the thing that makes your work impossible to ignore."],
  ["02", "Make it tangible", "Strategy becomes a world: words, form, motion, and a point of view."],
  ["03", "Send it out", "A digital experience with enough pull to become part of the conversation."],
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a className={`wordmark ${light ? "wordmark-light" : ""}`} href="#top" aria-label="Morrow Studio home">
      <span className="wordmark-mark">M</span>
      <span>Morrow</span>
      <span className="wordmark-dot">✦</span>
    </a>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="site-shell">
      <div className="grain" aria-hidden="true" />
      <nav className="nav-wrap">
        <Wordmark />
        <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our approach</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Start a project</a>
        </div>
        <a className="nav-availability" href="mailto:hello@morrow.studio">
          <span className="pulse-dot" /> Available for Q4 <ArrowUpRight size={14} strokeWidth={1.7} />
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-star">✳</span> Independent digital studio · Est. 2018</div>
          <h1 className="hero-title">
            <span className="line-one">Make a little</span>
            <span className="line-two"><em>more</em> <span className="scribble-word">noise</span><span className="title-spark">✦</span></span>
            <span className="line-three">in the right places.</span>
          </h1>
          <div className="hero-lower">
            <p className="hero-intro">We build identities and digital experiences for people doing meaningful, slightly unreasonable things.</p>
            <a className="circle-cta" href="#work" aria-label="Explore our selected work">
              <span>Explore<br />the work</span>
              <ArrowDown size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun-glow" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-photo" />
          <div className="hero-cutout"><span>create<br />with intent</span></div>
          <div className="hero-sticker"><Sparkles size={20} strokeWidth={1.3} /><span>good<br />ideas<br /><i>travel</i></span></div>
          <div className="hero-rail"><span>scroll to wander</span><span className="rail-line" /></div>
          <div className="hero-index">01 <span>/</span> 04</div>
        </div>
      </section>

      <section className="marquee-band" aria-label="Studio services">
        <div className="marquee-track">
          {["Strategy", "Identity", "Websites", "Digital worlds", "Strategy", "Identity", "Websites", "Digital worlds"].map((item, index) => (
            <span key={`${item}-${index}`}>{item}<b>✦</b></span>
          ))}
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-topline" data-reveal><span>Selected work</span><span>2022 — 2024</span></div>
        <div className="work-intro" data-reveal>
          <h2>Small teams.<br /><em>Big</em> feelings.</h2>
          <p>We partner with founders and teams who care about the details. The kind of details that turn a click into a feeling, and a feeling into a following.</p>
        </div>
        <div className="project-stage" data-reveal>
          <div className="project-tabs" role="tablist" aria-label="Selected projects">
            {projects.map((project, index) => (
              <button key={project.number} className={`project-tab ${activeProject === index ? "project-tab-active" : ""}`} onClick={() => setActiveProject(index)} role="tab" aria-selected={activeProject === index}>
                <span>{project.number}</span><strong>{project.title}</strong><small>{project.year}</small>
              </button>
            ))}
          </div>
          <div className={`project-feature project-${projects[activeProject].accent}`}>
            <div className="project-image" style={{ backgroundImage: `url(${projects[activeProject].image})` }}>
              <div className="project-image-overlay" />
              <div className="project-image-label">View case study <ArrowUpRight size={16} /></div>
              <div className="project-image-symbol">{activeProject === 0 ? "N" : activeProject === 1 ? "L" : "A"}</div>
            </div>
            <div className="project-meta"><span>{projects[activeProject].type}</span><ArrowRight size={18} /><span>{projects[activeProject].year}</span></div>
          </div>
        </div>
      </section>

      <section id="about" className="approach-section">
        <div className="approach-visual" data-reveal>
          <div className="approach-circle approach-circle-one" />
          <div className="approach-circle approach-circle-two" />
          <div className="approach-circle approach-circle-three" />
          <div className="approach-note">No templates.<br />No shortcuts.<br /><em>Not sorry.</em></div>
          <div className="approach-vertical">The Morrow method / 2024</div>
        </div>
        <div className="approach-copy" data-reveal>
          <div className="eyebrow"><span className="eyebrow-star">✳</span> Our approach</div>
          <h2>There is a<br /><em>better</em> way<br />to be seen.</h2>
          <p>Not louder. Not busier. Just more you. We use strategy, story, and a sharp eye to make digital experiences that feel inevitable in hindsight.</p>
          <a className="text-link" href="#contact">More about Morrow <ArrowUpRight size={16} /></a>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="section-topline" data-reveal><span>How we work</span><span>Three moves</span></div>
        <div className="process-list">
          {process.map(([num, title, text], index) => (
            <div className="process-row" data-reveal key={num} style={{ transitionDelay: `${index * 80}ms` }}>
              <span className="process-num">{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <ArrowUpRight className="process-arrow" size={26} strokeWidth={1.25} />
            </div>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark">“</div>
        <blockquote data-reveal>They made the work feel<br /><em>like us, only clearer.</em></blockquote>
        <div className="quote-byline" data-reveal><span className="avatar avatar-mint">J</span><span>Jules Nguyen<br /><small>Founder, Lumen House</small></span></div>
      </section>

      <section className="faq-section section-pad">
        <div className="section-topline" data-reveal><span>Good to know</span><span>Before we begin</span></div>
        <div className="faq-grid">
          <h2 data-reveal>Questions,<br /><em>answered.</em></h2>
          <div className="faq-list" data-reveal>
            {[
              ["Are you taking on new projects?", "Yes. We keep our roster intentionally small so every project gets the thinking it deserves. We are currently booking for Q4."],
              ["What does a typical project look like?", "Usually 6–10 weeks from first conversation to launch, with a custom mix of strategy, identity, web design, and build."],
              ["Do you work with teams outside your timezone?", "Absolutely. Most of our best work happens across timezones. Clear thinking travels well."],
            ].map(([question, answer], index) => (
              <div className={`faq-item ${openQuestion === index ? "faq-item-open" : ""}`} key={question}>
                <button onClick={() => setOpenQuestion(openQuestion === index ? null : index)} aria-expanded={openQuestion === index}>
                  <span>{question}</span>{openQuestion === index ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-inner" data-reveal>
          <div className="eyebrow eyebrow-light"><span className="eyebrow-star">✳</span> Your move</div>
          <h2>Have a good<br /><em>one?</em></h2>
          <p>Tell us what you are dreaming up. We will bring the good questions.</p>
          <a className="contact-button" href="mailto:hello@morrow.studio">Start a conversation <ArrowUpRight size={20} /></a>
        </div>
        <div className="contact-rings" aria-hidden="true"><div /><div /><div /></div>
      </section>

      <footer className="site-footer">
        <Wordmark light />
        <div className="footer-note">Good work, on purpose.<br /><span>© Morrow Studio 2024</span></div>
        <div className="footer-links"><a href="#work">Instagram</a><a href="#work">Are.na</a><a href="mailto:hello@morrow.studio">Email us</a></div>
        <a className="back-top" href="#top" aria-label="Back to top"><Circle size={38} strokeWidth={1} /><ArrowDown size={16} /></a>
      </footer>
    </main>
  );
}

export default Home;

// keep an explicit default export for the template's route convention
void ArrowRight;
