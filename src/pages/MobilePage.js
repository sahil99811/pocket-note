import React from 'react'
import Sidebar from '../components/siderbar/Sidebar'
import { useSelector } from 'react-redux';
import GroupNote from '../components/notes/GroupNote';

// MobilePage component renders the sidebar or group notes based on the selectedGroup state
// Props:-openModal: Function to open the modal for creating a new group
export default function MobilePage({ openModal }) {
    // Get the selectedGroup state from Redux store
    const { selectedGroup } = useSelector(state => state.group);

    return (
        <>
            {/* Conditional rendering: if selectedGroup is null, render Sidebar component with openModal prop, else render GroupNote component */}
            {selectedGroup == null ? <Sidebar openModal={openModal}></Sidebar> : <GroupNote></GroupNote>}
        </>
    )
}
