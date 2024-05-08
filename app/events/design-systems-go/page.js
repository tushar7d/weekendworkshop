export default function Event() {
  return (
    <div className=" min-h-[80vh] p-12">
      <div className="mb-3 font-mono">Saturday · 25th May 2024</div>
      <h1 className="mb-4 text-5xl font-semibold text-foreground">
        Design System Go!
      </h1>
      <p className="mb-4">
        Unleash your creativity and level up your design game! Prepare for a
        detailed Design System Workshop that will take your design skills to new
        heights! Discover the secret sauce of successful design systems as we
        dive deep into:
      </p>
      <ul className="grid grid-cols-3 gap-3 mb-4 ">
        <li className="flex p-3 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mr-4 rounded-full size-12 bg-zinc-900 dark:bg-white/20"></div>
          <div className="w-[80%] ">
            Mastering Tokens to create harmonious visual languages and brand
            identities
          </div>
        </li>
        <li className="flex p-3 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mr-4 rounded-full size-12 bg-zinc-900 dark:bg-white/20"></div>
          <div  className="w-[80%] " >
            Crafting Components with precision, flexibility, and reusability
          </div>
        </li>
        <li className="flex p-3 text-sm border rounded-xl dark:bg-zinc-900">
          <div className="mr-4 rounded-full size-12 bg-zinc-900 dark:bg-white/20"></div>
          <div  className="w-[80%] ">
            Documenting your design system like a pro for seamless collaboration
            & communication 
          </div>
        </li>
      </ul>
      <p>
        {" "}
        Gain exclusive access to advanced techniques and industry secrets.
        Register now and join us on this thrilling journey
      </p>
    </div>
  );
}
