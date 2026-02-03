"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download, Eye, Rocket } from "lucide-react";
import { TextReveal } from "@/components/ui/text-reveal";

export function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden py-0 md:py-24 lg:py-32">
       {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
      
      <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 group cursor-pointer"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-primary/50 to-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative inline-flex items-center rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-1.5 text-sm font-medium overflow-hidden">
             
             {/* Animating Border Gradient */}
             <motion.div 
               className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent w-[200%]"
               animate={{ x: isHovered ? ["-100%", "0%"] : "-100%" }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />

             <AnimatePresence mode="wait">
               {isHovered ? (
                  <motion.div
                     key="hover"
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: -20, opacity: 0 }}
                     className="flex items-center gap-2 text-primary z-10"
                  >
                      <Rocket className="h-4 w-4 fill-current" />
                      <span>Ready to deploy excellence</span>
                  </motion.div>
               ) : (
                  <motion.div
                     key="normal"
                     initial={{ y: -20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: 20, opacity: 0 }}
                     className="flex items-center gap-2 text-muted-foreground z-10"
                  >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span>Available for new opportunities</span>
                  </motion.div>
               )}
             </AnimatePresence>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-foreground"
        >
          <span className="text-muted-foreground inline">
            <TextReveal>Product Focused</TextReveal>
          </span>
          <br />  
          <span className="text-primary inline">
            <TextReveal>Engineer</TextReveal>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-[700px] text-base md:text-xl text-muted-foreground"
        >
          I'm <strong>Quadri Lateef</strong>, a Senior Product Focused Engineer with <strong>5+ years</strong> of experience.
          I build robust, scalable applications using a full arsenal of tools including <strong>NextJS, NestJS, Prisma, PostgreSQL, and Clerk</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex gap-4 sm:flex-row flex-wrap"
        >
          <Button size="lg" className="h-12 px-8 md:px-14! text-base rounded-full" asChild>
            <Link href="#projects">
              My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 md:px-14! text-base rounded-full" asChild>
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
