"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredProjects = [
  {
    title: "Botwys",
    description: "Track, Organize, and Manage Your Scholarship Applications — deadlines, documents, and progress — all in one place.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Product Engineering"],
    liveUrl: "https://www.botwys.com",
    image: "/assets/projects/botwys.png"
  },
  {
    title: "Tanzeef",
    description: "Simplifies purifying bank interest (riba). Intelligently extracts details from alerts to help you record and purify earnings.",
    tags: ["NestJS", "OCR", "Fintech", "Full Stack"],
    liveUrl: "https://tanzeef.app/",
    image: "/assets/projects/tanzeef.png"
  },
  {
    title: "Satlat",
    description: "Geospatial solutions company transforming Earth data into actionable information for environmental challenges.",
    tags: ["Web Dev", "Corporate", "Geospatial"],
    liveUrl: "http://satlat.com/",
    image: "/assets/projects/satlat.png"
  },
  {
    title: "MuftyBrands",
    description: "E-commerce platform for antiglare glasses and accessories. Optimizing the eyewear shopping experience.",
    tags: ["E-commerce", "Full Stack", "Business"],
    liveUrl: "https://www.muftybrands.com",
    image: "/assets/projects/muftybrands.png"
  },
];

const legacyProjects = [
  {
    title: "Netflix Clone",
    description: "A clone version of Netflix where you can play movie trailers based on categories.",
    tags: ["React", "Axios", "YouTube API"],
    liveUrl: "https://abd-qaad-netflix-clone.vercel.app/",
    image: "/assets/projects/mockup-netflix.png"
  },
  {
    title: "Countries REST API",
    description: "Global countries data explorer using REST Countries API. Features searching and filtering.",
    tags: ["React", "REST API", "Dark Mode"],
    liveUrl: "https://countries-data.vercel.app/",
    image: "/assets/projects/mockup-countries.png"
  },
  {
    title: "Pig Game (Dice)",
    description: "A multiplayer based dice game built with Vanilla JavaScript.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    liveUrl: "https://gamidice.netlify.app",
    image: "/assets/projects/mockup-pig-game.png"
  },
  {
    title: "Vowelic",
    description: "A word game where you count vowels in displayed words within a time limit.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    liveUrl: "https://vowelic.netlify.app/",
    image: "/assets/projects/mockup-vowelic.png"
  },
  {
    title: "Covid-19 Tracker",
    description: "Real-time Covid-19 statistics tracker showing cases, recoveries, and deaths.",
    tags: ["React", "Axios", "REST API"],
    liveUrl: "https://covitrace.netlify.app/",
    image: "/assets/projects/mockup-covid.png"
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 space-y-24">
      {/* Featured Section */}
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Selected projects showcasing product engineering and full-stack capabilities.
            </p>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group">
                <div className="aspect-video w-full relative overflow-hidden bg-muted">
                    {/* Background Image with Fallback gradient */}
                   <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 z-0" />
                   <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-fill transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                     onError={(e) => {
                        // Fallback logic could go here if needed, but styling handles missing img reasonably well
                        e.currentTarget.style.display = 'none';
                     }}
                   />
                   
                   {/* Overlay */}
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />

                   {/* Title Overlay on Image */}
                   <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-linear-to-t from-black/80 to-transparent">
                      <h3 className="text-2xl font-bold text-white font-heading mb-1">{project.title}</h3>
                   </div>
                </div>
                
                <CardContent className="flex-1 pt-6">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50 font-normal">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={project.liveUrl} target="_blank">
                      View Project <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legacy Section */}
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <h2 className="text-2xl font-heading font-bold tracking-tight sm:text-3xl text-muted-foreground/80">
             How could I have mastered Frontend without these projects?
           </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {legacyProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-border/30 bg-card/30 hover:bg-card/50 transition-colors group">
                 <div className="aspect-[2/1] w-full relative overflow-hidden bg-muted rounded-t-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />
                    <Image 
                     src={project.image} 
                     alt={project.title} 
                     fill 
                     className="object-cover opacity-60 group-hover:opacity-90 transition-opacity"
                     onError={(e) => {
                        e.currentTarget.style.display = 'none';
                     }}
                   />
                 </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-heading">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 pb-2">
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-[10px] py-0 px-2 h-5">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                   <Link href={project.liveUrl} target="_blank" className="text-xs text-primary hover:underline inline-flex items-center">
                      Visit <ExternalLink className="ml-1 h-3 w-3" />
                   </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
