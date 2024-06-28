import { Calendar } from "lucide-react";

export default function Event() {
  return (


    <div className="flex flex-col items-center justify-center w-screen  min-h-[400px]">

    <div className="text-center ">
        <Calendar className="mx-auto mb-6 size-20" />
    
    <h2 className="mb-3 text-3xl font-semibold ">Portfolio Review</h2>
    </div>

    <div>Event starts on <span className="text-green-500">Sunday 28 June, 8:00PM IST </span></div>

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
    