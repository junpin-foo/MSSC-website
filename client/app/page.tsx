import Head from "next/head";
import Image from "next/image";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import Nav from "./Components/NavigationBar/NavigationBar";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage"

export default function Home() {
  return (
    <body>

        <MainPage></MainPage>
        {/* <Nav></Nav> */}
        {/* <Header></Header> */}
        {/* <Gallery></Gallery>
        <Footer></Footer> */}
    </body>
  );
}
