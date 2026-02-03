"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About Me</h2>
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
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1 px-3 border-foreground/20">
                      {skill}
                    </Badge>
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
