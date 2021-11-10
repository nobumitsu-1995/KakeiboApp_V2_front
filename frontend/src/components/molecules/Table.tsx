import { withStyles, Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {Table as MUITable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from "@material-ui/core";

type Props = {
    headerItems: string[];
    children: React.ReactNode;
}

export const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
        }
    })
)(TableRow);

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
        },
        body: {
        fontSize: 14
        }
    })
)(TableCell);

const useStyles = makeStyles({
    table: {
        minWidth: 1000
    },
    container: {
        maxHeight: 580,
        width: '100%'
    },
});

const Table: React.FC<Props> = (props) => {
    const classes = useStyles();

    return(
        <TableContainer className={classes.container} component={Paper}>
            <MUITable className={classes.table} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {props.headerItems.map((headerItem) => (
                            <StyledTableCell align="center" key={headerItem}>
                                {headerItem}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.children}
                </TableBody>
            </MUITable>
        </TableContainer>
    );
}

export default Table;