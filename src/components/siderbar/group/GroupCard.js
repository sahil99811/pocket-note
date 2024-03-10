import React from 'react'
import '../../../styles/GroupCard.css'
import {  useDispatch } from 'react-redux'
import {setSelectedGroup} from '../../../slices/groupSlice'
export default function Group({data}) {
  const dispatch=useDispatch();
  function onClickHandler(){
    console.log(data);
    dispatch(setSelectedGroup(data))
  }
  return (
   <div className='group' onClick={onClickHandler}>
    <div className='group-logo' style={{background:data.groupColor}}>{data.groupLogo}</div>
    <h3 className='group-name'>{data.groupName}</h3>
   </div>
  )
}
