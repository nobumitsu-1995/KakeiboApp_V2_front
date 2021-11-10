import {Divider, List as MUIList, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from '@material-ui/core';
import ListIcon from '@mui/icons-material/List';
import ItemMenu from './ItemMenu';

type Props = {
    title: string;
    contents?: string[];
}

const useStyles = makeStyles({
    fixedList: {
        position: 'relative',
        overflow: 'auto',
        maxHeight: 240,
    },
    listItem: {
        height: 45,
        padding: 0,
        paddingLeft: 10 
    },
    secondary: {
        fontSize: 4
    }
})

const List: React.FC<Props> = (props) => {
    const classes = useStyles();

    return (
        <Paper>
            <MUIList>
                <ListItem>
                    <ListItemIcon>
                        <ListIcon/>
                    </ListItemIcon>
                    <ListItemText primary={props.title}/>
                </ListItem>
            </MUIList>
            <Divider/>
            <MUIList
                className={classes.fixedList}
                disablePadding={true}
            >
                <ListItem button className={classes.listItem}>
                    ・<ListItemText
                        classes={{secondary: classes.secondary}}
                        primary="qwerty"
                        secondary="qwerty"
                    />
                    <ItemMenu edit={() => {console.log("edit")}} delete={() => {console.log("delete")}}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    ・<ListItemText
                        classes={{secondary: classes.secondary}}
                        primary="qwerty"
                        secondary="qwerty"
                    />
                    <ItemMenu edit={() => {console.log("edit")}} delete={() => {console.log("delete")}}/>
                </ListItem>
                <ListItem button className={classes.listItem}>
                    ・<ListItemText
                        classes={{secondary: classes.secondary}}
                        primary="qwerty"
                        secondary="qwerty"
                    />
                    <ItemMenu edit={() => {console.log("edit")}} delete={() => {console.log("delete")}}/>
                </ListItem>
            </MUIList>
        </Paper>
    );
}

export default List;