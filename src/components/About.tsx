"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TextReveal } from "@/components/ui/text-reveal";
import { useRef, MouseEvent, ReactNode } from "react";

function MagneticBadge({ children, index }: { children: ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set(clientX - centerX);
    y.set(clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  const techStack = [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next.js", icon: "nextdotjs", color: "#000000" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
    { name: "Framer Motion", icon: "framer", color: "#0055FF" },
    { name: "NestJS", icon: "nestjs", color: "#E0234E" },
    { name: "Prisma", icon: "prisma", color: "#2D3748" },
    { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
    { name: "Git", icon: "git", color: "#F05032" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              <TextReveal>About Me</TextReveal>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              I'm a <strong>Senior Product-Focused UI Engineer</strong> based in Nigeria. I specialize in crafting premium user interfaces, 
              building scalable design systems, and creating delightful micro-interactions that make products feel alive.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              With deep expertise in <strong>React, Next.js, TypeScript, Tailwind CSS, and Framer Motion</strong>, I bridge the gap between design and code. 
              My full-stack capabilities (<strong>NestJS, Prisma, PostgreSQL</strong>) enable me to own features end-to-end and ship complete products independently.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             viewport={{ once: true }}
             className="grid gap-4"
          >
            {/* Bento-like grid for skills */}
            <Card className="bg-background/50 backdrop-blur border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Technical Arsenal</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", duration: 0.5, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative"
                    >
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-background/80 border border-foreground/10 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                          <img
                            src={`https://cdn.simpleicons.org/${tech.icon}`}
                            alt={tech.name}
                            className="w-8 h-8 dark:invert dark:brightness-0 dark:contrast-200 opacity-70 group-hover:opacity-100 transition-opacity"
                            style={{ filter: 'brightness(0) saturate(100%)' }}
                            onLoad={(e) => {
                              const img = e.currentTarget;
                              img.style.filter = '';
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-background/50 backdrop-blur border-primary/20">
                 <CardContent className="p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-bold text-primary mb-2">5+</span>
                    <span className="text-sm text-muted-foreground">Years Experience</span>
                 </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur border-primary/20">
                 <CardContent className="p-6 flex flex-col justify-center items-center text-center">
                    <span className="text-4xl font-bold text-primary mb-2">10+</span>
                   <span className="text-sm text-muted-foreground">Projects Shipped</span>
                 </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
