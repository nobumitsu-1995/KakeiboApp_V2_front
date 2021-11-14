import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {Modal as MUIModal, Backdrop, Fade} from "@material-ui/core";

type Props = {
    children: React.ReactNode[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: "1px solid #000",
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            display: "flex",
            flexDirection: "column"
        },
        button: {
            display: "inline"
        },
    })
    );

const Modal: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={classes.button} onClick={handleOpen} >
                {props.children[0]}
            </div>
            <MUIModal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {props.children[1]}
                    </div>
                </Fade>
            </MUIModal>
        </>
    );
};

export default Modal;