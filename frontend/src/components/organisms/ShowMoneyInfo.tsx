import { Grid, Typography, Card as MUICard } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

type Props = {
    total_assets: number;
    target_amount: number;
    deadline: string;
}

const useStyles = makeStyles({
    important: {
        backgroundColor: "#81C784",
        margin: "25px 10px 0 10px",
        padding: 10,
        border: "2px solid #388e3c",
        fontWeight: "bold"
    }
})

const ShowMoneyInfo: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [monthlySavingsAmount, setMonthlySavingAmount] = useState<number>(0);

    useEffect(() => {
        const today = new Date();
        const deadlineDate = new Date(props.deadline);
        setTimeLeft(Math.floor((deadlineDate.getTime() - today.getTime())/(24 * 60 * 60 * 1000)));
    }, [])

    useEffect(() => {
        const difference = props.target_amount - props.total_assets
        setMonthlySavingAmount(difference/Math.round(timeLeft/30))
    }, [timeLeft])

    return (
        <Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Target Savings Amount：</Grid>
                <Grid item xs={7}>¥{props.target_amount}</Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Total Assets：</Grid>
                <Grid item xs={7}>¥{props.total_assets}</Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Target Achievement Date：</Grid>
                <Grid item xs={7}>{props.deadline}</Grid>
            </Grid>
            <MUICard className={classes.important} elevation={3}>
                <p>Time Remaining：{Math.floor(timeLeft/365)}年{Math.round((timeLeft%365)/30)}ヶ月</p>
                <p>Monthly Savings：¥{Math.round(monthlySavingsAmount)}</p>
            </MUICard>
        </Typography>
    );
}

export default ShowMoneyInfo;