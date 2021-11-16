import { AppBar, makeStyles, Paper, Tab } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from "react";
import { Button } from "../atoms";
import ItemsCalendar from "../templates/Calendar";
import Dashboard from "../templates/Dashboard";
import IndexItems from "../templates/IndexItems";

const items = [
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
]

const useStyles = makeStyles({
    subject: {
        margin: 15,
        fontSize: 20,
        fontWeight: "bold"
    },
    select: {
        margin: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        backgroundColor: "#f3f3f3"
    }
});

const Items = () => {
    const classes = useStyles();
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(`${today.getFullYear()}-${today.getMonth() +1}-${today.getDate()}`)
    const [value, setValue] = useState("index");

    const prevMonth = () => {
        const date = new Date(currentMonth)
        date.setMonth(date.getMonth() - 1)
        setCurrentMonth(`${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`)
    }

    const nextMonth = () => {
        const date = new Date(currentMonth)
        date.setMonth(date.getMonth() + 1)
        setCurrentMonth(`${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`)
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <br/><br/><br/>
            <h1>Income and Expenditure Information</h1>
            <div>
                <Button variant="contained" size="small" color="primary" onClick={prevMonth} startIcon={<ArrowLeft/>} >前月</Button>
                <span className={classes.subject}>{new Date(currentMonth).getFullYear()}年{new Date(currentMonth).getMonth() + 1}月</span>
                <Button variant="contained" size="small" color="primary" onClick={nextMonth} endIcon={<ArrowRight/>}>次月</Button>
            </div>
            <TabContext value={value} >
                <AppBar position="static" color="inherit">
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="月別収支一覧" value="index"/>
                        <Tab label="カレンダー" value="calender" />
                        <Tab label="月別収支情報" value="dashboard" />
                    </TabList>
                </AppBar>
                <Paper square className={classes.paper}>
                    <TabPanel value="index">
                        <IndexItems items={items} />
                    </TabPanel>
                    <TabPanel value="calender">
                        <ItemsCalendar items={items} currentMonth={currentMonth}/>
                    </TabPanel>
                    <TabPanel value="dashboard">
                        <Dashboard items={items} currentMonth={currentMonth} />
                    </TabPanel>
                </Paper>
            </TabContext>
        </>
    );
}

export default Items;