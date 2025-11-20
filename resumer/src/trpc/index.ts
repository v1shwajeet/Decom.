import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError } from '@trpc/server';
import { publicProcedure, router } from './trpc';

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id || !user.email) {
      throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    // TODO: check if the user exists in the database and create them if not
    return { success: true };
  }),
  // test: publicProcedure.query(()=>{
  //   return "Hello"
  // }) // query for get while mutation for put,patch,delete
});

export type AppRouter = typeof appRouter;

/* 
appRouter is your entire tRPC backend API collected into one object.

export const appRouter = router({
  authCallback,
  // in future: user, posts, products, etc…
});

Think of it like:

"This is my backend. These are all the functions my frontend is allowed to call."

tRPC calls those functions procedures.
*/