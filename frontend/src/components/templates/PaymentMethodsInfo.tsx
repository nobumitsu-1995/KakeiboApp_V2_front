import { MonetizationOn } from "@mui/icons-material";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/paymentMethods/selectors";
import { ItemMenu, List } from "../molecules";
import Card from "../molecules/Card";
import PaymentMethodsForm from "../organisms/PaymentMethodsForm";

const PaymentMEthodsInfo = () => {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const defaultList = getDefaultList(selector);
    const custumList = getCustumList(selector);

    return (
        <Card
            color="gold"
            title={"Payment Methods"}
            action={<ItemMenu edit={() => dispatch(push('/user/edit'))} />}
        >
            <MonetizationOn/>
            <Switch>
                <Route path="*/edit">
                    <PaymentMethodsForm 
                        formType="create"
                    />
                    <List 
                        title="Custum Payment Methods"
                        contents={custumList}
                        listType="payment_method"
                    />
                </Route>
                <Route path="*/payment_method/:paymentMethodId">
                    <PaymentMethodsForm 
                        formType="edit"
                    />
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