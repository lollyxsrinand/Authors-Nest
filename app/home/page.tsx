import { isAuthenticated } from "@/utils/isAuthenticated";

const Home = async () => {
  await isAuthenticated();
  return <h1>welcum</h1>;
};
export default Home;
