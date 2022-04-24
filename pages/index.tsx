import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LogIn from "./logInPage";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getStaticProps() {
  const users = await prisma.user.findMany();
  console.log(users);

  const allUsers = JSON.stringify(users);

  return {
    props: { users: allUsers },
  };
}
const Home: NextPage = (props) => {
  // check if logged in
  return <LogIn props={props} />;
};

export default Home;
