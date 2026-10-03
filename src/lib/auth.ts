import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "@/lib/prisma";
import {resend} from "@/lib/resend";
import activation from "@/components/email-templates/activation";

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
              react: activation({companyName: "SupportAI", url: url})

          });

          if(error) {
              console.log(error);
              throw new Error("Failed to send verification email");
          }

          console.log("verification awaiting.....")
      },
      sendOnSignUp: true,
    },

    socialProviders: {
        github: {
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        },

        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }
    }

});
