import { initTRPC, TRPCError } from '@trpc/server';
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

const middleware = t.middleware


const isAuth = middleware(async (opts)=>{
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || !user.id) throw new TRPCError({code: 'UNAUTHORIZED'})

    return opts.next({
        ctx: {
            userId: user.id,
            user
        }
    })
})

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);

/*
router = creates a group of backend routes (your whole backend)
publicProcedure = creates one backend route inside that group

Your frontend calls the tRPC client →
provider sends request → /api/trpc →
request hits the backend tRPC router →
backend logic runs → result goes back → frontend redirects.
*/