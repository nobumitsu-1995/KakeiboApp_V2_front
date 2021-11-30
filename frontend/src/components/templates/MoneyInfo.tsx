import { AccountBalanceWallet } from "@mui/icons-material";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getDeadline, getTargetAmount, getTotalAssets } from "../../reducks/moneyInfos/selectors";
import {Card, ItemMenu} from "../molecules";
import EditMoneyInfo from "../organisms/EditMoneyInfo";
import ShowMoneyInfo from "../organisms/ShowMoneyInfo";

const MoneyInfo =  () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const total_assets = getTotalAssets(selector);
    const target_amount = getTargetAmount(selector);
    const deadline = getDeadline(selector);

    return (
        <Card
            color={"green"}
            title={"貯金目標"}
            action={<ItemMenu edit={() => dispatch(push('/user/edit'))} />}
        >
            <AccountBalanceWallet/>
            <Switch>
                <Route path="*/edit">
                    <EditMoneyInfo
                        total_assets={total_assets}
                        target_amount={target_amount}
                        deadline={deadline}
                    />
                </Route>
                <Route path="*/">
                    <ShowMoneyInfo
                        total_assets={total_assets}
                        target_amount={target_amount}
                        deadline={deadline}
                    />
                </Route>
            </Switch>
        </Card>
    );
}

export default MoneyInfo;