import { useEffect, useRef, useState } from "react";
import "../dc-redesign.css";
import content from "../content.json";

const IMG = "/images/dc-redesign";

function buildVCard() {
  const v = content.vcard;
  return `BEGIN:VCARD
VERSION:3.0
FN:${v.fullName}
N:${v.lastName};${v.firstName};;;
ORG:${v.org}
TEL:${v.tel}
EMAIL:${v.email}
URL:${v.url}
X-SOCIALPROFILE;TYPE=instagram:${v.instagram}
END:VCARD`;
}

function downloadVCard() {
  const blob = new Blob([buildVCard()], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "DC-Vloeren.vcf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export default function DcRedesignPage() {
  const navToggleRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonState, setButtonState] = useState<"default" | "success" | "error">("default");

  // Same IntersectionObserver reveal used in the sketch — fades .reveal elements in once
  // 15% visible, then stops observing (one-shot, matches the sketch exactly).
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".dc-page .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // The mobile menu is a pure-CSS checkbox toggle that only reacts to the hamburger/X itself —
  // tapping a nav link navigates but leaves it checked, covering the page until closed by hand.
  // This closes it the moment a link is actually used.
  const closeMenu = () => {
    if (navToggleRef.current) navToggleRef.current.checked = false;
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });
  };

  // Sends via edd-dcvloeren's /contact-form route (Hetzner, Resend-backed) — replaced the old
  // Supabase edge function 12 Aug 2026, matching the pi-contact.ts pattern already proven on
  // machsyn.com/contact. See docs/dc_vloeren_launch_spec.md §9.
  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setButtonState("default");

    try {
      const response = await fetch("https://edd.dcvloeren.nl/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          description,
          topics: Array.from(selectedTopics),
        }),
      });

      if (!response.ok) {
        setButtonState("error");
        setTimeout(() => setButtonState("default"), 3000);
        return;
      }

      setButtonState("success");
      setTimeout(() => {
        setName("");
        setEmail("");
        setDescription("");
        setSelectedTopics(new Set());
      }, 3000);
    } catch {
      setButtonState("error");
      setTimeout(() => setButtonState("default"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitLabel =
    buttonState === "success"
      ? content.contact.submitLabelSuccess
      : buttonState === "error"
        ? content.contact.submitLabelError
        : content.contact.submitLabel;

  return (
    <div className="dc-page">
      <nav className="nav">
        <img src={`${IMG}/logo-mark.svg`} alt="DC" className="logo-mark" />
        <input type="checkbox" id="dc-nav-toggle" ref={navToggleRef} className="nav-toggle-input" />
        <label htmlFor="dc-nav-toggle" className="nav-toggle-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </label>
        <ul className="links">
          <li><a href="#vloeren" onClick={closeMenu}>{content.nav.vloeren}</a></li>
          <li><a href="#interieur" onClick={closeMenu}>{content.nav.interieur}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{content.nav.contact}</a></li>
        </ul>
      </nav>

      <section className="hero-track">
        <div className="hero-sticky">
          <div className="plank plank--left"></div>
          <div className="plank plank--center"></div>
          <div className="plank plank--right"></div>
          <div className="hero-copy">
            <img src={`${IMG}/logo-full.svg`} alt="DC Vloeren — Interieur" className="hero-logo" />
          </div>
        </div>
      </section>

      <div className="sheet">
        <section id="vloeren" className="section-pad">
          <div className="eyebrow reveal">{content.vloerenSection.eyebrow}</div>
          <h2 className="reveal heading-lg">{content.vloerenSection.heading}</h2>
          <div className="floor-grid">
            {content.floorCards.map((card) => (
              <div className="floor-card reveal" key={card.id}>
                <img src={`${IMG}/${card.image}`} alt={card.alt} />
                <div className="label"><h3>{card.title}</h3><p>{card.description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="interieur" className="section-pad">
          <div className="eyebrow reveal">{content.interieurSection.eyebrow}</div>
          <h2 className="reveal heading-lg">{content.interieurSection.heading}</h2>
          <div className="interieur-split">
            <img className="reveal" src={`${IMG}/interieur-split.webp`} alt="Interieur styling" />
            <div className="reveal">
              {content.interieurSection.rows.map((row, i) => (
                <div
                  className="interieur-row"
                  key={row.title}
                  style={i === content.interieurSection.rows.length - 1 ? { borderBottom: "none" } : undefined}
                >
                  <h3>{row.title}</h3>
                  <p>{row.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about">
          <div className="section-pad">
            <h2 className="reveal">{content.about.heading}</h2>
            <p className="reveal">{content.about.body}</p>
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="section-pad">
            <div className="eyebrow reveal">{content.contact.eyebrow}</div>
            <h2 className="reveal" style={{ marginTop: 12 }}>{content.contact.heading}</h2>
            <form className="reveal" onSubmit={handleSend}>
              <input
                type="text"
                placeholder={content.contact.namePlaceholder}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder={content.contact.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="topics-label">{content.contact.topicsLabel}</div>
              <div className="topics">
                {content.contact.topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    className={`topic-chip${selectedTopics.has(topic) ? " is-selected" : ""}`}
                    onClick={() => toggleTopic(topic)}
                    aria-pressed={selectedTopics.has(topic)}
                  >
                    {topic}
                  </button>
                ))}
              </div>

              <textarea
                placeholder={content.contact.descriptionPlaceholder}
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button type="submit" disabled={isSubmitting} className={buttonState !== "default" ? `is-${buttonState}` : ""}>
                {submitLabel}
              </button>
            </form>

            <button type="button" className="vcard-btn" onClick={downloadVCard}>
              {content.contact.vcardButtonLabel}
            </button>
          </div>
        </section>

        <footer>
          <span>{content.footer.copyright}</span>
          <span>{content.footer.builtByText} <a href={content.footer.builtByLinkHref}>{content.footer.builtByLinkLabel}</a></span>
        </footer>
      </div>
    </div>
  );
}
