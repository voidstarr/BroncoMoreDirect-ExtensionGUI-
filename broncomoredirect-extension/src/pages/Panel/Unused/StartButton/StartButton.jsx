import React, { useState } from "react";
import { Button } from '@material-ui/core';

const StartButton = () => {
    const [clickText, setClickText] = useState('Show');
    
    return (
        <Button
            style={{
                maxWidth: '400px',
                maxHeight: '200px',
                minWidth: '200px',
                minHeight: '100px'
            }}
            variant="contained"
            color="primary"
            size="small"
            onClick={() => {
                if (clickText == 'Show') { setClickText('Hide'); }
                else { setClickText('Show'); }
            }}>
            {clickText} unmet sections
        </Button>
    );
}

export default StartButton;