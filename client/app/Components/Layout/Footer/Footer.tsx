import React from 'react';
import { FaInstagram, FaDiscord,  } from 'react-icons/fa';
import { SiLinktree } from "react-icons/si";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="https://www.instagram.com/msscsfu" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaInstagram />
        </a>
        <a href="https://discord.com/invite/XnmzF2Nzt9" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaDiscord />
        </a>
        <a href="https://linktr.ee/msscsfu" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <SiLinktree />
        </a>
      </div>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
};

const iconContainerStyle = {
  display: 'flex',
  gap: '1rem',
};

const iconStyle = {
  color: 'white',
  fontSize: '1.5rem',
};

export default Footer;