import { AppRouter } from '@/trpc'
import { createTRPCReact } from '@trpc/react-query'

export const trpc = createTRPCReact<AppRouter>({}) // AppRouter passed as generics as main type-safety handler