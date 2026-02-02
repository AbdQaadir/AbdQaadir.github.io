"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Eye } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden py-12 md:py-24 lg:py-32">
       {/* Background Elements (Optional for that AI feel) */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-filter px-3 py-1 text-sm font-medium text-muted-foreground mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-heading font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
        >
          Senior Product <br className="hidden md:inline" />
          <span className="text-muted-foreground">Focused Engineer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl"
        >
          I'm <strong>Lateef Quadri</strong>, a Senior Product Focused Engineer with <strong>5+ years</strong> of experience.
          I build robust, scalable applications using a full arsenal of tools including <strong>NestJS, Prisma, PostgreSQL, and Clerk</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-12 px-8 text-base" asChild>
            <Link href="#projects">
              My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base" asChild>
            <Link href="https://drive.google.com/file/d/1Xn_NtHLMehPIt7BL5ml4LilHMMuIPLs3/view?usp=sharing" target="_blank">
              Resume <Eye className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Abstract Shapes/Glows */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px]"></div>
    </section>
  );
}
