"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Coffee, Star, Croissant, Sun } from "lucide-react";

const stats = [
  { icon: Star, num: "1000+", label: "Гостей в месяц" },
  { icon: Coffee, num: "Premium", label: "Кофейная карта" },
  { icon: Croissant, num: "Ежедневно", label: "Свежая выпечка" },
  { icon: Sun, num: "Летняя", label: "Открытая терраса" },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80"
                alt="Гершон интерьер"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-coffee-brown/10" />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-8 -right-8 bg-dark-chocolate p-8 hidden md:block">
              <p className="font-serif text-3xl text-gold">С 2020</p>
              <p className="text-cream/60 text-xs tracking-wider uppercase mt-1">Года с вами</p>
            </div>
            {/* Gold frame accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 hidden md:block" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="section-subtitle mb-4">О Нас</p>
            <h2 className="section-title mb-6">
              О кафе<br />
              <span className="text-gold">Гершон</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-coffee-brown/80 leading-relaxed mb-6 text-lg">
              Гершон создавался как место, где исключительный кофе, тщательно продуманная кухня и тёплое гостеприимство объединяются воедино.
            </p>
            <p className="text-coffee-brown/70 leading-relaxed mb-10">
              Каждая деталь — от дизайна интерьера до ингредиентов на тарелке — была тщательно подобрана, чтобы создать незабываемые впечатления. Мы объединяем традиции европейской кофейной культуры с современным подходом к гостеприимству.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, num, label }) => (
                <div key={label} className="flex items-start gap-4 p-4 bg-cream-dark/50">
                  <Icon size={20} className="text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-serif text-lg text-coffee-brown">{num}</p>
                    <p className="text-coffee-brown/60 text-xs tracking-wider uppercase">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
