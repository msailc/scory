import Head from "next/head";
import Image from "next/image";
import DashboardResults from "../components/DashboardResults";
import DashboardNews from "../components/DashboardNews";
import DashboardPlayers from "../components/DashboardPlayers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
      <DashboardResults/>
      </div>
      <div className="flex">
      <DashboardNews/>
      <DashboardPlayers/>
      </div>
    </div>
  );
}
