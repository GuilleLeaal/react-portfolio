import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaRocket, FaPalette, FaSearch, FaGlobe } from "react-icons/fa";
import gwebLogo from "../assets/gweb-logo.svg";

const FEATURES = [
  {
    icon: <FaPalette />,
    title: "Design with intent",
    text: "Clear hierarchy, readable sections and a premium look focused on trust — not decoration.",
  },
  {
    icon: <FaRocket />,
    title: "Conversion-first structure",
    text: "Pages are built to guide the user naturally: clear offer, proof, and frictionless contact.",
  },
  {
    icon: <FaSearch />,
    title: "SEO & performance baseline",
    text: "Fast load, clean metadata, and fundamentals that help the site show up on Google and feel solid.",
  },
];

const SCOPE = [
  "Landing pages & business websites",
  "Ecommerce (Shopify or custom solutions)",
  "Custom web systems (inventory, CRM, internal tools)",
  "Scalable backend architecture (Node / NestJS / DB)",
];

export default function GWeb() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="gweb"
      className="relative overflow-hidden bg-gradient-to-b from-[#0f1020] via-[#0b0b14] to-[#0a0a12] py-24 scroll-mt-28"
      aria-label="GWeb section"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[160px]" />
        <div className="absolute -bottom-56 right-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-400/8 blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.08),transparent_45%),radial-gradient(circle_at_85%_35%,rgba(34,211,238,0.06),transparent_45%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? undefined : { opacity: 0, y: 14 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.18)]">
              <img src={gwebLogo} alt="GWeb logo" className="h-16 w-16 opacity-95" />
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.45)]" />
            Digital product studio · Real client work
          </div>

          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            GWeb <span className="text-emerald-300">— Digital Studio</span>
          </h2>

          <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            GWeb is my digital product studio where I design and build websites, ecommerce platforms and custom web
            systems.
            <br />
            From high-converting landing pages to scalable management tools, each project is built with clean
            architecture, performance and real-world usability in mind.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Left: scope + features */}
          <div className="space-y-6">
            <motion.div
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold text-white">Scope</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                A flexible studio approach — the solution adapts to the business need, from simple to scalable.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {SCOPE.map((d) => (
                  <div
                    key={d}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/75"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"
                >
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: mini case + CTA */}
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <FaGlobe className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">How I deliver</h3>
                <p className="text-sm text-white/65">A repeatable workflow for real projects.</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/70">
              <p>
                I use GWeb to deliver modern digital solutions with consistent quality: clear structure, strong UI,
                performance fundamentals and a maintainable codebase.
              </p>
              <p>
                Projects can range from simple websites to ecommerce setups and custom management systems — the goal is
                always a practical solution that scales with the business.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://instagram.com/gweb.oficial"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-3",
                  "text-sm font-semibold text-white",
                  "bg-emerald-600/90 hover:bg-emerald-600",
                  "transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
                ].join(" ")}
                aria-label="Open GWeb on Instagram"
              >
                <FaInstagram className="text-lg" />
                Instagram
              </a>

              <a
                href="https://gweb.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "inline-flex w-full items-center justify-center gap-3 rounded-2xl px-6 py-3",
                  "text-sm font-semibold text-white/90",
                  "border border-white/12 bg-white/[0.04] hover:bg-white/[0.07] hover:text-white",
                  "transition",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20",
                ].join(" ")}
                aria-label="Open GWeb website"
              >
                <FaRocket className="text-lg" />
                Website
              </a>
            </div>

            <div className="mt-4 text-center text-xs text-white/45">
              Digital studio · websites, ecommerce and custom web systems
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}