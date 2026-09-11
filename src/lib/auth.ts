import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Prisma } from "../../generated/prisma/client"; // your prisma client instance


export const auth = betterAuth({
    database: prismaAdapter(Prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),

  emailAndPassword: {
    enabled: true,
  }


});
