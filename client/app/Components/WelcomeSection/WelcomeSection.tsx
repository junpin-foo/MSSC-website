"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './WelcomeSection.module.css';

const WelcomeSection: React.FC = () => {
    return (
        <section id="welcome" className={styles.section}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[0, 5, 5]} intensity={1} />
                        <mesh>
                            <boxGeometry args={[2, 2, 2]} />
                            <meshStandardMaterial color={'orange'} />
                        </mesh>
                    </Canvas>
                </div>
                <div className={styles.text}>
                    <h2>Welcome to the MSSC Website</h2>
                    <p>Our goal is to celebrate cultural diversity and foster a vibrant community through various events and activities.</p>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
