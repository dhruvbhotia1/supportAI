import "server-only"
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {resend} from "@/lib/resend";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),

    emailAndPassword: {
        enabled: true,
    },

    emailVerification: {
      sendVerificationEmail: async ({user, url}) => {
          const {data, error} = await resend.emails.send({

              from: 'Acme <onboarding@resend.dev>',
              to: user.email,
              subject: "Verify your email address",
              html: `Click ${url} to verify your email address`,

          });

          if(error) {
              console.log(error);
              throw new Error("Failed to send verification email");
          }

          console.log("verification awaiting.....")
      },
      sendOnSignUp: true,
    }

});
