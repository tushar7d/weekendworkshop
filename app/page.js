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
          <h1 className="mx-3 mt-6 w-[340px] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent dark:from-white dark:to-[#AAAAAA] md:!w-full  lg:text-6xl xl:leading-snug">
            {heading}
          </h1>
          <p className="font-space-grotesk mx-6 max-h-[112px] w-[315px] text-center text-xl text-[#666666] dark:text-[#888888] md:max-h-[96px] md:w-[660px] md:text-2xl">
            {description}
          </p>
        </div>
      </section>
      <section className="mx-3 mt-12 text-foreground ">
        <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between border dark:border-0  dark:bg-zinc-900 p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Upcoming event
            </Badge>
            <div className="mt-3 mb-1 font-mono text-sm">
              Virtual · 25th May · 2:00 PM IST
            </div>

            <h2 className="mb-2 text-2xl">Design System Go!</h2>
            <p className="">
              Unlock secrets for consistent visual identity, reusable designs,
              and effective communication
            </p>
          </div>
          <Link href="/events/design-systems-go" className="mt-6 md:mt-0">
            <Button className="">Learn More</Button>
          </Link>
        </div>
      </section>
      <section className="mx-3 mt-6 text-foreground ">
        <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between border dark:border-0  dark:bg-zinc-900 p-6 rounded-2xl">
          <div>
            <Badge className={"mb-4 "} variant="outline">
              Planned event
            </Badge>
            <div className="mt-3 mb-1 font-mono text-sm">
              Virtual · 1st June
            </div>
            <h2 className="mb-2 text-2xl">Protoyping with variables</h2>
            <p className="">
              Learn how to effectively use variables for building prototypes
            </p>
          </div>
          <Link href="/" className="mt-6 md:mt-0">
            <Button className="">Learn More</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
