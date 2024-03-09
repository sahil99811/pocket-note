import React from 'react'
import image from '../../assets/defaultNoteImage.png'
import '../../styles/Notes.css'
import encrypted from '../../assets/encrypted.png'
export default function DefaultNote() {
  return (
    <div className='default-container'>
     <div className='default-note'>
      <img src={image} alt='notes'/>
      <h2>Pocket Notes</h2>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
     </div>
     <div className='encrypted-container'>
      <img src={encrypted} alt='encrypted'/>
      <p>end-to-end encrypted</p>
     </div>
    </div>
  )
}
