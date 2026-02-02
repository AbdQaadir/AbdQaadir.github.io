"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Github, Linkedin, Briefcase, FolderGit2, Mail, Twitter, X, LinkedinIcon } from "lucide-react";
import { SocialIcon } from 'react-social-icons';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const navigation = [
  { name: "About", href: "#about", icon: Briefcase },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full pt-4 px-4 transition-all duration-300">
      <div className={cn(
        "container mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border border-border/40 p-2 px-6 shadow-lg supports-backdrop-filter:bg-background/60" 
          : "bg-transparent p-4"
      )}>
        
        {/* Left: Brand */}
        <div className="flex-1">
          <Link href="/" className="flex items-center space-x-2 w-fit">
            <span className="font-heading text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
              Quadri Lateef
            </span>
          </Link>
        </div>

        {/* Center: Pill Menu (Desktop) */}
        <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1 bg-secondary/80 backdrop-blur-sm border border-white/5 rounded-full p-1.5 px-3">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      pathname === item.href 
                        ? "bg-primary text-primary-foreground shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </div>
        </nav>

        {/* Right: Socials & Mobile Toggle */}
        <div className="flex-1 flex justify-end items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
                 <SocialIcon url="https://github.com/abdqaadir" target="_blank" fgColor="currentColor" bgColor="transparent" style={{ height: 35, width: 35 }} className="hover:opacity-80 transition-opacity text-muted-foreground hover:text-foreground" />
                 <SocialIcon url="https://www.linkedin.com/in/quadri-lateef" target="_blank" fgColor="currentColor" bgColor="transparent" style={{ height: 35, width: 35 }} className="hover:opacity-80 transition-opacity text-muted-foreground hover:text-foreground" />
                 <SocialIcon url="https://twitter.com/mufty_codes" target="_blank" network="x" fgColor="currentColor" bgColor="transparent" style={{ height: 35, width: 35 }} className="hover:opacity-80 transition-opacity text-muted-foreground hover:text-foreground" />
                 <ModeToggle />
            </div>

            {/* Mobile Toggle */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-10">
                   <div className="flex flex-col gap-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-4 text-lg font-medium p-2 hover:bg-secondary rounded-lg transition-colors"
                        >
                          <item.icon className="w-5 h-5" />
                          {item.name}
                        </Link>
                      ))}
                   </div>
                   
                   <div className="flex gap-4 justify-center border-t border-border pt-6">
                      <Link href="https://github.com/abdqaadir" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                         <Github className="w-5 h-5" />
                      </Link>
                      <Link href="https://www.linkedin.com/in/quadri-lateef" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                         <LinkedinIcon className="w-5 h-5" />
                      </Link>
                      <Link href="https://twitter.com/mufty_codes" target="_blank" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                         <X className="w-5 h-5" />
                      </Link>
                      <div className="p-2">
                         <ModeToggle />
                      </div>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
