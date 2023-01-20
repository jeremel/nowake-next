import Head from "next/head";

import Header from "@/components/Header";
import FullScreenImage from "@/components/FullScreenImage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>No Wake Studio</title>
        <meta
          name="description"
          content="No Wake Studio is a South Jersey based digital creative studio with a focus on building custom websites for companies that want to stand out from the crowd"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NoWakeLogo_CircleEnclosed.png" />
      </Head>

      <main>
        <div className="bg-primary-off-white relative z-10">
          <Header />
          <FullScreenImage data="/bird-bay.jpg" />
        </div>
        <Footer />
      </main>
    </>
  );
}
