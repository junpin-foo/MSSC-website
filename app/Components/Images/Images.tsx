import React from "react";
import styles from "./Images.module.css";
import Image, { StaticImageData } from "next/image";

interface CustomImageProps {
    imageSource: string | StaticImageData; // Accept string or StaticImageData
    imageStyle: React.CSSProperties;
}

const CustomImage: React.FC<CustomImageProps> = ({
    imageSource,
    imageStyle,
}) => {
    const src = typeof imageSource === "string" ? imageSource : imageSource.src;

    return (
        <Image
            className={styles.image}
            src={imageSource}
            alt="image of an electric car"
            style={imageStyle}
        />
    );
};

export default CustomImage;