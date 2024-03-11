import React from 'react'
import Sidebar from '../components/siderbar/Sidebar'
import { useSelector } from 'react-redux';
import GroupNote from '../components/notes/GroupNote';
export default function MobilePage({openModal}) {
    const { selectedGroup } = useSelector(state => state.group);
    return (
    <>
    {
        selectedGroup==null?<Sidebar openModal={openModal}></Sidebar>:<GroupNote></GroupNote>
    } 
    </>
  )
}
