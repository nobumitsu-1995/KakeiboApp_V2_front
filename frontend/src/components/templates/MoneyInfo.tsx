import { AccountBalanceWallet } from "@mui/icons-material";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import {Card, ItemMenu} from "../molecules";
import EditMoneyInfo from "../organisms/EditMoneyInfo";
import ShowMoneyInfo from "../organisms/ShowMoneyInfo";

const MoneyInfo =  () => {
    const dispatch = useDispatch();
    return (
        <Card
            color={"green"}
            title={"Saving Target"}
            action={<ItemMenu edit={() => dispatch(push('/user/edit'))} />}
        >
            <AccountBalanceWallet/>
            <Switch>
                <Route path="*/edit">
                    <EditMoneyInfo/>
                </Route>
                <Route path="*/">
                    <ShowMoneyInfo/>
                </Route>
            </Switch>
        </Card>
    );
}

export default MoneyInfo;