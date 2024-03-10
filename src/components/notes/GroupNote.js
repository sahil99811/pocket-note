import React, { useState } from 'react';
import '../../styles/GroupNote.css';
import disabledSend from '../../assets/disabledSend.png';
import enabledSend from '../../assets/enabledSend.png';
import { useSelector, useDispatch } from 'react-redux';
import { setNotesData } from '../../slices/noteSlice';
import GroupNoteCard from './NotesCard/GroupNoteCard';
import { formattedDate } from '../../utility/dateFormatter';

export default function GroupNote() {
  const dispatch = useDispatch();
  const { selectedGroup } = useSelector((state) => state.group);
  const { notesData } = useSelector((state) => state.note);
  const [textAreaData, setTextAreaData] = useState("");

  const handleChange = (event) => {
    setTextAreaData(event.target.value);
  };

  const onClickHandler = () => {
    if (textAreaData === "") {
      return;
    }

    const { date, time } = formattedDate(new Date());
    const newNote = {
      note: textAreaData,
      date,
      time
    };

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
    localStorage.setItem("noteData", JSON.stringify(newNoteData));
    setTextAreaData("");
  };

  return (
    <div className='groupName-container'>
      <header className='header'>
        <div className='groupLogo' style={{ background: selectedGroup.groupColor }}>{selectedGroup.groupLogo}</div>
        <p>{selectedGroup.groupName}</p>
      </header>
      <section className='groupNotes'>
        {notesData && notesData[selectedGroup.groupName]?.map((note, index) => (
          <GroupNoteCard key={index} data={note} />
        ))}
      </section>
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
