import { Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center animated-gradient noise-overlay">
      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5 animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm border border-primary/10">
          <Sparkles size={16} className="animate-pulse" />
          <span>Preloved Fashion Marketplace</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <span className="gradient-text">Hullaa</span>
          <span className="block text-3xl sm:text-4xl md:text-5xl font-arabic mt-2 text-foreground/80">حلة</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.4s", opacity: 0 }}>
          Give your preloved fashion a second life. Buy, sell, and discover unique pieces in the most elegant way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
          <a
            href="#coming-soon"
            className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-semibold text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative z-10">Get Early Access</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity animate-shimmer" />
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all hover:-translate-y-0.5"
          >
            Learn More
          </a>
        </div>
      </div>

      <a href="#how-it-works" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary/40 hover:text-primary transition-colors">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
