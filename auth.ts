import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { User } from "./app/lib/definitions";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { users as placeholderUsers } from "./app/lib/placeholder-data";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const users = await sql<User>`SELECT * FROM users WHERE email = ${email}`;
    const dbUser = users.rows[0];
    if (dbUser) {
      return dbUser;
    }

    return placeholderUsers.find((user) => user.email === email) as
      | User
      | undefined;
  } catch (error) {
    console.error(error);
    return placeholderUsers.find((user) => user.email === email) as
      | User
      | undefined;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;

          const isHashedPassword =
            typeof user.password === "string" &&
            /^\$2[aby]\$\d{2}\$/.test(user.password);
          const passwordsMatch = isHashedPassword
            ? await bcrypt.compare(password, user.password)
            : password === user.password;

          if (passwordsMatch) return user;
        }
        console.log("Credenciais inválidas");
        return null;
      },
    }),
  ],
});
