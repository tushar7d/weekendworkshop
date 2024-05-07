import { ModeToggle } from "@/components/modetoggle";


export default function Home() {
  return (
    <main className=" flex space-x-3 align-middle  items-center justify-center w-screen h-screen">
      <div className="text-4xl font-semibold">Coming soon</div>
      <ModeToggle />
    </main>
  );
}
