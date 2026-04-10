import { Shield, Leaf, Heart, Zap } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Trusted & Secure", desc: "Verified sellers and secure transactions you can count on." },
  { icon: Leaf, title: "Sustainable Fashion", desc: "Reduce waste and give clothes a second beautiful life." },
  { icon: Heart, title: "Curated Quality", desc: "Every piece is handpicked for style, condition, and value." },
  { icon: Zap, title: "Effortless Experience", desc: "List in seconds, discover in minutes, love forever." },
];

export default function WhyHullaa() {
  return (
    <section id="why-hullaa" className="py-24 md:py-32 relative animated-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 gradient-text">Why Hullaa?</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group text-center p-8 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                <r.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
