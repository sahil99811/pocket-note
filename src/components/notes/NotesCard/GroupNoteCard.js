import React from 'react'
import '../../../styles/GroupNoteCard.css'
export default function GroupNoteCard({data}) {
  return (
    <div className='notecard-container'>
      <p>{data.note}</p>
      <div className='date-time'>
        <span>{data.date}</span>
        <p></p>
        <span>{data.time}</span>
      </div>
    </div>
  )
}
