import {Divider, List as MUIList, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from '@material-ui/core';
import ListIcon from '@mui/icons-material/List';
import { categoryState } from '../../reducks/categories/type';
import { translateBigCategory } from '../../reducks/items/operations';
import { translateIncome } from '../../reducks/paymentMethods/operations';
import { PaymentMethodState } from '../../reducks/paymentMethods/type';
import ItemMenu from './ItemMenu';

type Props = {
    title: string;
    contents: categoryState[] | PaymentMethodState[];
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
    const defineSecondary = (props: any) => {
        return props.big_category ? translateBigCategory(props.big_category) : translateIncome(props.income)
    }

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
                {props.contents.map((content: categoryState | PaymentMethodState) => {
                    return (
                        <ListItem button className={classes.listItem}>
                            ・<ListItemText
                                classes={{secondary: classes.secondary}}
                                primary={content.name}
                                secondary={`カテゴリ：${defineSecondary(content)}`}
                            />
                            {content.user_id && <ItemMenu edit={() => {console.log("edit")}} delete={() => {console.log("delete")}}/>}
                        </ListItem>
                    )
                })}
            </MUIList>
        </Paper>
    );
}

export default List;