import React from 'react';
import './App.css';
import useMuiTheme from './themes/useMuiTheme';
import {ThemeProvider} from "@material-ui/core/styles";
import {Button, Paper} from "@material-ui/core";

function App() {
    const theme = useMuiTheme();
    return (
        <ThemeProvider theme={theme}>
            <Button variant='contained' color='secondary'>Test</Button>
            <Paper>Test</Paper>
        </ThemeProvider>
    );
}

export default App;
