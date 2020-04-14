import { NextPage } from "next";
import Head from "next/head";
import Nav from "../src/components/Nav";
import HomePage from "../src/components/HomePage";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <HomePage />
  </div>
);

export default Home;
