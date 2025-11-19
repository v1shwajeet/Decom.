import { useRouter, useSearchParams } from "next/navigation";

const AuthCallback = () => {
    const router = useRouter();

    const searchparams = useSearchParams()
    const origin = searchparams.get('origin')
}

export default AuthCallback