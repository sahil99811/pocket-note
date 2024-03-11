import React from 'react'
import Sidebar from '../components/siderbar/Sidebar'
import { useSelector } from 'react-redux';
import DefaultNote from '../components/notes/DefaultNote';
import GroupNote from '../components/notes/GroupNote';
export default function DesktopPage({openModal}) {
  const { selectedGroup } = useSelector(state => state.group);
  return (
    <>
    <Sidebar openModal={openModal}></Sidebar>
     {
        selectedGroup==null?<DefaultNote></DefaultNote>:<GroupNote></GroupNote>
     }
    </>
  )
}
