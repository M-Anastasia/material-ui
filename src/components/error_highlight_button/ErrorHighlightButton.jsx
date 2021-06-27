import {Button} from "@material-ui/core";
import useStyle from './ErrorHighlightButton.styles';
import clsx from "clsx";

const ErrorHighlightButton = (props) => {
    const classes = useStyle();

    return (
        <Button
            variant='contained'
            className={clsx(props.error && classes.error, props.className)}
            children={props.children}
        />
    )
}

export default ErrorHighlightButton;