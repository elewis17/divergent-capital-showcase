import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./divergent.css";

const email = "admin@divergentcapitalllc.com";
const leaseLens = "https://elewis17.github.io/lease-lens-dash/";

function Wordmark() {
  return <a href="/" className="dc-wordmark" aria-label="Divergent Capital home">
    <span>Divergent<span className="dc-wordmark-cut">.</span></span>
    <span>Capital</span>
  </a>;
}

export default function Index() {
  const [draft, setDraft] = useState("");

  function openEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name")).trim();
    const message = String(fields.get("message")).trim();
    if (!name || !message) {
      setDraft("Enter your name and a message to continue.");
      return;
    }
    const body = encodeURIComponent(message + "\r\n\r\n" + name);
    window.location.href = "mailto:" + email + "?subject=Divergent%20Capital%20inquiry&body=" + body;
    setDraft("Send your draft from your email app. You can also copy the address above.");
  }

  return (
    <div className="dc">
      <a className="dc-skip" href="#main">Skip to content</a>
      <header className="dc-header dc-shell">
        <Wordmark />
        <nav aria-label="Main navigation">
          <a href="#approach">Approach</a>
          <a href="#work">Ventures</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main id="main">
        <section className="dc-hero dc-shell">
          <div className="dc-hero-copy">
            <p className="dc-label"><span className="dc-dot" /> Independent investment &amp; technology</p>
            <h1>Invest with<br />perspective.<br /><em>Build with intent.</em></h1>
            <p className="dc-intro">Divergent Capital is a privately held firm focused on real estate investment and building software.</p>
            <a className="dc-inline" href="#work">Explore our ventures <ArrowDown aria-hidden="true" /></a>
          </div>
          <div className="dc-hero-image">
            <img src="/stone-study.webp" alt="" fetchPriority="high" width="1400" height="1000" />
          </div>
        </section>

        <section id="approach" className="dc-approach">
          <div className="dc-shell dc-editorial">
            <p className="dc-label">Our approach</p>
            <div>
              <h2>Think like an owner.</h2>
              <p className="dc-section-intro">We take a long-term view of real estate and build software around the decisions that come with owning and operating it.</p>
              <dl className="dc-principles">
                <div><dt>Real estate</dt><dd>Evaluate a property through the terms of its leases, its operating needs, and how both might change over time.</dd></div>
                <div><dt>Technology</dt><dd>Start with a decision someone needs to make. Build around the information they need to make it.</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section id="work" className="dc-work dc-shell">
          <div className="dc-work-heading">
            <p className="dc-label">Ventures</p>
            <h2>What we’re building.</h2>
          </div>
          <article className="dc-lease">
            <div className="dc-lease-art" aria-hidden="true">
              <div className="dc-document">
                <div className="dc-document-title"><span>Lease Lens</span><span>Deal analysis</span></div>
                <div><span>Property</span><i /></div>
                <div><span>Lease terms</span><i /></div>
                <div><span>Income &amp; costs</span><i /></div>
                <div className="dc-document-note">Illustrative worksheet</div>
              </div>
            </div>
            <div className="dc-venture-copy">
              <p className="dc-label">Real estate software</p>
              <h3>Lease Lens</h3>
              <p>A real estate application for reviewing properties, organizing lease information, and analyzing deals.</p>
              <a className="dc-inline" href={leaseLens}>Open Lease Lens <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </article>
        </section>

        <section className="dc-alfred">
          <div className="dc-shell dc-alfred-layout">
            <div>
              <p className="dc-label">Engineering showcase</p>
              <h2>Alfred<span>.</span></h2>
              <p>Explore the projects and applications behind Divergent Capital in our private directory.</p>
              <a className="dc-inline" href="https://divergent-capital-alfred-staging.humorousgleam2.chatgpt.site/alfred/access/">Enter Alfred <ArrowUpRight aria-hidden="true" /></a>
            </div>
            <div className="dc-alfred-art" aria-hidden="true">
              <div className="dc-orbit dc-orbit-outer" />
              <div className="dc-orbit dc-orbit-inner" />
              <div className="dc-orbit dc-orbit-core" />
              <span>A</span>
            </div>
          </div>
        </section>

        <section id="contact" className="dc-contact dc-shell">
          <div>
            <p className="dc-label">Contact</p>
            <h2>Get in touch.</h2>
            <a className="dc-inline dc-email" href={"mailto:" + email}>{email} <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <form onSubmit={openEmail}>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" autoComplete="name" required maxLength={100} />
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows={4} required maxLength={800} />
            <button type="submit">Open email draft <ArrowRight aria-hidden="true" /></button>
            <p className="dc-form-note" role="status">{draft || "Your email app opens with a draft for you to send."}</p>
          </form>
        </section>
      </main>
      <footer className="dc-footer">
        <div className="dc-shell">
          <Wordmark />
          <p>© {new Date().getFullYear()} Divergent Capital LLC</p>
          <nav aria-label="Legal">
            <Link to="/privacy-policy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </nav>
          <a href="#main" aria-label="Back to top" className="dc-footer-top"><ArrowDown aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  );
}
