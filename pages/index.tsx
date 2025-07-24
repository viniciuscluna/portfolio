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
        <link rel="icon" href="/assets/images/vl_logo2.png" />
      </Head>
      <main className="w-full overflow-x-hidden">
        <Header />
        <Content />
      </main>
    </>
  );
}
