
import Image from "next/image";

export function FloatingDemo() {

  return (
    <div className="max-w-3xl mx-auto backdrop-blur-2xl relative z-10">

      <div className="absolute inset-0 backdrop-blur-xl rounded-full pointer-events-none" />
      <div className="rounded-2xl p-1 md:p-2 relative overflow-hidden ring-1 ring-white/10 shadow-2xl">
        <div className="flex flex-col h-125 md:h-150 w-full rounded-md overflow-hidden">
          <div className="h-14 border-b border-white/5 flex items-cetner justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <div className="text-sm font-medium text-zinc-300">

                SupportAI
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6">

            <div className="flex w-full flex-col items-start">

              <div className="w-8 h-8 rounded-full items-center justify-center shrink-0">

                <Image src={"./ai-bot.svg"} alt="AI Bot" height={52} width={52}/>

              </div>


            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
