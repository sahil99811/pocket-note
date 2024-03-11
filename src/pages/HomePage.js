import React, { useEffect, useState } from 'react';
import SideBar from '../components/siderbar/Sidebar';
import DefaultNote from '../components/notes/DefaultNote';
import GroupNote from '../components/notes/GroupNote';
import CreateGroup from '../components/siderbar/popup-modal/CreateGroup';
import { useSelector } from 'react-redux';
import DesktopPage from './DesktopPage';
import MobilePage from './MobilePage';

export default function HomePage() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedGroup } = useSelector(state => state.group);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
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
    <div style={{ width: "100vw", height: "100vh", margin: "0", padding: "0", display: "flex", position: "relative" }}>
      {
        windowSize>500?<DesktopPage openModal={openModal}></DesktopPage>:<MobilePage></MobilePage>
      }
      {isModalOpen && <CreateGroup closeModal={closeModal} />}
    </div>
  );
}
