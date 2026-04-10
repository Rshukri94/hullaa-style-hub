import { Camera, Tags, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Snap & List",
    description: "Take a photo, set your price, and list your preloved item in seconds.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Tags,
    title: "Discover & Shop",
    description: "Browse curated collections of unique fashion finds at amazing prices.",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: ShoppingBag,
    title: "Buy & Enjoy",
    description: "Secure checkout, trusted sellers, and fashion that tells a story.",
    gradient: "from-primary/10 to-accent/5",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Simple & Elegant</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 gradient-text">How It Works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Step number */}
              <span className="absolute top-6 right-6 text-7xl font-black text-primary/5 group-hover:text-primary/10 transition-colors">
                {i + 1}
              </span>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon size={28} className="text-primary" />
              </div>

              <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
