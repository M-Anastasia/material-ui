import {createMuiTheme} from '@material-ui/core/styles';

const useMuiTheme = () => {

    return (
        createMuiTheme({
                palette: {
                    primary: {
                        main: '#0F4780'
                    },
                    secondary: {
                        main: '#6B64FF'
                    },
                },
                overrides: {
                    MuiButton: {
                        containedSecondary: {
                            "&:hover": {
                                backgroundColor: 'transparent',
                                color: '#6B64FF',
                            }
                        },
                        root: {
                            width: '100%',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            padding: '10px 16px'
                        }
                    },
                    MuiPaper: {
                        root: {
                            boardingRadius: '8px',
                        }
                    }
                }
            }
        ))
}

export default useMuiTheme;