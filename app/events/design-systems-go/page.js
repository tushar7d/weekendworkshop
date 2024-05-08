export default function Event() {
  return (
    <div className=" min-h-[80vh] p-12">
      <div className="mb-3 font-mono">Saturday · 25th May 2024</div>
      <h1 className="mb-6 text-4xl md:text-5xl font-semibold text-foreground">
        Design System Go!
      </h1>
      <p className="mb-6 text-xl md:text-2xl">
        Unleash your creativity and level up your design game! Prepare for a
        detailed Design System Workshop that will take your design skills to new
        heights! Discover the secret sauce of successful design systems as we
        dive deep into:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 ">
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20"></div>
          <div className=" text-lg">
            Mastering Tokens to create harmonious visual languages and brand
            identities
          </div>
        </li>
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20"></div>
          <div  className=" text-lg " >
            Crafting Components with precision, flexibility, and reusability
          </div>
        </li>
        <li className=" p-4 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mb-4 rounded-full size-12 bg-zinc-50 dark:bg-white/20"></div>
          <div  className=" text-lg ">
            Documenting your design system like a pro for seamless collaboration
          </div>
        </li>
      </ul>
      <p className="mt-6 text-xl md:text-2xl">
        
        Gain exclusive access to advanced techniques and industry secrets.
        Register now and join us on this thrilling journey
      </p>
    </div>
  );
}
