import React from "react";
import Styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
    return (
        <main className={Styles.main}>
            <h1 className={Styles.h1}>Simon Fraser University</h1>
            <h1 className={Styles.h1}>Malaysian Singaporean Student Club</h1>
            <div className={Styles.tag}>
                <p>please scroll</p>
                
            </div>
        </main>
    );
};

export default Header;