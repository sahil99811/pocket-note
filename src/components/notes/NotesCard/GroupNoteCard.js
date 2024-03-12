import React from 'react'
import '../../../styles/GroupNoteCard.css'

// GroupNoteCard component displays a single note within a group
// Props:- data: Object containing single note data (note, date, time)
export default function GroupNoteCard({ data }) {
  return (
    <div className='notecard-container'>
      {/* Note content */}
      <p>{data.note}</p>
      {/* Date and time section */}
      <div className='date-time'>
        {/* Date */}
        <span>{data.date}</span>
        {/* Empty paragraph for spacing */}
        <p></p>
        {/* Time */}
        <span>{data.time}</span>
      </div>
    </div>
  )
}
