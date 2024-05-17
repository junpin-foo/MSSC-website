import React from "react";
import Styles from "./Index.module.css";
import Image from "next/image";

const Index = () => {
    return (
        <nav className={Styles.main}>
            <Image
                className={Styles.image}
                src="/mssc-logo.png"
                alt="MSSC logo"
                width={150}
                height={150}
                />
        </nav>
    );
};

export default Index;