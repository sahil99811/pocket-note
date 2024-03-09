import React from 'react'
import '../../styles/GroupNote.css'
import send from '../../assets/send.png'
import GroupNoteCard from './NotesCard/GroupNoteCard'
export default function GroupNote() {
  return (
   <div className='groupName-container'>
    <header className='header'>
      <div className='groupLogo'>MN</div>
      <p>My Notes</p>
    </header>
    <section className='groupNotes'>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>
     <GroupNoteCard></GroupNoteCard>     
    </section>
    <div className='inputNote-container'>
     <div className='inputNote'>
     <img src={send} alt='sendnote' className='sendNote'></img>
     </div>
    </div>
   </div>
  )
}
