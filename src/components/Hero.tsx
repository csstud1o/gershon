"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Steam particle
function Steam({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-1 rounded-full bg-white/20"
      style={{ left: `${x}%`, bottom: "30%" }}
      animate={{
        y: [-10, -80],
        opacity: [0, 0.5, 0],
        scaleX: [1, 1.5, 0.5],
      }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "easeOut" }}
    />
  );
}

// Floating coffee bean
function CoffeeBean({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <motion.div
      className="absolute w-3 h-2 rounded-full bg-gold/20 border border-gold/30"
      style={{ left: `${x}%`, top: `${y}%` }}
      animate={{ y: [-10, 10], rotate: [0, 360], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

const heroImages = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80",
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80",
];

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background image with parallax */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <div
          className="w-full h-full bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroImages[0]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-chocolate/70 via-dark-chocolate/50 to-dark-chocolate/80" />
      </div>

      {/* Steam particles */}
      {[15, 25, 35, 50, 65, 75, 85].map((x, i) => (
        <Steam key={i} x={x} delay={i * 0.5} />
      ))}

      {/* Floating coffee beans */}
      {[
        { x: 10, y: 20, d: 0 }, { x: 85, y: 30, d: 1 }, { x: 20, y: 70, d: 2 },
        { x: 75, y: 65, d: 0.5 }, { x: 45, y: 15, d: 1.5 },
      ].map((b, i) => (
        <CoffeeBean key={i} x={b.x} y={b.y} delay={b.d} />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Pre-title line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        >
          <div className="h-px w-16 bg-gold" />
          <span className="section-subtitle text-gold">Premium Café • Moscow</span>
          <div className="h-px w-16 bg-gold" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          className="font-serif text-7xl md:text-9xl text-cream tracking-[0.15em] mb-6 leading-none"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8 }}
        >
          ГЕРШОН
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-serif italic text-xl md:text-2xl text-cream/80 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          A place where every cup tells a story.
        </motion.p>

        {/* Subheadline */}
        <motion.p
          className="text-cream/60 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          Премиальный кофе, авторские завтраки, изысканные бранчи и незабываемые вечера в сердце Москвы.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.7 }}
        >
          <a href="#reservation" className="btn-primary">Забронировать стол</a>
          <a href="#menu" className="btn-outline">Смотреть меню</a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          {[
            { num: "1000+", label: "Гостей в месяц" },
            { num: "10:00", label: "Открываемся" },
            { num: "22:00", label: "Закрываемся" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl text-gold">{s.num}</p>
              <p className="text-cream/50 text-xs tracking-wider uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-cream/40 text-xs tracking-[0.3em] uppercase">Прокрутите</span>
        <ChevronDown size={20} className="text-gold" />
      </motion.div>
    </section>
  );
}
