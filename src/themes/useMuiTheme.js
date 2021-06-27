import {useMemo} from "react";
import {createMuiTheme} from '@material-ui/core/styles';

const useMuiTheme = () => {

    return useMemo(
        () => {
            createMuiTheme({
                    palette: {
                        primary: '#0F4780',
                        secondary: '#6B64FF',
                    },
                    overrides: {
                        MuiButton: {
                            padding: '10px 16px',
                            contained: {
                                color: 'secondary',
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                }
                            },
                            root: {
                                width: '100%',
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }
                        },
                        MuiPaper: {
                            root: {
                                boardingRadius: '8px',
                            }
                        }
                    }
                }
            )
        }
    )
}