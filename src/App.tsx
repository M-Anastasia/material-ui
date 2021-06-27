import React from 'react';
import './App.css';
import useMuiTheme from './themes/useMuiTheme';
import {ThemeProvider} from "@material-ui/core/styles";
import {Box, Button, Grid, Paper} from "@material-ui/core";
import ErrorHighlightButton from "./components/error_highlight_button/ErrorHighlightButton";

function App() {
    const theme = useMuiTheme();
    return (
        <ThemeProvider theme={theme}>
            <Grid item container
                  justify="center"
                  alignItems="center"
                  style={{height: '100vh'}}
            >
                <Box
                    width='400px'
                >
                    <Paper
                        style={{
                            backgroundColor: '#e8eaf6'
                        }}>
                        <Box padding={5}>
                            <Grid container
                                  direction="column"
                                  spacing={4}
                            >
                                <Grid item container
                                      spacing={4}
                                >
                                    <Grid item
                                          xs={6}
                                          sm={12}
                                    >
                                        <Button variant='text' color='primary' children='Text button'/>
                                    </Grid>
                                    <Grid item
                                          xs={6}
                                          sm={12}
                                    >
                                        <Button variant='contained' color='secondary' children='Button with theme'/>
                                    </Grid>
                                </Grid>
                                <Grid item container
                                      spacing={4}
                                >
                                    <Grid item
                                          xs={6}
                                          sm={12}
                                    >
                                        <ErrorHighlightButton children='Button with error' error='error'/>
                                    </Grid>
                                    <Grid item
                                          xs={6}
                                          sm={12}
                                    >
                                        <ErrorHighlightButton children='Button without error'/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Box>
            </Grid>
        </ThemeProvider>
    );
}

export default App;
