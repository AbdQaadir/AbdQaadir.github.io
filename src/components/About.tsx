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
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Next.js", 
    "NestJS", "Express", "Prisma ORM", "PostgreSQL", 
    "NeonDB", "Clerk Auth", "Webhooks", "Email Services",
    "TailwindCSS", "ShadCN UI", "Framer Motion", "Git"
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
              I'm a <strong>Senior Product Focused Engineer</strong> based in Nigeria. While I have deep roots in Frontend Engineering, 
              I have evolved into a full-stack powerhouse capable of architecting complex systems from database to UI.
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
              My technical arsenal includes mastering <strong>Prisma ORM, PostgreSQL (NeonDB), and NestJS</strong> for robust backends, 
              paired with clean, performant frontend code. I focus on building products that solve real-world problems with precision and scalability.
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
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <MagneticBadge key={skill} index={i}>
                      <Badge variant="outline" className="text-sm py-1 px-3 border-foreground/20 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default">
                        {skill}
                      </Badge>
                    </MagneticBadge>
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
                    <span className="text-4xl font-bold text-primary mb-2">20+</span>
                    <span className="text-sm text-muted-foreground">Projects Completed</span>
                 </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
