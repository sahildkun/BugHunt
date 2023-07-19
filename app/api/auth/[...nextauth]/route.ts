import NextAuth from "next-auth/next";
import { options } from "./options";
//passing authoptions to next auth

const handler = NextAuth(options);

export {handler as GET , handler as POST}   