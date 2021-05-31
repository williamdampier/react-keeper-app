import React from 'react';

function Note(props) {
    return (
        <div class="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

export default Note;



//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.