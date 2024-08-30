"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './WelcomeSection.module.css';
import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const fetchImagesFromDatabase = async () => {
  // Database pictures for slideshows placeholder
  return [
    '/api/placeholder/400/300',
    '/api/placeholder/400/300',
    '/api/placeholder/400/300'
  ];
};

const WelcomeSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [textOpacity, setTextOpacity] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const placeholderImages = [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=3',
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=5'
    ];
    setImages(placeholderImages);

    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Flower shape
    const createFlowerShape = () => {
      const shape = new THREE.Shape();
      const petalCount = 5;
      const radius = 0.5;

      for (let i = 0; i <= petalCount; i++) {
        const angle = (i / petalCount) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        if (i === 0) {
          shape.moveTo(x, y);
        } else {
          const prevAngle = ((i - 1) / petalCount) * Math.PI * 2;
          const midX = Math.cos((angle + prevAngle) / 2) * radius * 1.1;
          const midY = Math.sin((angle + prevAngle) / 2) * radius * 1.1;
          shape.quadraticCurveTo(midX, midY, x, y);
        }
      }

      return shape;
    };

    // Floating flowers
    const flowers: THREE.Mesh[] = [];
    const flowerColors = [0xbe2120, 0xac3aa9]; 

    for (let i = 0; i < 20; i++) {
      const flowerShape = createFlowerShape();
      const flowerGeometry = new THREE.ShapeGeometry(flowerShape);
      const flowerMaterial = new THREE.MeshBasicMaterial({ 
        color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
        side: THREE.DoubleSide
      });
      const flower = new THREE.Mesh(flowerGeometry, flowerMaterial);

      flower.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 15
      );
      flower.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      scene.add(flower);
      flowers.push(flower);
    }

    camera.position.z = 5;

    // Faster animation resembling throwing flowers
    const animate = () => {
      requestAnimationFrame(animate);

      flowers.forEach((flower) => {
        flower.position.x += (Math.random() - 0.5) * 0.1;
        flower.position.y += (Math.random() - 0.5) * 0.1;
        flower.position.z += 0.1;

        flower.rotation.x += 0.05;
        flower.rotation.y += 0.05;

        if (flower.position.z > 5) {
          flower.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            -15
          );
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Text fade-in effect
    setTimeout(() => {
      setTextOpacity(1);
    }, 1000);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '25%',
        transform: 'translate(-25%, -50%)',
        color: '#000000', 
        fontFamily: 'Arial, sans-serif',
        opacity: textOpacity,
        transition: 'opacity 2s ease-in-out',
        maxWidth: '50%'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to MSSC Memoir</h1>
        <p style={{ fontSize: '1.2rem' }}>Join our Malaysian-Singaporean culture!<br />Create fun memories and make new friends.</p>
      </div>
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '25%',
        transform: 'translate(25%, -50%)',
        width: '400px',
        height: '300px',
        overflow: 'hidden'
      }}>
        {images.length > 0 && (
          <img 
            src={images[currentImageIndex]} 
            alt={`Placeholder ${currentImageIndex + 1}`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.5s ease-in-out'
            }}
          />
        )}
      </div>
    </div>
  );
};

export default WelcomeSection;

