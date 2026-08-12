import { useEffect, useRef, useState } from "react";
import "../dc-redesign.css";

const IMG = "/images/dc-redesign";

const TOPICS = [
  "parket",
  "laminaat",
  "pvc",
  "microcement",
  "traptreden",
  "renovatie",
  "akoestiek",
  "interieur",
] as const;
type Topic = (typeof TOPICS)[number];

// Real Dennis/DC Vloeren contact details — carried over from the old QrCode.tsx vCard feature.
// That version split desktop (scannable QR) vs mobile (direct download button); a QR only earns
// its keep as a separate-device flow, which doesn't apply here, so this is one button that
// downloads the same vCard on click regardless of device.
const VCARD = `BEGIN:VCARD
VERSION:3.0
FN:Dennis Cornelissen
N:Cornelissen;Dennis;;;
ORG:DC Vloeren
TEL:+31631232174
EMAIL:info@dcvloeren.nl
URL:https://dcvloeren.nl
X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/dcvloeren
END:VCARD`;

function downloadVCard() {
  const blob = new Blob([VCARD], { type: "text/vcard" });
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
  const [selectedTopics, setSelectedTopics] = useState<Set<Topic>>(new Set());
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

  const toggleTopic = (topic: Topic) => {
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
    buttonState === "success" ? "Verstuurd!" : buttonState === "error" ? "Mislukt, probeer opnieuw" : "Verstuur";

  return (
    <div className="dc-page">
      <nav className="nav">
        <img src={`${IMG}/logo-mark.svg`} alt="DC" className="logo-mark" />
        <input type="checkbox" id="dc-nav-toggle" ref={navToggleRef} className="nav-toggle-input" />
        <label htmlFor="dc-nav-toggle" className="nav-toggle-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </label>
        <ul className="links">
          <li><a href="#vloeren" onClick={closeMenu}>Vloeren</a></li>
          <li><a href="#interieur" onClick={closeMenu}>Interieur</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
          <div className="eyebrow reveal">Onze specialisaties</div>
          <h2 className="reveal" style={{ fontSize: 36, fontWeight: 300, marginTop: 12 }}>
            Vloeren op maat
          </h2>
          <div className="floor-grid">
            <div className="floor-card reveal">
              <img src={`${IMG}/card-parket.webp`} alt="Parket vloer" />
              <div className="label"><h3>Parket</h3><p>Hout, parket of laminaat</p></div>
            </div>
            <div className="floor-card reveal">
              <img src={`${IMG}/card-pvc.webp`} alt="PVC vloer" />
              <div className="label"><h3>PVC</h3><p>Duurzaam en slijtvast</p></div>
            </div>
            <div className="floor-card reveal">
              <img src={`${IMG}/card-microcement.webp`} alt="Microcement" />
              <div className="label"><h3>Microcement</h3><p>Naadloze betonlook</p></div>
            </div>
            <div className="floor-card reveal">
              <img src={`${IMG}/card-trappen.webp`} alt="Traptreden" />
              <div className="label"><h3>Traptreden</h3><p>Hout of PVC</p></div>
            </div>
            <div className="floor-card reveal">
              <img src={`${IMG}/card-renovatie.jpg`} alt="Renovatie" />
              <div className="label"><h3>Renovatie</h3><p>Oude vloer als nieuw</p></div>
            </div>
            <div className="floor-card reveal">
              <img src={`${IMG}/card-akoestiek.webp`} alt="Akoestiek wandpanelen" />
              <div className="label"><h3>Akoestiek</h3><p>Wandpanelen</p></div>
            </div>
          </div>
        </section>

        <section id="interieur" className="section-pad">
          <div className="eyebrow reveal">Interieuradvies</div>
          <h2 className="reveal" style={{ fontSize: 36, fontWeight: 300, marginTop: 12 }}>
            Vloer en interieur in harmonie
          </h2>
          <div className="interieur-split">
            <img className="reveal" src={`${IMG}/interieur-split.webp`} alt="Interieur styling" />
            <div className="reveal">
              <div className="interieur-row">
                <h3>Interieur</h3>
                <p>
                  Ons team voorziet desgewenst van interieur-advies en selectie voor de perfecte
                  harmonie tussen vloer en interieur.
                </p>
              </div>
              <div className="interieur-row" style={{ borderBottom: "none" }}>
                <h3>Akoestiek</h3>
                <p>
                  Verbeter ruimteakoestiek met geluidsabsorberende wandpanelen in diverse
                  decoratieve stijlen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="section-pad">
            <h2 className="reveal">
              Dennis Cornelissen is vloerspecialist met een passie voor interieur en
              binnenhuis-architectuur
            </h2>
            <p className="reveal">
              Met jarenlange ervaring in het plaatsen en renoveren van houten vloeren en trappen,
              parket en PVC, wordt de vloer vakkundig geplaatst naar de hoogste kwaliteitseisen en
              in ieder gewenst patroon. Desgewenst adviseert DC vloeren &amp; interieur over de
              perfecte harmonie tussen vloer, interieur en akoestiek in uw woning, winkel of
              bedrijfspand.
            </p>
          </div>
        </section>

        <section id="contact" className="cta">
          <div className="section-pad">
            <div className="eyebrow reveal">Offerte</div>
            <h2 className="reveal" style={{ marginTop: 12 }}>Vraag vrijblijvend een offerte aan</h2>
            <form className="reveal" onSubmit={handleSend}>
              <input
                type="text"
                placeholder="Naam"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="topics-label">Selecteer benodigdheden</div>
              <div className="topics">
                {TOPICS.map((topic) => (
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
                placeholder="Waar kunnen we u mee helpen? (bijv. type vloer, oppervlakte, gewenste periode)"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>

              <button type="submit" disabled={isSubmitting} className={buttonState !== "default" ? `is-${buttonState}` : ""}>
                {submitLabel}
              </button>
            </form>

            <button type="button" className="vcard-btn" onClick={downloadVCard}>
              Voeg DC toe als contact
            </button>
          </div>
        </section>

        <footer>
          <span>© 2026 DC vloeren en interieur</span>
          <span>gebouwd door <a href="https://endandit.nl">Edd van EnDanDit</a></span>
        </footer>
      </div>
    </div>
  );
}
