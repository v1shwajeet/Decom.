import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import { trpc } from '../_trpc/client'

function page() {

  const router = useRouter()
  const origin = useSearchParams().get('origin')
  // we are passing string hello to data thus the data type will be of string hence its working
  const {data, isLoading} = trpc.test.useQuery() // useQuery is used as we had defined test:query in index.ts in trpc folder
}

export default page