import { isAuthenticated } from "@/utils/isAuthenticated";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import Icon from "../components/Icon";
import { AskPrompt } from "../components/AskPromt";
import { JwtPayload } from "jsonwebtoken";


const Home = async () => {
  const token = await isAuthenticated() as JwtPayload
  if(!token) {
    redirect('/login')
  }
  const userRes = await fetch("http://localhost:4000/get-user-data", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.uid}`,
    },
  });
  const user = await userRes.json()

  if(!user.name) {
    return <AskPrompt token={token.uid}/>
  }
  console.log(user)
  
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center pl-24 pr-24">
      <Navbar />

      <div className="h-full w-full">
        <div className="w-full flex flex-row justify-between items-center p-2.5">

          <div className="flex flex-row gap-2.5">
            <h1 className="text-white text-5xl font-bold">Hi {user.name}</h1>
            <p className="text-gray-3 text-md font-bold self-end">Let's write some trauma today</p>
          </div>

          <div>
            <a href="/write" className="hover:invert-100 transition-all cursor-pointer flex flex-row text-white bg-gray-4 p-2.5 rounded-lg gap-2.5 items-center">
              <p className="font-semibold">Create</p>
              <Icon name="pencil" size={24} />
            </a>
          </div>

        </div>
      </div>

    </div>
  )
};
export default Home;

