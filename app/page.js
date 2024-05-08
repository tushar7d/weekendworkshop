import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  let heading = "Weekends for the win";
  let description = `Join our weekend workshops on product design, product management, and more`;

  return (
    <>
      <section className="flex items-center justify-center space-x-3 align-middle ">
        <div className="z-10 flex flex-col items-center justify-center w-full h-full">
        <img className="w-[22rem]" src="/cube.png" />
          <h1 className="mx-6 mt-6 w-[300px] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent dark:from-white dark:to-[#AAAAAA] md:!w-full  lg:text-6xl xl:leading-snug">
            {heading}
          </h1>
          <p className="font-space-grotesk mx-6 max-h-[112px] w-[315px] text-center text-xl text-[#666666] dark:text-[#888888] md:max-h-[96px] md:w-[660px] md:text-2xl">
            {description}
          </p>
          
        </div>
      </section>
      <section className="mx-3 mt-12 text-foreground ">
        <div className=" mx-auto  max-w-[60rem] flex items-end justify-between border dark:border-0  dark:bg-zinc-900 p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Upcoming event
            </Badge>

            <h2 className="mb-2 text-2xl">Design System Go!</h2>
            <p className="">
              Unlock secrets for consistent visual identity, reusable designs,
              and effective communication
            </p>
          </div>
          <Link href="/events/design-systems-go">
          <Button  className="">
            Learn More
          </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
