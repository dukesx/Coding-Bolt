import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_OAUTH_API_KEY,
      clientSecret: process.env.GOOGLE_OAUTH_API_SECRET,
    }),
    //add more providers
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return url;
    },
    async session(session, user) {
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});
