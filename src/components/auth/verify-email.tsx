"use client"

//apply rate limiting here.
import {Button} from "@/components/ui/button";
import {authClient} from "@/lib/auth-client";

interface Props {

    email: string;
}

export function VerifyEmailComponent({email} : Props) {

    const resendEmail = async (email: string) => {

        try {

            await authClient.sendVerificationEmail({
                email,
                callbackURL: "/"
            })

        } catch {

            console.log("Verification failed");
        }

    }

  return (
    <div className="flex-row items-center justify-center border-white border rounded-md p-4 font-semibold space-y-4">
      <p className="tracking-wide">
        You have been redirected to this because your email is still unverified. Please verify your email by clicking the link sent to your inbox.
        Didn&apos;t receive one yet? We can resend it.
      </p>

        <div className={"flex items-center justify-center"}>
            <Button className={"w-1/2 font-semibold"} onClick={() => resendEmail(email)}>
                Resend
            </Button>
        </div>
    </div>
  )
}
