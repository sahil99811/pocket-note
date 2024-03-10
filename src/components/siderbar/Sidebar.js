import React from 'react';
import '../../styles/Sidebar.css';
import GroupCard from './group/GroupCard';
import { useSelector } from 'react-redux';

export default function Sidebar({ openModal }) {
  const { groups } = useSelector((state) => state.group);
 
  return (
      <div className='sidebar-container'>
       <h2>Pocket Notes</h2>
       <div className='group-container'>
        {groups.map((item, index) => (
          <GroupCard key={index} data={item} />
        ))}
      </div>
      <button onClick={openModal} className='createGroup-button'>+</button>
      </div>

    
  );
}
