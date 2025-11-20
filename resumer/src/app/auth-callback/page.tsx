import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '../_trpc/client'

const page = async () => {

  const router = useRouter()
  const origin = useSearchParams().get('origin')

  const {data,isLoading} = trpc.authCallback.useQuery(undefined, {
    onSuccess:({success}) => {
      if(success){
        router.push(origin ? `/${origin}` : '/dashboard')
      }
    }})
  // // we are passing string hello to data thus the data type will be of string hence its working
  // const {data, isLoading} = trpc.test.useQuery() // useQuery is used as we had defined test:query in index.ts in trpc folder

}

export default page