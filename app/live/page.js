import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function Event() {
  return (

    <div className="flex flex-col items-center justify-center w-screen  min-h-[400px]">
     
    <div className="mt-6 text-center">
        <Calendar className="mx-auto mb-6 size-20" />
    
    <h2 className="mb-3 text-3xl font-semibold ">Framer 101</h2>
    </div>

    <div className="w-full p-3 mx-2 text-2xl text-center">Event starts on <span className="text-green-500 ">Saturday 26th October, 7:00PM IST </span></div>
    <div>You will be able to view the event here on this page 15 mins before the event starts</div>
    
  


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
    </div>
    

  */
    