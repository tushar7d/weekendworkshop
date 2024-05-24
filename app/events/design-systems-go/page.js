import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import photo from "@/public/tushar.jpeg";
import Image from "next/image";
import { Box, Boxes, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Design System Go! | Weekend Worksop",

  description:
    "Unleash your creativity and level up your design game! Prepare for a detailed Design System Workshop that will take your design skills to new heights",
  openGraph: {
    title: "Design System Go! | Weekend Worksop",
    description:
      "Unleash your creativity and level up your design game! Prepare for a detailed Design System Workshop that will take your design skills to new heights",
    url: "https://weekendworkshop.in/events/design-systems-go",
    siteName: "Weekend Workshop",
    locale: "en_US",
    type: "website",
  },
};

export default function Event() {
  return (
    <div className=" min-h-[80vh] p-3 md:p-12">
        <div className="p-3 my-12 border flex justify-between rounded-xl md:space-x-6">
          <div>
          <h1 className="text-xl">Join the workshop</h1>
          <p className=" opacity-60"> The link will activate at 1:45PM IST tomorrow</p>
          </div>
          <Link href={'/events/design-systems-go'}>
          <Button className="opacity-50" >Go live</Button></Link>
          
        </div>
      <div className="mb-3 font-mono">
        Virtual · 25th May 2024 · 2:00 PM IST
      </div>
      <h1 className="mb-6 text-4xl font-semibold md:text-5xl text-foreground">
        Design System Go!
      </h1>
      <p className="mb-12 text-xl md:text-2xl">
        Discover the secret sauce of successful design systems
      </p>
      <ul className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-3 ">
        <li className="p-4 text-sm border rounded-xl ">
          <div className="flex items-center justify-center mb-4 border rounded-full size-12">
            <Box size={28} strokeWidth={1} />
          </div>
          <div className="text-lg ">
            Mastering Tokens to create harmonious visual languages and brand
            identities
          </div>
        </li>
        <li className="p-4 text-sm border rounded-xl ">
          <div className="flex items-center justify-center mb-4 border rounded-full size-12">
            <Boxes size={28} strokeWidth={1} />
          </div>
          <div className="text-lg ">
            Crafting Components with precision, flexibility, and reusability
          </div>
        </li>
        <li className="p-4 text-sm border rounded-xl ">
          <div className="flex items-center justify-center mb-4 border rounded-full size-12">
            <BookOpen size={24} strokeWidth={1} />
          </div>
          <div className="text-lg ">
            Documenting your design system like a pro for seamless collaboration
          </div>
        </li>
      </ul>

      <div className="p-6 pb-12 mt-4 border rounded-xl md:space-x-6">
        <Accordion type="single" collapsible className="">
          <h2 className="mb-6 text-2xl font-semibold md:text-2xl text-foreground">
            Agenda
          </h2>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Intro and agenda
            </AccordionTrigger>
            <AccordionContent>
              Quick round of intro followed by the agenda.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              Anatomy of a design system
            </AccordionTrigger>
            <AccordionContent>
              We will talk about the fundamental building blocks of a design
              system and how they interact with each other
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">
              Design Tokens
            </AccordionTrigger>
            <AccordionContent>
              A deep dive into what Tokens are why we need them and how to
              effectively use them in our daily workflow
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl">Components</AccordionTrigger>
            <AccordionContent>
              A look into the craft of building components and how to set up
              effective systems for rapid design and devlopment
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl">
              Process & Documentation
            </AccordionTrigger>
            <AccordionContent>
              A deep dive into processes and documentation practices required
              for running an effective design system
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl">Q&A</AccordionTrigger>
            <AccordionContent>
              Quick round of intro followed by the agenda.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="flex items-start p-6 mt-4 border rounded-xl">
        <Image
          width={120}
          height={120}
          className=" rounded-xl"
          src={photo}
          alt="Photo of Tushar Debnath"
        />
        <div className="ml-3">
          <div className="font-mono text-xm">Hosted by</div>
          <div className="text-lg font-semibold ">Tushar Debnath</div>
          <div className="">
            Product designer & Design Technologist with over 10 years of
            experience in building products and design systems{" "}
          </div>
        </div>
      </div>

      <div className="items-center justify-between p-6 mt-4 border md:flex rounded-xl md:space-x-6">
        <div className="mb-2 text-lg md:text-xl">
          Gain exclusive access to advanced techniques and industry secrets.
          Register now and join us on this thrilling journey
        </div>
        <a href="https://forms.gle/8YurFd7qKhUrKBXp7" target="_blank">
          <Button>Register</Button>
        </a>
      </div>
    </div>
  );
}
