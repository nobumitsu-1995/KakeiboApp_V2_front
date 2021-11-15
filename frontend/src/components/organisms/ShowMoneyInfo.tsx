import { Grid, Typography, Card as MUICard } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    important: {
        backgroundColor: "#81C784",
        margin: "25px 10px 0 10px",
        padding: 10,
        border: "2px solid #388e3c",
        fontWeight: "bold"
    }
})

const ShowMoneyInfo = () => {
    const classes = useStyles();
    return (
        <Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Target Savings Amount：</Grid>
                <Grid item xs={7}>¥1234</Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Total Assets：</Grid>
                <Grid item xs={7}>¥1234</Grid>
            </Grid>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={5}>Target Achievement Date：</Grid>
                <Grid item xs={7}>2021/2/2</Grid>
            </Grid>
            <MUICard className={classes.important} elevation={3}>
                <p>Time Remaining：1234</p>
                <p>Monthly Savings：¥1234</p>
            </MUICard>
        </Typography>
    );
}

export default ShowMoneyInfo;