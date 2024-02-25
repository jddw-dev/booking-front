import { NextAuthOptions, getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId;
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
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        return { id: 'test' };
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
