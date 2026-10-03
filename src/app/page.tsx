"use client"

import {HomeClient} from "@/components/home/HomeClient";
import { authClient } from "@/lib/auth-client";
import ParticleBackground from "@/components/ParticleBackground";
import {SocialProof} from "@/components/home/SocialProof";
import {Features} from "@/components/home/Features";
import {Hero} from "@/components/home/Hero";
import {IntegrationDialog} from "@/components/home/IntegrationDialog";
import {PricingSection} from "@/components/home/PricingSection";
import {Footer} from "@/components/home/Footer";

export default function Home() {

  const {
    data: session,
  } = authClient.useSession();

  return (
    <main>

        <ParticleBackground/>

        <HomeClient userId={session?.user?.id} />

        <Hero/>

        <SocialProof/>

        <Features/>

        <IntegrationDialog/>

        <PricingSection/>

        <Footer/>

   </main>
  )
}
