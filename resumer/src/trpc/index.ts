import { publicProcedure, router } from './trpc';

export const appRouter = router({
  test: publicProcedure.query(()=>{
    return "Hello"
  }) // query for get while mutation for put,patch,delete
});
export type AppRouter = typeof appRouter;