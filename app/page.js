export default function Home() {
  let heading = "Weekends for the win";
  let description = `Join our weekend workshops on product design, product management, and more`;

  return (
    <main className=" flex space-x-3 align-middle  items-center justify-center">
      <div className="z-10 flex h-full w-full flex-col items-center justify-center">
        <h1 className="mx-6 mt-12 w-[300px] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4  text-center text-5xl font-extrabold leading-tight text-transparent dark:from-white dark:to-[#AAAAAA] md:!w-full lg:!mt-20 lg:text-6xl xl:leading-snug">
          {heading}
        </h1>
        <p className="font-space-grotesk mx-6 max-h-[112px] w-[315px] text-center text-xl text-[#666666] dark:text-[#888888] md:max-h-[96px] md:w-[660px] md:text-2xl">
          {description}
        </p>
      
      </div>
    </main>
  );
}
