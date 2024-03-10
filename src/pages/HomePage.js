import React from 'react'
import { useEffect ,useState} from 'react';
import SideBar from '../components/siderbar/Sidebar'
import DefaultNote from '../components/notes/DefaultNote';
import GroupNote from '../components/notes/GroupNote';
import NoteContext from '../context/NoteContext';
import CreateGroup from '../components/siderbar/popup-modal/CreateGroup';
import { useSelector } from 'react-redux';
export default function HomePage() {
const [windowSize, setWindowSize] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
 
  // }, []); 
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const {selectedGroup}=useSelector((state)=>state.group);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
     <div style={{width:"100vw",height:"100vh",margin:"0",padding:"0",display:"flex"}}>
        <SideBar openModal={openModal}></SideBar>
        {selectedGroup==null?<DefaultNote></DefaultNote>:<GroupNote></GroupNote>}
        {
        isModalOpen&&<CreateGroup></CreateGroup>
        }
     </div>    
  )
}
