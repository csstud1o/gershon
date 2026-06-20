import { MapPin, Phone, Mail, Instagram, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-chocolate border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-cream tracking-[0.2em] mb-4">ГЕРШОН</h3>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs mb-6">
              Премиальное кафе в Москве. Specialty coffee, авторские завтраки и изысканные бранчи в атмосфере тепла и элегантности.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://instagram.com/gershon_cafe", label: "Instagram" },
                { icon: Send, href: "https://t.me/gershon_cafe", label: "Telegram" },
                { icon: MessageCircle, href: "https://wa.me/79258888939", label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-cream/20 flex items-center justify-center text-cream/50 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Навигация</h4>
            <ul className="space-y-3">
              {["О нас", "Меню", "Интерьер", "Терраса", "Отзывы", "Бронирование"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/50 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-gold text-xs tracking-[0.3em] uppercase mb-6">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-cream/50 text-sm leading-relaxed">
                  Дубининская ул., 59Б, корп. 9, Москва
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a href="tel:+79258888939" className="text-cream/50 hover:text-gold text-sm transition-colors">
                  +7 (925) 888-89-39
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <a href="mailto:hello@gershon.ru" className="text-cream/50 hover:text-gold text-sm transition-colors">
                  hello@gershon.ru
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 border border-cream/10">
              <p className="text-cream/40 text-xs tracking-wider uppercase mb-1">Часы работы</p>
              <p className="text-cream/70 text-sm">Ежедневно: 10:00 – 22:00</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} ГЕРШОН. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-cream/30 hover:text-cream/60 text-xs transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
