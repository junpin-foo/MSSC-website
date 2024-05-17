import Head from "next/head";
import Image from "next/image";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <body>
        <Header></Header>
        <Gallery></Gallery>
    </body>
  );
}
