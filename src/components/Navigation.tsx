"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/biography", label: "Biography" },
    { to: "/timeline", label: "Timeline" },
    { to: "/teachings", label: "Teachings" },
    { to: "/projects", label: "Projects" },
    { to: "/lectures", label: "Lectures" },
    { to: "/verify", label: "Verify Identity" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/juravel-logo.png" 
                alt="Rabbi Shmuel Zev Juravel Torah Scroll Logo - South Fallsburg New York" 
                className="h-10 w-10 sm:h-12 sm:w-12 transition-transform group-hover:scale-105"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold text-primary group-hover:text-primary-hover transition-colors">
                Rabbi Shmuel Zev Juravel
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-all",
                  isActive(item.to) && "text-primary bg-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-all",
                  isActive(item.to) && "text-primary bg-accent"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

