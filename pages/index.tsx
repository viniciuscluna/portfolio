import Content from "@/components/Content";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vinícius Luna - Porfolio</title>
        <meta name="description" content="Vinícius Luna - Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Content />
      </main>
    </>
  );
}
