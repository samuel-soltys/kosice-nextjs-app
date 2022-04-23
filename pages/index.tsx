import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { LogIn } from "./logInPage";

const Home: NextPage = () => {
  // check if logged in
  return <LogIn />;
};

export default Home;
