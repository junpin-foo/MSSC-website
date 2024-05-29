
import React from 'react';
import styles from './MainPage.module.css';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import NavigationBar from '../NavigationBar/NavigationBar';

const MainPage: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className={styles.mainPage}>
            <NavigationBar />
            <WelcomeSection />
            <footer className={styles.footer}>
                <p>&copy; 2024 MSSC</p>
            </footer>
        </div>
    );
};

export default MainPage;
