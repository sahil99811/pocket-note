import React, { useEffect, useState } from 'react';
import CreateGroup from '../components/siderbar/popup-modal/CreateGroup';
import '../styles/HomPage.css'
import DesktopPage from './DesktopPage';
import MobilePage from './MobilePage';

export default function HomePage() {
  const [windowSize, setWindowSize] = useState(window.outerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="homepage-container" >
      {
        windowSize>500?<DesktopPage openModal={openModal}></DesktopPage>:<MobilePage openModal={openModal}></MobilePage>
      }
      {isModalOpen && <CreateGroup closeModal={closeModal} />}
      {
        isModalOpen&&<div className="overlay" ></div>
      }  
    </div>
  );
}
