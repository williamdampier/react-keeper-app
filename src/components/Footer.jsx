import React from 'react';


function Footer() {
    return (
        <footer>
        <p>Copryight {new Date().getFullYear()}</p></footer>
    );
}

export default Footer;

//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.