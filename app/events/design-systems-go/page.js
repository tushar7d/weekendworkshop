import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Box,Boxes,BookOpen } from "lucide-react";

export default function Event() {
  return (
    <div className=" min-h-[80vh] p-12">
      <div className="mb-3 font-mono">
        Virtual · 25th May 2024 · 2:00 PM IST
      </div>
      <h1 className="mb-6 text-4xl md:text-5xl font-semibold text-foreground">
        Design System Go!
      </h1>
      <p className="mb-12 text-xl md:text-2xl">
        Unleash your creativity and level up your design game! Prepare for a
        detailed Design System Workshop that will take your design skills to new
        heights! Discover the secret sauce of successful design systems as we
        dive deep into:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 ">
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20 flex items-center justify-center"><Box size={32}  strokeWidth={1.2} /></div>
          <div className=" text-lg">
            Mastering Tokens to create harmonious visual languages and brand
            identities
          </div>
        </li>
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20 flex items-center justify-center"><Boxes size={32}  strokeWidth={1.2} /></div>
          <div className=" text-lg ">
            Crafting Components with precision, flexibility, and reusability
          </div>
        </li>
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20  flex items-center justify-center"><BookOpen size={32}  strokeWidth={1.2} /></div>
          <div className=" text-lg ">
            Documenting your design system like a pro for seamless collaboration
          </div>
        </li>
      </ul>
      <div className="md:flex justify-between items-center  border p-6 rounded-xl dark:bg-zinc-900 md:space-x-6">
        <div className="text-lg md:text-xl mb-2">
          Gain exclusive access to advanced techniques and industry secrets.
          Register now and join us on this thrilling journey
        </div>
        <Button>Register</Button>
      </div>
      <h2 className="mt-12 mb-6  text-2xl md:text-4xl font-semibold text-foreground">
        Agenda
      </h2>

      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl">Intro and agenda · 5 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl">Anatomy of a design system · 20 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl">Q&A · 5 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl">Design Tokens · 20 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl">Q&A · 5 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-xl">Break · 15 mins</AccordionTrigger>
          <AccordionContent>
            Quick round of intro followed by the agenda.
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  );
}
