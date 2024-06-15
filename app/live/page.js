import { Calendar } from "lucide-react";

export default function Event() {
    return (


        <div className="flex flex-col items-center justify-center w-screen  min-h-[400px]">

            <div className="text-center ">
                <Calendar className="mx-auto mb-6 size-20" />
            <h1 className="mb-1 text-xl">Ask me anything</h1>
            <h2 className="mb-3 text-3xl font-semibold ">Design systems Edition</h2>
            </div>

            <div>Event starts on <span className="text-green-500">Sunday 16 June, 8:00PM IST </span></div>

        </div>
        
    )}




/*<iframe
        title="100ms-app"
        allow="camera *;microphone *;display-capture *"
        src="https://weekendworkshop.app.100ms.live/meeting/blw-ajzs-eit"
        className="w-full h-screen "
    >
    </iframe>)*/
        