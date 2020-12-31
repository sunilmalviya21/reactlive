import React from 'react';

const fname = "Sunil Malviya";

const cdate = new Date().toLocaleDateString();

function Aboutus() {
    return(
        <div>
        <h1>About Component {fname}</h1>
        <p>Current Date = {cdate}</p>
        </div>
    );
}
export default Aboutus;