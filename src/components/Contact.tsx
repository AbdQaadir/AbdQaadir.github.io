"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import { SocialIcon } from "react-social-icons"
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32">
       <div className="container px-4 md:px-6 text-center mx-auto">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="max-w-2xl mx-auto space-y-6"
         >
           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Let's Build Something Amazing</h2>
           <p className="text-muted-foreground text-base md:text-lg">
             I'm currently looking for new opportunities. Whether you have a question, a project idea, 
             or just want to say hi, my inbox is always open.
           </p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
             <Button size="lg" className="h-12 px-8" asChild>
               <Link href="mailto:lateef9816@gmail.com">
                 <Mail className="h-6 w-6" /> Say Hello
               </Link>
             </Button>
             <Button size="lg" variant="outline" className="h-12 px-8" asChild>
              <>
               <SocialIcon url="https://x.com/mufty_codes" target="_blank" network="x" fgColor="currentColor" bgColor="transparent" style={{ height: 30, width: 30 }} className="text-muted-foreground hover:text-foreground transition-colors" />
               DM on X
               </>
             </Button>
           </div>
         </motion.div>
       </div>
    </section>
  );
}
