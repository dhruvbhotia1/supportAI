import { VerifyEmailComponent } from "@/components/auth/verify-email"
import {getServerSession} from "@/lib/user/getServerSession";
import ParticleBackground from "@/components/ParticleBackground";

export default async function VerifyEmailPage() {

    const data = await getServerSession();

    let email: string = "";

    if(data.status == "success") {

        email = data.data?.user.email as string;
    }

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
