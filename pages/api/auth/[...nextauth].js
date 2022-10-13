import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { verifyPassword } from "../../../lib/auth";
import { connectDatabase } from "../../../lib/db";

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                const client = await connectDatabase();

                const userCollection = client.db().collection("users");
                const user = await userCollection.findOne({ email: credentials.email });

                if (!user) {
                    client.close();
                    throw new Error("No user found");
                }

                const isValid = await verifyPassword(credentials.password, user.password);

                client.close();
                if (!isValid) throw new Error("Invalid password ");
                return { email: user.email };
            },
        }),
    ],
});
