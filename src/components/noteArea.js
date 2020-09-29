import React from 'react';
import '../stylesheets/noteArea.css';

export default function NoteArea() {
    return(
      <div className={"sidebarAndNotesContainer"}>
        <div class={"sidebarLeft"}>
          <button id={"tab1"}
            type="button">
            Notes
          </button>
          <button id={"tab2"}
            type="button">
            Reminders
          </button>
        </div>
        <div class={"noteArea"}>
          <input type={"text"} id={"noteTitle"} placeholder={"Title"}/>
          <input type={"text"} id={"noteText"} placeholder={"Enter note text here..."}/>
          <div className={"buttons"}>
            <button id={"postNote"}
              type="button">
              Post Note
            </button>
            <button id={"deleteNote"}
              type="button">
              Delete Note
            </button>
          </div>
        </div>
      </div>
    );
}

