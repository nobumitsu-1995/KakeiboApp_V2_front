import { makeStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import { itemState } from "../../reducks/items/type";
import { Card } from "../molecules";
import { DateRange, MonetizationOn, Receipt } from "@mui/icons-material";
import BarChart from "../organisms/BarChart";
import PieChart from "../organisms/PieChart";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    paper: {
        padding: 10,
        margin: 10,
    }
});

type Props = {
    items: itemState[];
    currentMonth: string;
}

const Dashboard: React.FC<Props> = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Card title={"日別収支金額"} color={"purple"}>
                    <DateRange/>
                    <BarChart items={props.items} currentMonth={props.currentMonth}></BarChart>
                </Card>
            </Paper>
            <Paper className={classes.paper}>
                <Card title={"収入カテゴリ内訳"} color={"red"}>
                    <MonetizationOn/>
                    <PieChart chartType={"income"} items={props.items} currentMonth={props.currentMonth}></PieChart>
                </Card>
            </Paper>
            <Paper className={classes.paper}>
                <Card title={"消費カテゴリ内訳"} color={"#1877D2"}>
                    <Receipt/>
                    <PieChart chartType={"consumption"} items={props.items} currentMonth={props.currentMonth}></PieChart>
                </Card>
            </Paper>
        </div>
    );
}

export default Dashboard;