"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren, useState } from "react"
import { trpc } from "../app/_trpc/client"
import { httpBatchLink } from "@trpc/client" 

const Providers = ({children}: PropsWithChildren) => { // can also use children:ReactNode in place of PropsWithChildren

  const [queryClient] = useState(()=>new QueryClient())
  const [trpcClient] = useState(()=> trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc", // All requests will hit this
      }),
    ],
  }))

  return (
    <trpc.Provider
      client={trpcClient}
      queryClient={queryClient}>
      {/* QueryClientProvider has nothing to do with trpc just setting up as we want to wrap up the QueryClient furthur in our project */}
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider> 
      </trpc.Provider>
  )
}

export default Providers
