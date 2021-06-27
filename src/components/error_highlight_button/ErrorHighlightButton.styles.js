import {makeStyles} from "@material-ui/core";
import useMuiTheme from "../../themes/useMuiTheme";

const useStyles = makeStyles((theme= useMuiTheme()) => ({
    error: {
        backgroundColor: theme.palette.error.main
    }
}));

export default useStyles;