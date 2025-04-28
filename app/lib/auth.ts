import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./db";
import { User } from "./models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectToDB();
        const user = await User.findOne({ username: credentials!.username });
        if (!user || !user.isAdmin) throw new Error("Invalid credentials");

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user._id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
};
