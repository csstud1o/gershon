"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function Chef() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="relative py-36 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80)" }}
      />
      <div className="absolute inset-0 bg-dark-chocolate/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="section-subtitle mb-6">Кухня Гершона</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-8 leading-tight">
            Создано с<br />
            <span className="text-gold italic">Страстью</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
          <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Каждое блюдо в Гершоне готовится с использованием тщательно отобранных ингредиентов и безупречным вниманием к качеству.
          </p>
          <p className="text-cream/60 leading-relaxed max-w-xl mx-auto mb-10">
            Наша кулинарная команда сочетает классические европейские традиции с современным творческим подходом, создавая гармонию вкусов.
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            {[
              { num: "5+", label: "Лет опыта" },
              { num: "40+", label: "Блюд в меню" },
              { num: "100%", label: "Свежие продукты" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-4xl text-gold mb-1">{s.num}</p>
                <p className="text-cream/50 text-xs tracking-[0.2em] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
