import React from 'react';
import { render } from 'react-dom';

import Panel from './Panel';
import './index.css';

import MissingClassList from './MissingClassList/MissingClassList';

/*const sections = [
    { id: "1", title: "Class title here", info: "Detailed info and list of sections" },
    { id: "2", title: "Class title here", info: "Detailed info and list of sections" },
    { id: "3", title: "Class title here", info: "Detailed info and list of sections" },
    { id: "4", title: "Class title here", info: "Detailed info and list of sections" }
];*/

const pageElements = [
    <MissingClassList />
];

render(<Panel children={pageElements}/>, window.document.querySelector('#bmd-container'));
