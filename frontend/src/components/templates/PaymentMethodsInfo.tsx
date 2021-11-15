import { MonetizationOn } from "@mui/icons-material";
import { Route, Switch } from "react-router";
import { List } from "../molecules";
import Card from "../molecules/Card";
import EditPaymentMethods from "../organisms/EditPaymentMethods";

const PaymentMEthodsInfo = () => {

    return (
        <Card
            color="gold"
            title={"Payment Methods"}
        >
            <MonetizationOn/>
            <Switch>
                <Route path="*/edit">
                    <EditPaymentMethods/>
                </Route>
                <Route path="*/">
                    <List title="Default Payment Methods"/>
                    <List title="Custum Payment Methods"/>
                </Route>
            </Switch>
        </Card>
    );
}

export default PaymentMEthodsInfo;