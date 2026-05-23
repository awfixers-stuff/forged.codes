"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Developers", href: "#developers" },
  { name: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ticking = useRef(false);
  const { openSignIn, openSignUp } = useClerk();

  useEffect(() => {
    setScrolled(window.scrollY > 20);

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking.current = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMobile = useCallback(() => setMenuOpen(false), []);

  return (
    <header
      className={cn(
        "fixed z-50 transition-[top,left,right,padding] duration-500 ease-out",
        scrolled
          ? "top-3 left-4 right-4"
          : "top-0 left-0 right-0",
      )}
    >
      <nav
        className={cn(
          "mx-auto transition-[max-width,background-color,border-color,box-shadow] duration-500",
          scrolled || menuOpen
            ? "max-w-[1200px] bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-2xl shadow-lg"
            : "max-w-[1400px]",
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 lg:px-8 transition-[height] duration-500",
            scrolled ? "h-14" : "h-20",
          )}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className={cn(
                "font-display tracking-tight transition-[font-size] duration-500",
                scrolled ? "text-xl" : "text-2xl",
              )}
            >
              Forged Codes
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => openSignIn()}
              className={cn(
                "text-foreground/70 hover:text-foreground transition-[font-size] duration-500",
                scrolled ? "text-xs" : "text-sm",
              )}
            >
              Sign in
            </button>
            <button
              onClick={() => openSignUp()}
              className={cn(
                "bg-foreground hover:bg-foreground/90 text-background rounded-full font-medium transition-[padding,height,font-size] duration-500",
                scrolled ? "px-4 h-8 text-xs" : "px-6 h-10 text-sm",
              )}
            >
              Start building
            </button>
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 relative z-50"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "lg:hidden fixed inset-0 bg-background transition-[opacity,visibility] duration-500 z-40",
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible",
        )}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          <div className="flex-1 flex flex-col justify-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobile}
                className="text-5xl font-display text-foreground hover:text-muted-foreground transition-opacity duration-300"
                style={{ transitionDelay: menuOpen ? `${i * 75}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div
            className={cn(
              "flex gap-4 pt-8 border-t border-foreground/10 transition-opacity duration-500",
              menuOpen ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
          >
            <button
              className="flex-1 rounded-full h-14 text-base border border-foreground/20 hover:bg-foreground/5 transition-colors"
              onClick={() => { closeMobile(); openSignIn(); }}
            >
              Sign in
            </button>
            <button
              className="flex-1 bg-foreground text-background rounded-full h-14 text-base hover:bg-foreground/90 transition-colors"
              onClick={() => { closeMobile(); openSignUp(); }}
            >
              Start building
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}