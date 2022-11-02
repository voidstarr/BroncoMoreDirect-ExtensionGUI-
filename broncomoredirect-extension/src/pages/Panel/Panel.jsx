import React from 'react';
import { Rnd } from 'react-rnd';
import Header from './Header';
import icon128 from './../../assets/img/icon-128.png'
import { Grid, Button } from '@material-ui/core'

const Panel = ({ children }) => {

    return (
        <Rnd
            style={{
                background: "white",
                border: "3px solid #4286f4",
                zIndex: 2,
                overflowY: 'auto',
                overflowX: 'hidden'
            }}
            default={{
                x: 200,
                y: 300,
                width: 320,
                height: 200
            }}
            minHeight={200}
            minWidth={200}
            bounds=".ui-content" dragHandleClassName="bmd-drag-handle">
      <Header>
        <span>
          BroncoMoreDirect
        </span>
      </Header>
      <div id="bmd-content">
        <Grid container alignContent='center' alignItems='center' direction='column'>
            {children}
        </Grid>
      </div>
    </Rnd >
  );
};

export default Panel;