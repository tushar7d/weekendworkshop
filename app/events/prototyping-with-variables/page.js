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
    <div className=" min-h-[80vh] p-3 md:p-12">
      <div className="mb-3 font-mono">
      Virtual · 1st June
      </div>
      <h1 className="mb-6 text-4xl font-semibold md:text-5xl text-foreground">
      Protoyping with variables
      </h1>
      <p className="mb-12 text-xl md:text-2xl">
      Learn how to effectively use variables for building prototypes
      </p>
      
      <div className="items-center justify-between p-6 border md:flex rounded-xl md:space-x-6">
        <div className="mb-2 text-lg md:text-xl">
          Gain exclusive access to advanced protoyping techniques and industry secrets.
          Register now and join us on this thrilling journey
        </div>
        <Button>Register</Button>
      </div>
     
      
    </div>
  );
}
