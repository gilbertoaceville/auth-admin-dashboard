import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';

import { authConfig } from './auth.config';
import { connectToDB } from './lib/mongoose/connection';
import { User } from './lib/mongoose/models/user';

async function login(credentials) {
  try {
    connectToDB();

    const user = await User.findOne({ username: credentials.username });

    if (!user || !user.isAdmin) throw new Error('Invalid user credentials');

    const isPassword = await bcrypt.compare(credentials.password, user.password);

    if (!isPassword) throw new Error('Invalid user credentials');

    return user;
  } catch (error) {
    console.error(error);
    throw new Error('An issue occurred during login', error);
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.image = token.image;
      }
      return session;
    },
  },
});
