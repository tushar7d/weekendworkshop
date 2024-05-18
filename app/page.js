import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Logo from "./cube.png";
import Link from "next/link";
export default function Home() {
  let heading = "Weekends for the win";
  let description = `Join our weekend workshops on product design, product management, and more`;

  return (
    <>
      <section className="flex items-center justify-center space-x-3 align-middle ">
        <div className="flex flex-col items-center justify-center w-full h-full p-3 ">
          <Image
            width={352}
            height={352}
            priority
            alt="An image of a cube"
            src={Logo}
          />
          <h1 className=" mt-6  bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-4xl font-extrabold leading-tight text-transparent dark:from-white dark:to-[#AAAAAA]  lg:text-6xl xl:leading-snug">
            {heading}
          </h1>
          <p className=" mx-6  text-center text-xl text-[#666666] dark:text-[#888888]  md:text-2xl">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-3 mt-12 ">
        <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between   border p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Up Next
            </Badge>
            <div className="mt-3 mb-1 font-mono text-sm">
              Virtual · 25th May · 2:00 PM IST
            </div>

            <h2 className="mb-2 text-2xl">Design System Go!</h2>
            <p className=" opacity-60">
              Unlock secrets for consistent visual identity, reusable designs,
              and effective communication
            </p>
          </div>
          <Link href="/events/design-systems-go" className="mt-6 md:mt-0">
            <Button variant="outline" className="">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
      <section className="mx-3 mt-6 ">
        <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between    border p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Planned
            </Badge>
            <div className="mt-3 mb-1 font-mono text-sm">
              Virtual · 1st June
            </div>
            <h2 className="mb-2 text-2xl">Prototyping with variables</h2>
            <p className=" opacity-60">
              Learn how to effectively use variables for building prototypes
            </p>
          </div>
        </div>
      </section>

      <section className="mx-3 mt-6 ">
        <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between    border p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Planned
            </Badge>
            <div className="mt-3 mb-1 font-mono text-sm">
              Virtual · 8th June
            </div>
            <h2 className="mb-2 text-2xl">Figma Plugin 101</h2>
            <p className="opacity-60">
              Learn how to build internal tools with open source Figma Plugins.
              More details to come.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
