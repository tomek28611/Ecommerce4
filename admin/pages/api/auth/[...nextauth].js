import clientPromise from '@/lib/mongodb'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const adminEmails = ['tomek28611@gmail.com']

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:"724994162119-br6kpka0le93tsnj3mgen8g223ieuuem.apps.googleusercontent.com" ,
      clientSecret:"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"
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  callbacks: {
    session: ({ session, token, user }) => {
      if (adminEmails.includes(session?.user?.email)) {
      return session;
      } else {
        return false;
  }}
}})