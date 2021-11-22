import { MonetizationOn } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/paymentMethods/selectors";
import { List } from "../molecules";
import Card from "../molecules/Card";
import EditPaymentMethods from "../organisms/EditPaymentMethods";

const PaymentMEthodsInfo = () => {
    const selector = useSelector(state => state);
    const defaultList = getDefaultList(selector);
    const custumList = getCustumList(selector);

    return (
        <Card
            color="gold"
            title={"Payment Methods"}
        >
            <MonetizationOn/>
            <Switch>
                <Route path="*/edit">
                    <EditPaymentMethods custumList={custumList}/>
                </Route>
                <Route path="*/">
                    <List title="Default Payment Methods" contents={defaultList}/>
                    <List title="Custum Payment Methods" contents={custumList}/>
                </Route>
            </Switch>
        </Card>
    );
}

export default PaymentMEthodsInfo;