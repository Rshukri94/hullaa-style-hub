import { Rocket, Mail } from "lucide-react";

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-24 md:py-32 relative">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Decorative ring */}
        <div className="relative inline-block mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
            <Rocket size={32} className="text-primary-foreground" />
          </div>
          <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-primary/20 animate-ping" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">Coming Soon</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          We're crafting something beautiful for you. Be the first to know when Hullaa launches.
        </p>

        {/* Contact card */}
        <div id="contact" className="relative max-w-md mx-auto p-8 rounded-3xl bg-card border border-border/50 shadow-xl shadow-primary/5">
          <div className="absolute -top-px left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
          
          <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Have questions? We'd love to hear from you.
          </p>

          <a
            href="mailto:info@hullaa.com"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-primary/5 hover:bg-primary/10 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 w-full justify-center"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <span className="text-xs text-muted-foreground block">Email us at</span>
              <span className="font-semibold text-primary">info@hullaa.com</span>
            </div>
          </a>

          {/* Social proof */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-card"
                    style={{
                      background: `linear-gradient(135deg, hsl(${174 + i * 20} 46% ${33 + i * 10}%), hsl(${40 + i * 10} 65% 62%))`,
                    }}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground ml-2">Join 200+ waitlist members</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
