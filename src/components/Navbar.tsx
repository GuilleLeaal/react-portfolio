'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';

type NavLink = { href: string; label: string };

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>('#hero');

  const panelRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const links: NavLink[] = useMemo(
    () => [
      { href: '#hero', label: 'Home' },
      { href: '#gweb', label: 'GWeb' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    []
  );

  // Active section highlight (robusto para sticky navbar)
  useEffect(() => {
    const ids = links.map((l) => l.href.replace('#', ''));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;

        // Elegimos la sección más cercana al top del viewport
        intersecting.sort(
          (a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0)
        );

        const topOne = intersecting[0]?.target as HTMLElement | undefined;
        if (topOne?.id) setActive(`#${topOne.id}`);
      },
      {
        root: null,
        // Ajuste típico para navbar sticky (aprox 80-100px de alto)
        rootMargin: '-96px 0px -60% 0px',
        threshold: 0.01,
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [links]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        btnRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  // Close on click outside
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      const t = e.target as Node | null;
      if (!t) return;
      if (panelRef.current?.contains(t)) return;
      if (btnRef.current?.contains(t)) return;
      setMenuOpen(false);
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [menuOpen]);

  const onNavClick = (href: string) => {
    setMenuOpen(false);

    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update URL hash without jump
    if (history.pushState) history.pushState(null, '', href);

    setActive(href);
  };

  const NavItem = ({ href, label }: NavLink) => {
    const isActive = active === href;

    return (
      <button
        type="button"
        onClick={() => onNavClick(href)}
        className={[
          'relative rounded-xl px-3 py-2 text-sm font-medium transition',
          'text-white/80 hover:text-white',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20',
        ].join(' ')}
        aria-current={isActive ? 'page' : undefined}
      >
        <span className="relative z-10">{label}</span>

        <span className="absolute inset-0 -z-0 rounded-xl bg-white/[0.06] opacity-0 transition-opacity hover:opacity-100" />

        <AnimatePresence>
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-teal-300 to-cyan-400"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.18 }}
            />
          )}
        </AnimatePresence>
      </button>
    );
  };

  return (
    <>
      {/* Skip link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:ring-2 focus:ring-teal-300/60"
      >
        Skip to content
      </a>

      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={[
          'sticky top-0 z-50',
          'border-b border-white/10',
          'bg-black/35 backdrop-blur-xl',
          'supports-[backdrop-filter]:bg-black/25',
        ].join(' ')}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('#hero');
              }}
              className="group flex items-baseline gap-2 rounded-xl px-2 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20"
              aria-label="Go to top"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-base font-semibold tracking-tight text-white">
                Guillermo Leal
              </span>
              <span className="text-xs font-medium text-white/55 group-hover:text-white/70 transition">
                Fullstack
              </span>
              <span className="ml-1 hidden h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.45)] sm:inline-block" />
            </motion.a>
          </div>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <NavItem key={l.href} {...l} />
            ))}

            <div className="mx-2 h-6 w-px bg-white/10" />

            <a
              href="/CV_GuillermoLeal.pdf"
              download
              className={[
                'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold',
                'text-white',
                'bg-gradient-to-r from-cyan-500 to-teal-400',
                'shadow-[0_10px_30px_rgba(34,211,238,0.15)]',
                'transition hover:brightness-110 active:brightness-95',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20',
              ].join(' ')}
            >
              <FiDownload className="text-lg" />
              Download CV
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              ref={btnRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className={[
                'inline-flex items-center justify-center rounded-xl px-3 py-2',
                'text-white/90 hover:text-white',
                'bg-white/[0.06] hover:bg-white/[0.10]',
                'border border-white/10',
                'transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black/20',
              ].join(' ')}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-nav"
              ref={panelRef}
              initial={{ opacity: 0, y: -6, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden"
              role="menu"
              aria-label="Mobile navigation"
            >
              <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  {links.map((l) => (
                    <button
                      key={l.href}
                      type="button"
                      onClick={() => onNavClick(l.href)}
                      className={[
                        'w-full rounded-xl px-3 py-3 text-left text-base font-medium',
                        'transition',
                        active === l.href
                          ? 'bg-white/[0.10] text-white'
                          : 'text-white/80 hover:bg-white/[0.06] hover:text-white',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60',
                      ].join(' ')}
                      role="menuitem"
                      aria-current={active === l.href ? 'page' : undefined}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  <a
                    href="/CV_GuillermoLeal.pdf"
                    download
                    onClick={() => setMenuOpen(false)}
                    className={[
                      'inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3',
                      'text-sm font-semibold text-white',
                      'bg-gradient-to-r from-cyan-500 to-teal-400',
                      'transition hover:brightness-110 active:brightness-95',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300/60',
                    ].join(' ')}
                  >
                    <FiDownload className="text-lg" />
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}