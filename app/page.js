import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Logo from "./cube.png";
import Link from "next/link";



export default async function Home() {
  let heading = "Weekends for the win";
  let description = `Join our weekend workshops on product design, product management, and more`;
  const data = await fetch(
    "https://ap-south-1.cdn.hygraph.com/content/clxymi2ch01cc07w4j39fgpyb/master",
    {
      cache:"no-cache",
      method: "POST",
      body: JSON.stringify({
        query: `query Events {
  events( orderBy:rank_ASC)  {
    description
    formLink
    type
    name
    state
    date
    current
  }
}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());
  let events = data.data.events
 
  
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
      <div>
      {events.map((e,key)=>{
        return(

          <section key={key} className="mx-3 mt-6 ">
          <div className=" mx-auto  max-w-[60rem] flex flex-col md:flex-row items-start md:items-end justify-start md:justify-between    border p-6 rounded-2xl">
            <div>
              <Badge className={"mb-4 "} variant="outline">
               {e.state}
              </Badge>
              <div className="mt-3 mb-1 font-mono text-sm">
              {e.type} · {e.date}
              </div>
              <h2 className="mb-2 text-2xl">{e.name}</h2>
              <p className=" opacity-60">
              {e.description}
              </p>
            </div> 
            {e.current?<div className="flex items-end space-x-3 md:space-y-3 md:flex-col">
            <Link
              href="/live"
              className="mt-6 md:mt-0 w-[100px]"
            >
              <Button variant="outline" className="w-full ">
                Join
              </Button>
            </Link>
            {e.formLink?<Link
              href={e.formLink}
              target="_blank"
              className="mt-6 md:mt-0 w-[100px]"
            >
              <Button variant="outline" className="w-full">
                Register 
              </Button>
            </Link>:null}
            
            </div>:null}
            
            
          </div>
        </section>
        )
      })}
      </div>
   
     
      
    
     

      
      
    
    </>
  );
}
