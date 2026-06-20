"use client";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const posts = [
  { img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80", likes: 324, comments: 18 },
  { img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80", likes: 512, comments: 32 },
  { img: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80", likes: 287, comments: 14 },
  { img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80", likes: 431, comments: 25 },
  { img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&q=80", likes: 198, comments: 11 },
  { img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=400&q=80", likes: 367, comments: 22 },
];

export default function InstagramFeed() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-28 bg-dark-chocolate" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram size={20} className="text-gold" />
            <p className="section-subtitle">@gershon_cafe</p>
          </div>
          <h2 className="font-serif text-5xl text-cream">
            Мы в <span className="text-gold italic">Instagram</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden aspect-square"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={post.img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-dark-chocolate/0 group-hover:bg-dark-chocolate/70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 text-cream text-xs">
                  <Heart size={14} className="fill-cream" /> {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-cream text-xs">
                  <MessageCircle size={14} /> {post.comments}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/gershon_cafe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/20 text-cream/60 hover:border-gold hover:text-gold px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
          >
            <ExternalLink size={14} />
            Подписаться
          </a>
        </div>
      </div>
    </section>
  );
}
