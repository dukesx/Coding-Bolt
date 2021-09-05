import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId:
        "1036440562165-j7g06r27357plblbsbdosmf6k5gh6drv.apps.googleusercontent.com",
      clientSecret: "dqNSViuFyAK_dU1_HoDr-1Y5",
    }),
    //add more providers
  ],
  callbacks: {
    async signIn(user, account, profile) {
      return true;
    },
    async redirect(url, baseUrl) {
      return baseUrl;
    },
    async session(session, user) {
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      return token;
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: "postgres://codingbolt:Afzaal12@139.162.37.102:5432/codingbolt",
});
