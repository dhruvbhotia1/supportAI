"use client"

import {HomeClient} from "@/components/home/HomeClient";
import {authClient} from "@/lib/auth-client";

export default function Home() {

    const {
        data: session,
    } = authClient.useSession()


    return (
    <>
      <HomeClient userId={session?.user?.id}/>
    </>
  )
}
