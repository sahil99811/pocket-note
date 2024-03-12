import React, { useEffect, useState } from 'react';
import '../../styles/GroupNote.css';
import disabledSend from '../../assets/disabledSend.png';
import enabledSend from '../../assets/enabledSend.png';
import { useSelector, useDispatch } from 'react-redux';
import { setNotesData } from '../../slices/noteSlice';
import { setSelectedGroup } from '../../slices/groupSlice';
import GroupNoteCard from './NotesCard/GroupNoteCard';
import { formattedDate } from '../../utility/dateFormatter';
import arrow from '../../assets/arrow.png';

// GroupNote component displays notes for a selected group and allows adding new notes
export default function GroupNote() {
   // Redux hooks
   const dispatch = useDispatch();
   // Get selectedgroup from Redux store
   const { selectedGroup } = useSelector((state) => state.group);
   // Get notes from Redux store
   const { notesData } = useSelector((state) => state.note);

  // Local state
  const [textAreaData, setTextAreaData] = useState("");

  // Function to handle change in textarea input
  const handleChange = (event) => {
    setTextAreaData(event.target.value);
  };

  // Function to handle click event on the send button
  const onClickHandler = () => {
    // If textarea is empty, do nothing
    if (textAreaData === "") {
      return;
    }

    // Get current date and time
    const { date, time } = formattedDate(new Date());

    // Create a new note object
    const newNote = {
      note: textAreaData,
      date,
      time
    };

    // Update notesData in Redux store
    let newNoteData;
    if (!notesData || !notesData[selectedGroup.groupName]) {
      newNoteData = {
        ...notesData,
        [selectedGroup.groupName]: [newNote]
      };
    } else {
      newNoteData = {
        ...notesData,
        [selectedGroup.groupName]: [...notesData[selectedGroup.groupName], newNote]
      };
    }
    dispatch(setNotesData(newNoteData));

    // Save notesData to local storage
    localStorage.setItem("noteData", JSON.stringify(newNoteData));

    // Clear textarea
    setTextAreaData("");
  };

  // Effect to clear textarea when selectedGroup changes
  useEffect(() => {
    setTextAreaData("");
  }, [selectedGroup.groupName]);

  // Function to handle click event on the back button
  const handleBack = () => {
    dispatch(setSelectedGroup(null));
  };

  return (
    <div className='groupName-container'>
      {/* Header section */}
      <header className='header'>
        {selectedGroup && (
          <button className='arrow-button' onClick={handleBack}>
            <img src={arrow} className='arrow' alt='Back' />
          </button>
        )}
        <div className='groupLogo' style={{ background: selectedGroup.groupColor, cursor: "pointer" }}>{selectedGroup.groupLogo}</div>
        <p>{selectedGroup.groupName}</p>
      </header>

      {/* Notes section */}
      <section className='groupNotes'>
        {/* Render GroupNoteCard for each note */}
        {notesData && notesData[selectedGroup.groupName]?.map((note, index) => (
          <GroupNoteCard key={index} data={note} />
        ))}
      </section>

      {/* Input Note section */}
      <div className='inputNote-container'>
        <div className='inputNote'>
          <textarea
            placeholder='Enter your text here.........'
            value={textAreaData}
            onChange={handleChange}
          ></textarea>
          <img
            src={textAreaData.length > 0 ? enabledSend : disabledSend}
            alt='sendnote'
            className='sendNote'
            onClick={onClickHandler}
          />
        </div>
      </div>
    </div>
  );
}
