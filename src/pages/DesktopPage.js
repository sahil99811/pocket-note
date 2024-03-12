import React from 'react'
import Sidebar from '../components/siderbar/Sidebar'
import { useSelector } from 'react-redux';
import DefaultNote from '../components/notes/DefaultNote';
import GroupNote from '../components/notes/GroupNote';

// DesktopPage component renders the sidebar and either the default note or group note based on the selectedGroup state
// Props:-openModal: Function to open the modal for creating a new group
export default function DesktopPage({ openModal }) {
  // Get the selectedGroup state from Redux store
  const { selectedGroup } = useSelector(state => state.group);

  return (
    <>
      {/* Render Sidebar component with openModal prop */}
      <Sidebar openModal={openModal}></Sidebar>

      {/* Conditional rendering: if selectedGroup is null, render DefaultNote component, else render GroupNote component */}
      {selectedGroup == null ? <DefaultNote></DefaultNote> : <GroupNote></GroupNote>}
    </>
  )
}
