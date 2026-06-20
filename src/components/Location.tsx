"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Car } from "lucide-react";

const info = [
  { icon: MapPin, label: "Адрес", value: "Дубининская ул., 59Б, корп. 9, Москва" },
  { icon: Phone, label: "Телефон", value: "+7 (925) 888-89-39", href: "tel:+79258888939" },
  { icon: Clock, label: "Часы работы", value: "Ежедневно 10:00 – 22:00" },
  { icon: Car, label: "Парковка", value: "Бесплатная парковка рядом с кафе" },
];

export default function Location() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="location" className="py-28 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle mb-4">Как нас найти</p>
          <h2 className="section-title">
            Мы на <span className="text-gold italic">карте</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            className="overflow-hidden h-96 border border-cream-dark"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.633655%2C55.728978&z=16&pt=37.633655,55.728978,pm2rdm&text=Дубининская%2059Б"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{ border: 0 }}
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-5 p-5 bg-cream-dark/40 border border-cream-dark/80 hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-coffee-brown/50 text-xs tracking-wider uppercase mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-coffee-brown font-medium hover:text-gold transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-coffee-brown font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://yandex.ru/maps/?text=Дубининская+59Б+Москва"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 btn-primary w-full justify-center mt-4"
            >
              <Navigation size={16} />
              Построить маршрут
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
