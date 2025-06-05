import { isAuthenticated } from "@/utils/isAuthenticated";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import { auth } from "@/lib/firebase/client";
import { Create } from "@mui/icons-material";

const Home = async () => {
  
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center pl-24 pr-24">
      <Navbar />
      <div className="h-full w-full">
        <div className="w-full flex flex-row justify-between items-center p-2.5">
          <div className="flex flex-row gap-2.5">
            <h1 className="text-white text-5xl font-bold">Hi Srinand!</h1>
            <p className="text-gray-3 font-bold self-end">Let's write some trauma today</p>
          </div>
          <div>
            <button className="flex flex-row text-white bg-gray-4 p-2.5 rounded-lg gap-2.5 items-center">
              <p className="font-semibold">Create</p>
              <Create sx={{ fontSize: 24 ,color: 'white'}}/></button>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Home;

