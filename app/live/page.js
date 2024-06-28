import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Event() {
  return (


    <div className="flex flex-col items-center justify-center w-screen  min-h-[400px]">
     
    <div className="text-center ">
        <Calendar className="mx-auto mb-6 size-20" />
    
    <h2 className="mb-3 text-3xl font-semibold ">Portfolio Review</h2>
    </div>

    <div>Event starts on <span className="text-green-500">Sunday 28 June, 8:00PM IST </span></div>
    <img src="/pr.png" className="p-3 max-w-[512px] mt-6 border w-fit rounded-xl" />
    <div className="p-6 mt-4 font-medium text-center border rounded-xl">
      <div className="text-xl ">As we can only review limited number of portfolios please book your slot</div> 
      <Link
            href="https://forms.gle/MoZ8VTimErmy2KbE7"
            target="_blank"
            className="mt-6 md:mt-0 w-[100px]"
          >
            <Button  className="w-full mt-6">
              Book Slot 
            </Button>
          </Link>
      </div>
    


</div>
   
  );
}


/*
 <div className="flex flex-col items-center justify-center w-screen  min-h-[400px]">
      <iframe
        title="100ms-app"
        allow="camera *;microphone *;display-capture *"
        src="https://weekendworkshop-confernece.app.100ms.live/meeting/gnt-dsvs-igf"
        className="w-full h-screen "
      ></iframe>
    </div> */
    