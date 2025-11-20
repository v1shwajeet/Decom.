import { initTRPC } from '@trpc/server';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;

/*
router = creates a group of backend routes (your whole backend)
publicProcedure = creates one backend route inside that group

Your frontend calls the tRPC client →
provider sends request → /api/trpc →
request hits the backend tRPC router →
backend logic runs → result goes back → frontend redirects.
*/