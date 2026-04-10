import { Heart } from "lucide-react";
import logo from "@/assets/hullaa-logo.png";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logo} alt="Hullaa" className="h-8 opacity-60" />
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-accent fill-accent" /> in Saudi Arabia
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hullaa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
