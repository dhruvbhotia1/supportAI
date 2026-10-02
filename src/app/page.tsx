"use client"

import {HomeClient} from "@/components/home/HomeClient";
import { authClient } from "@/lib/auth-client";
import ParticleBackground from "@/components/ParticleBackground";
import {SocialProof} from "@/components/home/SocialProof";
import {Features} from "@/components/home/Features";
import {Hero} from "@/components/home/Hero";
import {IntegrationDialog} from "@/components/home/IntegrationDialog";

export default function Home() {

  const {
    data: session,
  } = authClient.useSession();

  return (
    <>

        <ParticleBackground/>

        <HomeClient userId={session?.user?.id} />

        <Hero/>

        <SocialProof/>

        <Features/>

        <IntegrationDialog/>

   </>
  )
}
