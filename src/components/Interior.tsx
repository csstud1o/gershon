"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80", label: "Кофе-бар", span: "col-span-2" },
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", label: "Зал ресторана", span: "" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80", label: "Детали декора", span: "" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80", label: "Открытая кухня", span: "" },
  { src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80", label: "Летняя терраса", span: "col-span-2" },
];

export default function Interior() {
  const [selected, setSelected] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="interior" className="py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle mb-4">Пространство</p>
          <h2 className="section-title">Интерьер <span className="text-gold italic">Гершона</span></h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative group cursor-pointer overflow-hidden ${img.span} h-64 md:h-80`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setSelected(img.src)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark-chocolate/0 group-hover:bg-dark-chocolate/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-cream text-sm tracking-wider bg-dark-chocolate/60 px-3 py-1">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-dark-chocolate/95 flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt=""
              className="max-w-full max-h-[85vh] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
