import React, { useState, useEffect } from 'react';


const Header = ({ onDrag, children }) => {

    return (<div style={{
        background: "grey",
        border: "3px solid #4286f4",
        padding: "10px",
        cursor: "grab"
    }} className="bmd-drag-handle">
        {children}
    </div>)
};

export default Header;