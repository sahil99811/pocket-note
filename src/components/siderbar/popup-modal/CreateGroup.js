import React, { useEffect, useState } from 'react'
import '../../../styles/CreateGroup.css'
import { useSelector,useDispatch } from 'react-redux'
import { setGroups } from '../../../slices/groupSlice';
const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];
export default function CreateGroup() {
  const dispatch = useDispatch();
  const {groups}=useSelector((state)=>state.group);
  const [groupData,setGroupData]=useState({
    groupName:"",
    groupColor:""
  });
  const isGroupExists = (groupName) => {
    return groups.some(group => group.groupName.toLowerCase() === groupName.toLowerCase());
  };

  function handleChange (event){
    const color=event.currentTarget.getAttribute('color');
    if(color){
      setGroupData({...groupData,groupColor:color});
      return;
    }
    setGroupData({...groupData,[event.target.name]:event.target.value});

  }
  function splitGroupName(groupName){
    const words = groupName.split(" ").slice(0, 2);
    if (words.length === 1) {
        return words[0].charAt(0).toUpperCase();
    } else {
        return (words[0].charAt(0) + words[1].charAt(0)).toUpperCase();
    }
  }
  function createGroup(event){
    event.preventDefault();
    console.log(groupData)
    setGroupData({groupColor:"",groupName:""});
    if(isGroupExists(groupData.groupName)===true){
     alert("group is already present");
     return;
    }
    const logo=splitGroupName(groupData.groupName);
    const newGroup={
      groupName:groupData.groupName,
      groupColor:groupData.groupColor,
      groupLogo:logo
    }
    const newGroups = [...groups, newGroup];
    console.log(newGroups)
    dispatch(setGroups(newGroups));
    localStorage.setItem("groupData",JSON.stringify(newGroups));
  }
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
          onChange={handleChange}
          value={groupData.groupName}
          name='groupName'
         />
         </div>
         <div className='groupColor-container'>
            <p>Choose colour</p>
            <div className='groupColor'>
             {colors.map((color, index) => (
              <div
                key={index}
                className='selectColor'
                style={{ background: color, border: groupData.groupColor === color ? "2px solid black" : "none" }}
                onClick={handleChange}
                color={color}
                name="groupColor"
              ></div>
             ))}
            </div>
         </div>
         <button onClick={createGroup}>Create</button>
        </form>
    </div>
  )
}
