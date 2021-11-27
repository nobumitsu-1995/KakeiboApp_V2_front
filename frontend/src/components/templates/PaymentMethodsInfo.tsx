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
                    <EditPaymentMethods />
                    <List 
                        title="Custum Payment Methods"
                        contents={custumList}
                        listType="payment_method"
                    />
                </Route>
                <Route path="*/payment_method/:id">
                    ;lksndfg
                    <List 
                        title="Custum Payment Methods"
                        contents={custumList}
                        listType="payment_method"
                    />
                </Route>
                <Route path="*">
                    <List 
                        title="Default Payment Methods"
                        contents={defaultList}
                        listType="payment_method"
                    />
                    <List 
                        title="Custum Payment Methods"
                        contents={custumList}
                        listType="payment_method"
                    />
                </Route>
            </Switch>
        </Card>
    );
}

export default PaymentMEthodsInfo;