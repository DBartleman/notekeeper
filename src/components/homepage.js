import React from 'react';
import '../stylesheets/homepage.css';

export default function Homepage() {
    return(
        <div className={"homepageContainer"}>
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
          <input type={"text"} id={"noteTitle"} value={"Title"}/>
          <input type={"text"} id={"noteText"} value={"Enter note text here..."}/>
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

