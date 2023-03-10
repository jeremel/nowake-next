import Head from "next/head";

import Header from "@/components/Header";
import FullScreenImage from "@/components/FullScreenImage";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
// import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>No Wake - Website Design & Development Studio</title>
        <meta
          name="description"
          content="We're a South Jersey based creative studio that specializes in designing and developing websites for companies that don't want to look like everyone else."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NoWakeLogo_CircleEnclosed.png" />
      </Head>

      <main className="h-full">
        {/* <div className="bg-primary-white min-h-screen relative z-10"> */}
        <Header />
        {/* <Services /> */}
        <ContactSection />
        <FullScreenImage />
        {/* </div> */}
        <Footer />
      </main>
    </>
  );
}
