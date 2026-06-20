"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputClass =
    "w-full bg-transparent border-b border-cream/20 py-3 text-cream placeholder-cream/40 text-sm focus:outline-none focus:border-gold transition-colors duration-300";

  return (
    <section id="reservation" className="py-28 bg-dark-chocolate" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-subtitle mb-4">Бронирование</p>
            <h2 className="font-serif text-5xl text-cream mb-6 leading-tight">
              Забронируйте<br />
              <span className="text-gold italic">ваш стол</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold mb-8" />
            <p className="text-cream/60 leading-relaxed mb-10">
              Заполните форму и наш администратор свяжется с вами в течение 30 минут для подтверждения резервирования.
            </p>

            <div className="space-y-6">
              {[
                { num: "01", text: "Заполните форму бронирования" },
                { num: "02", text: "Получите подтверждение от нас" },
                { num: "03", text: "Приходите и наслаждайтесь" },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-4">
                  <span className="font-serif text-3xl text-gold/30">{step.num}</span>
                  <p className="text-cream/70">{step.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center justify-center py-20 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={60} className="text-gold mb-6" />
                  <h3 className="font-serif text-3xl text-cream mb-4">Спасибо!</h3>
                  <p className="text-cream/60">Ваш столик забронирован. Мы свяжемся с вами в ближайшее время.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8 bg-coffee-brown/20 border border-cream/10 p-10"
                >
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Имя</label>
                      <input required type="text" placeholder="Ваше имя" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Телефон</label>
                      <input required type="tel" placeholder="+7 (___) ___-__-__" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Email</label>
                    <input type="email" placeholder="your@email.com" className={inputClass} />
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Дата</label>
                      <input required type="date" className={inputClass} />
                    </div>
                    <div>
                      <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Время</label>
                      <select required className={inputClass + " cursor-pointer"} defaultValue="">
                        <option value="" disabled>Выбрать</option>
                        {["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"].map(t => (
                          <option key={t} value={t} className="text-dark-chocolate">{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-cream/40 text-xs tracking-wider uppercase mb-2 block">Гости</label>
                      <select required className={inputClass + " cursor-pointer"} defaultValue="">
                        <option value="" disabled>Кол-во</option>
                        {[1,2,3,4,5,6,7,8].map(n => (
                          <option key={n} value={n} className="text-dark-chocolate">{n} чел.</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <span className="flex gap-1">
                        {[0,1,2].map(i => (
                          <motion.span
                            key={i}
                            className="w-2 h-2 bg-dark-chocolate rounded-full inline-block"
                            animate={{ opacity: [0.3,1,0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                          />
                        ))}
                      </span>
                    ) : "Забронировать стол"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
