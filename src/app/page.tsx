"use client"

import {HomeClient} from "@/components/home/HomeClient";
import { authClient } from "@/lib/auth-client";
import ParticleBackground from "@/components/ParticleBackground";
import { Hero } from "@/components/home/Hero";

export default function Home() {

  const {
    data: session,
  } = authClient.useSession();

  return (
    <>

      <ParticleBackground/>

      <HomeClient userId={session?.user?.id} />

   </>
  )
}
