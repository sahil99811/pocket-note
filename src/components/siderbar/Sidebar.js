import React from 'react'
import  '../../styles/Sidebar.css'
import Group from './group/GroupCard'
export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <h2>Pocket Notes</h2>
      <div className='group-container'>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
        <Group></Group>
      </div>
      <button >+</button>
    </div>
  )
}
