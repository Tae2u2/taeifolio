import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Project = dynamic(() => import("@components/projects/Project"));

const Home: NextPage = () => {
  return <Project />;
};

export default Home;
