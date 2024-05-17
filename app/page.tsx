import Head from "next/head";
import Image from "next/image";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Index from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";

export default function Home() {
  return (
    <body>
        <Index></Index>
        {/* <Header></Header> */}
        <Gallery></Gallery>
        <Footer></Footer>
    </body>
  );
}
