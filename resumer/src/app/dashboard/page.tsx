import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

 const dashboard = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user || !user.id) redirect('/auth-callback?origin=dashboard')

console.log(user);
  return (
    <div>
      name: {user?.given_name}
      Email: {user?.email}
    </div>
  )
}

export default dashboard