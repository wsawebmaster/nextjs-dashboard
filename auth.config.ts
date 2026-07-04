import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  secret:
    process.env.NEXTAUTH_SECRET ||
    process.env.SUPABASE_JWT_SECRET ||
    "dev-nextauth-secret",
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (!isLoggedIn && isOnDashboard) {
        return false;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
