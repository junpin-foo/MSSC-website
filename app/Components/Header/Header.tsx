import React from "react";
import Styles from "./Header.module.css";
import Image from "next/image";
import bg from "../../../public/tempImages/Darian6.png";


const Header = () => {
    return (
        <main className={Styles.main}>
            <div> 
                <Image fill={true} src={bg.src} alt="Cover Image" className="bg-img"/>
            </div>
            <h1 className={Styles.h1}>Malaysian Singaporean Student Club</h1>
            <h1 className={Styles.h1}>Simon Fraser University</h1>
            <div className={Styles.tag}>
                <p>please scroll</p>
                
            </div>
        </main>
    );
};

export default Header;