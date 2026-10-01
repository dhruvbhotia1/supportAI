import { VerifyEmailComponent } from "@/components/auth/verify-email"
import {getServerSession} from "@/hooks/user/getServerSession";

export default async function VerifyEmailPage() {

    const data = await getServerSession();

    let email: string = "";

    if(data.status == "success") {

        email = data.data?.user.email as string;
    }

  return (
    <>
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
