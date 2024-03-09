
import './App.css';
import { useEffect } from 'react';
import DefaultNote from './components/notes/DefaultNote';
import GroupNote from './components/notes/GroupNote';
import CreateGroup from './components/popup-modal/CreateGroup';
import Sidebar from './components/siderbar/Sidebar';
import NoteContext from './context/NoteContext';
import { useState } from 'react';
function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
 
  }, []); 
  const [notesData, setNotesData] = useState(
    localStorage.getItem("notesData") || []
  )

  const [selected, setSelected] = useState(
    localStorage.getItem('selected') || []
  )
  return (
    <NoteContext.Provider value={{ notesData, setNotesData, selected, setSelected }}>
      <div style={{width:"100vw",height:"100vh",margin:"0",padding:"0",display:"flex"}}>
       <Sidebar></Sidebar>
       {/* <DefaultNote></DefaultNote> */}
       {/* <CreateGroup></CreateGroup> */}
       {/* <GroupNote></GroupNote> */}
      </div>
    </NoteContext.Provider>
  );
}

export default App;
