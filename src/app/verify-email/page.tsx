"use client"
import { VerifyEmailComponent } from "@/components/auth/verify-email-component"
import ParticleBackground from "@/components/ParticleBackground";
import {authClient} from "@/lib/auth-client";

export default function VerifyEmailPage() {


    const {data} = authClient.useSession();

    let email : string = "";

    email = data?.user.email as string;


  return (
    <>
        <ParticleBackground/>
        {
            data ? (
                <VerifyEmailComponent email={email}/>
            ) : (
                <div>

                    INTERNAL_SERVER_ERROR.

                </div>
            )
        }
    </>
  )
}
