"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const categories = [
  {
    id: "breakfast",
    label: "Завтраки",
    items: [
      { name: "Авокадо тост", desc: "Соурдоу, авокадо, яйцо пашот, микрозелень", price: "490 ₽", img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80" },
      { name: "Яйца Бенедикт", desc: "Английский маффин, лосось, соус голландез", price: "590 ₽", img: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&q=80" },
      { name: "Круассан Завтрак", desc: "Круассан, яйцо, сыр бри, ветчина", price: "420 ₽", img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80" },
      { name: "Греческий боул", desc: "Йогурт, мёд, гранола, свежие ягоды", price: "380 ₽", img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80" },
    ],
  },
  {
    id: "coffee",
    label: "Кофе",
    items: [
      { name: "Эспрессо", desc: "Двойной шот specialty кофе", price: "180 ₽", img: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80" },
      { name: "Капучино", desc: "Эспрессо, взбитое молоко, бархатная пена", price: "280 ₽", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
      { name: "Флэт Уайт", desc: "Двойной риcтретто, микропена молока", price: "300 ₽", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=400&q=80" },
      { name: "Раф Кофе", desc: "Эспрессо, сливки, ваниль, взбитые вместе", price: "340 ₽", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
    ],
  },
  {
    id: "desserts",
    label: "Десерты",
    items: [
      { name: "Чизкейк", desc: "Нежный сырный торт, ягодный кули", price: "420 ₽", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80" },
      { name: "Тирамису", desc: "Классический итальянский рецепт", price: "390 ₽", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80" },
      { name: "Шоколадный торт", desc: "Бельгийский шоколад, малиновое конфи", price: "450 ₽", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80" },
      { name: "Свежие круассаны", desc: "Слоёное тесто, сливочное масло, ежедневно", price: "220 ₽", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80" },
    ],
  },
  {
    id: "lunch",
    label: "Обед & Ужин",
    items: [
      { name: "Крем-суп из томатов", desc: "Томаты, базилик, пармезан, гренки", price: "380 ₽", img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80" },
      { name: "Паста Карбонара", desc: "Спагетти, гуанчале, пармезан, яйцо", price: "590 ₽", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80" },
      { name: "Стейк Рибай", desc: "250г, соус беарнез, овощи гриль", price: "1490 ₽", img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80" },
      { name: "Рыбное блюдо шеф-повара", desc: "Сезонная рыба, средиземноморские травы", price: "890 ₽", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80" },
    ],
  },
];

export default function Menu() {
  const [active, setActive] = useState("breakfast");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const currentCategory = categories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="py-28 bg-dark-chocolate" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="section-subtitle mb-4">Наше предложение</p>
          <h2 className="font-serif text-5xl text-cream">
            Авторское <span className="text-gold italic">меню</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-6" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300 border ${
                active === cat.id
                  ? "bg-gold text-dark-chocolate border-gold"
                  : "border-cream/20 text-cream/60 hover:border-gold hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu cards */}
        <motion.div
          key={active}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentCategory.items.map((item, i) => (
            <motion.div
              key={item.name}
              className="group bg-coffee-brown/30 border border-cream/10 overflow-hidden hover:border-gold/40 transition-all duration-400"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="overflow-hidden h-48">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif text-lg text-cream">{item.name}</h3>
                  <span className="text-gold font-semibold text-sm ml-2 flex-shrink-0">{item.price}</span>
                </div>
                <p className="text-cream/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a
            href="#reservation"
            className="inline-block border border-gold text-gold px-10 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-dark-chocolate transition-all duration-300"
          >
            Полное меню
          </a>
        </div>
      </div>
    </section>
  );
}
