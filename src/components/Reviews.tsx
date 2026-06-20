"use client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Анастасия К.", rating: 5, source: "Google", text: "Абсолютно восхитительное место! Кофе на высшем уровне, интерьер создаёт особую атмосферу уюта. Обязательно вернусь снова.", date: "Ноябрь 2024" },
  { name: "Дмитрий В.", rating: 5, source: "Яндекс", text: "Лучший завтрак в Москве. Авокадо тост просто идеален, порции большие, персонал очень внимательный.", date: "Октябрь 2024" },
  { name: "Мария Л.", rating: 5, source: "Google", text: "Приходим сюда каждые выходные на бранч. Летняя терраса — просто сказка. Рекомендую раф кофе!", date: "Сентябрь 2024" },
  { name: "Алексей П.", rating: 5, source: "Яндекс", text: "Отличное место для деловых встреч. Тихо, уютно, великолепный кофе. Персонал профессиональный.", date: "Ноябрь 2024" },
  { name: "Екатерина Н.", rating: 5, source: "Google", text: "Тирамису здесь лучшее, что я когда-либо пробовала. Интерьер создан с душой, каждая деталь продумана.", date: "Октябрь 2024" },
  { name: "Сергей М.", rating: 5, source: "Яндекс", text: "Специально приехал из другого района ради этого места. Стейк рибай — шедевр. Обязательно вернусь!", date: "Август 2024" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  // Auto advance
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const visibleCount = 3;
  const indices = Array.from({ length: visibleCount }, (_, i) => (current + i) % reviews.length);

  return (
    <section id="reviews" className="py-28 bg-cream-dark/40" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle mb-4">Отзывы гостей</p>
          <h2 className="section-title">
            Что говорят<br />
            <span className="text-gold italic">наши гости</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {indices.map((idx, i) => {
              const r = reviews[idx];
              return (
                <motion.div
                  key={`${idx}-${current}`}
                  className="bg-cream border border-cream-dark p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Stars count={r.rating} />
                    <span className="text-xs text-coffee-brown/40 tracking-wider bg-cream-dark px-2 py-1">
                      {r.source}
                    </span>
                  </div>
                  <p className="text-coffee-brown/80 leading-relaxed mb-6 italic">"{r.text}"</p>
                  <div className="flex items-center justify-between border-t border-cream-dark pt-4">
                    <div>
                      <p className="font-serif text-coffee-brown font-medium">{r.name}</p>
                      <p className="text-coffee-brown/40 text-xs">{r.date}</p>
                    </div>
                    <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center">
                      <span className="font-serif text-gold font-bold text-sm">{r.name[0]}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)}
              className="w-10 h-10 border border-coffee-brown/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-gold w-6" : "bg-coffee-brown/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c + 1) % reviews.length)}
              className="w-10 h-10 border border-coffee-brown/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
