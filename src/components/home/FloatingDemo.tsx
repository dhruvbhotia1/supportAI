
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {SendHorizonalIcon} from "lucide-react";

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
            <div className="flex w-full flex-col gap-y-6 items-start">
              <div className="flex max-w-[85%] gap-3 flex-row">
                <div className="w-8 h-8 rounded-full items-center justify-center shrink-0">
                  <Image src={"./ai-bot.svg"} alt="AI Bot" width={65} height={65}/>
                </div>
                <div className="space-y-2">
                  <div className="p-4 rounded-2xl text-sm font-semibold leading-relaxed shadow-sm bg-white text-zinc-900 rounded-tl-sm ">
                    Hey there, How can I help you?
                  </div>

                  <div className={"flex flex-wrap gap-2 pt-1 ml-1"}>

                    <span className={"px-2 py-1.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-900 transition-opacity cursor-pointer"}>
                      FAQ
                    </span>

                    <span className={"px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-900 transition-opacity cursor-pointer"}>
                      Pricing
                    </span>

                    <span className={"px-3 py-1.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-medium hover:bg-zinc-900 transition-opacity cursor-pointer"}>
                      Support
                    </span>

                  </div>
                </div>
              </div>

              <div className={"flex w-full flex-col items-end"}>
                <div className={"flex max-w-[85%] gap-3 flex-row-reverse"}>
                  <div className={"w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-white/5 bg-zinc-800"}>
                    <Image src={"./user.svg"} alt="AI Bot" width={65} height={65}/>
                  </div>

                  <div className={"p-4 rounded-2xl text-sm font-semibold leading-relaxed shadow-sm bg-white text-zinc-900 rounded-tr-sm"}>
                    I need some information about this business.
                  </div>
                </div>
              </div>

              <div className="flex max-w-[85%] gap-3 flex-row">
                <div className="w-8 h-8 rounded-full items-center justify-center shrink-0">
                  <Image src={"./ai-bot.svg"} alt="AI Bot" width={65} height={65}/>
                </div>
                <div className="space-y-2">
                  <div className="p-4 rounded-2xl text-sm font-semibold leading-relaxed shadow-sm bg-white text-zinc-900 rounded-tl-sm ">
                    Sure thing! We are supportAI, a Saas initiative. Designed to...
                  </div>
                </div>

                <div className={"p-4 border-t border-white/5 shrink-0"}>
                </div>
              </div>
            </div>
          </div>

          <div className={"p-4 backdrop-blur-2xl border-t border-white-/5 shrink-0"}>
            <div className={"relative"}>

              <div className={"min-h-12.5 w-full px-4 py-3 text-sm border border-white/10 rounded-xl text-white flex items-center justify-between"}>

                <span>Type a message...</span>

                <Button className={"h-8 w-8 rounded-lg flex items-center justify-center text-white bg-transparent hover:bg-zinc-900 cursor-default"}>

                  <SendHorizonalIcon/>

                </Button>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
