"use client";
import React from "react";
import styles from "./Gallery.module.css";
import CustomImage from "../Images/Images";
//TODO: dynamically get images from google drive
import ImageTwo from "../../../public/tempImages/Darian2.png";
import ImageFour from "../../../public/tempImages/Darian4.png";
import ImageFive from "../../../public/tempImages/Darian5.png";
import ImageSix from "../../../public/tempImages/Darian6.png";
import { motion } from "framer-motion";

const Gallery = () => {
    return (
        <section className={styles.section}>
            <div className={styles.gallery}>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.1, ease: "easeOut"}}
                    viewport={{once: true}} //do animation once
                >
                    <CustomImage
                        imageSource={ImageFour}
                        imageStyle={{ width: "85%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.25, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <div className={styles.textdiv}> 
                        <h1 className={styles.h1}> Our mission: </h1>
                        <br></br>
                        <p className={styles.p}> 
                            To cultivate a strong sense of community amongst 
                            Malaysians and Singaporeans at SFU, while promoting 
                            our respective cultures and providing a safe space 
                            for anyone interested!</p>
                    </div>
                    {/* <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "95%" }}
                    /> */}
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{x: 200, y: 100}}
                    whileInView={{x: 0, y: 0}}
                    transition={{duration: 0.5, delay: 0.25, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <CustomImage
                        imageSource={ImageTwo}
                        imageStyle={{ width: "75%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{opacity: 0, x: 200, y: 100}}
                    whileInView={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 0.5, delay: 0.55, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <CustomImage
                        imageSource={ImageFive}
                        imageStyle={{ width: "75%" }}
                    />
                </motion.div>
                <motion.div
                    className={styles.imageContainer}
                    style={{ justifyContent: "flex-start" }}
                    initial={{opacity: 0, x: -200, y: -100}}
                    whileInView={{opacity: 1, x: 0, y: 0}}
                    transition={{duration: 0.5, delay: 0.75, ease: "easeOut"}}
                    viewport={{once: true}}
                >
                    <CustomImage
                        imageSource={ImageSix}
                        imageStyle={{ width: "90%" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;