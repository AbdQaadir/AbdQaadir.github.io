import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { SocialIcon } from 'react-social-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row md:py-0 px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} Quadri Lateef. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <SocialIcon url="https://github.com/abdqaadir" target="_blank" fgColor="currentColor" bgColor="transparent" style={{ height: 30, width: 30 }} className="text-muted-foreground hover:text-foreground transition-colors" />
          <SocialIcon url="https://twitter.com/mufty_codes" target="_blank" network="x" fgColor="currentColor" bgColor="transparent" style={{ height: 30, width: 30 }} className="text-muted-foreground hover:text-foreground transition-colors" />
          <Link
            href="mailto:lateef9816@gmail.com"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
