import React, { useEffect, useState } from 'react';
import CreateGroup from '../components/siderbar/popup-modal/CreateGroup';
import '../styles/HomePage.css';
import DesktopPage from './DesktopPage';
import MobilePage from './MobilePage';

// HomePage component renders either DesktopPage or MobilePage based on window size, and handles modal open/close state
export default function HomePage() {
  // State to track window size
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  // State to track modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to handle window resize event
  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize(window.outerWidth);
      }, 0); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="homepage-container" >
      {/* Render DesktopPage or MobilePage based on window size */}
      {windowSize > 500 ? <DesktopPage openModal={openModal}></DesktopPage> : <MobilePage openModal={openModal}></MobilePage>}
      
      {/* Render CreateGroup modal if isModalOpen is true */}
      {isModalOpen && <CreateGroup closeModal={closeModal} />}
      
      {/* Render overlay if modal is open */}
      {isModalOpen && <div className="overlay" onClick={closeModal}></div>}
    </div>
  );
}
