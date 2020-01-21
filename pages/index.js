import React from "react";
import Head from "next/head";
import Nav from "../src/components/Nav";
import HomePage from "../src/components/HomePage";

const Home = () => (
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
