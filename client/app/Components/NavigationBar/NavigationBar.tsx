import React from "react";
import Image from "next/image";
import styles from './NavigationBar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image className={styles.img} src="/mssc-logo.png" alt="Logo" width={85} height={50}/>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#home">Home</a></li>
          <li><a href="#pastevents">Past Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;