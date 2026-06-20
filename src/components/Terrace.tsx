"use client";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Terrace() {
  const bgRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const section = bgRef.current.parentElement;
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const offset = rect.top * 0.3;
        bgRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-[70vh] overflow-hidden flex items-center justify-center" ref={ref}>
      <div ref={bgRef} className="absolute inset-[-10%] will-change-transform">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)" }}
        />
        <div className="absolute inset-0 bg-dark-chocolate/55" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <p className="section-subtitle text-gold mb-6">Сезонное пространство</p>
        <h2 className="font-serif text-5xl md:text-7xl text-cream mb-6 leading-tight">
          Лето<br />
          <span className="text-gold italic">в городе</span>
        </h2>
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        <p className="text-cream/80 text-lg max-w-xl mx-auto mb-10">
          Наслаждайтесь тёплыми днями и уютными вечерами на нашей красиво оформленной летней террасе.
        </p>
        <a href="#reservation" className="btn-primary">Забронировать место на террасе</a>
      </motion.div>
    </section>
  );
}
