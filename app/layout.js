import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeprovider";
import { ModeToggle } from "@/components/modetoggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Weekend Workshops",
  description: "Learn something new every weekend",
};



let Header = () => {
  return (
    <nav className="z-50 bg-background sticky top-0   ">
      <div className="flex justify-between border-b p-4">
       <Link href="/"> <div className="text-foreground text-2xl  font-medium">W</div></Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
let Footer = () => {
  return (
    <footer className=" bg-background z-50  mt-[200px] border-t w-full max-w- flex justify-between items-center">
      <div className="p-12">
        <div className="text-4xl mb-2 font-medium">
          W
        </div>
      <div className="text-foreground/70 font-medium ">
        Copyright 2024 · Weekend Workshop
      </div>

      </div>
      
      <div className="pr-12"> 
        <div className="text-lg">Subscribe to our newsletter</div>
        <div className="pt-4 text-foreground flex space-x-3 ">
          <Input type="email" placeholder="Enter Email" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className={cn(
              "bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
