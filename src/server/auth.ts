import { NextAuthOptions, getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && account.type === 'credentials') {
        if (user) {
          token = {
            ...token,
            // @ts-ignore
            accessToken: user.accessToken,
            // @ts-ignore
            refreshToken: user.refreshToken,
          };
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      if (session && session.user) {
        session.user.id = token.userId;
      }

      return session;
    },
  },

  pages: {
    signIn: '/login',
  },

  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch('http://localhost:3000/v1/auth/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });

        if (res.ok) {
          const user = res.json();
          if (user) {
            return user;
          }
        }

        return null;
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
