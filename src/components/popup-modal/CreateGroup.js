import React from 'react'
import '../../styles/CreateGroup.css'
export default function CreateGroup() {
  return (
    <div className='creategroup-container'>
        <form>
         <h3>Create New Group</h3>
         <div className='groupName'>
         <label htmlFor="groupName">Group Name</label>
         <input 
          type='text'
          id='groupName'
          placeholder='Enter group name'
          required="required"
         />
         </div>
         <div className='groupColor-container'>
            <p>Choose colour</p>
            <div className='groupColor'>
            <div className='selectColor' style={{background:"#B38BFA"}}></div>
            <div className='selectColor' style={{background:"#FF79F2"}}></div>
            <div className='selectColor' style={{background:"#43E6FC"}}></div>
            <div className='selectColor' style={{background:"#F19576"}}></div>
            <div className='selectColor' style={{background:"#0047FF"}}></div>
            <div className='selectColor'style={{background:"#6691FF"}}></div>
            </div>
         </div>
         <button>Create</button>
        </form>
    </div>
  )
}
