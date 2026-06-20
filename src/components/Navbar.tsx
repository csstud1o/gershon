"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "#about", label: "О нас" },
  { href: "#menu", label: "Меню" },
  { href: "#interior", label: "Интерьер" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#location", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-dark-chocolate/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 2.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl text-cream tracking-[0.2em]">ГЕРШОН</a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-cream/80 hover:text-gold text-sm tracking-wider transition-colors duration-300 uppercase font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+79258888939" className="flex items-center gap-2 text-gold text-sm hover:text-cream transition-colors">
            <Phone size={14} /> +7 (925) 888-89-39
          </a>
          <a href="#reservation" className="btn-primary text-xs px-5 py-2">Бронь</a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="md:hidden bg-dark-chocolate/98 backdrop-blur-md"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
        >
          <ul className="flex flex-col items-center py-8 gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-cream text-lg tracking-wider uppercase" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#reservation" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Забронировать стол
            </a>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
