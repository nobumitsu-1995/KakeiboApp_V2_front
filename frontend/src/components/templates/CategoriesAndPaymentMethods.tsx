import { InboxOutlined } from "@mui/icons-material";
import { Route, Switch } from "react-router";
import Card from "../molecules/Card";
import EditCategoryAndPaymentMethod from "../organisms/EditCategoryAndPaymentMethod";
import ShowCategoryAndPaymentMethod from "../organisms/ShowCategoryAndPaymentMethod";

const CategoriesAndPaymentMethods = () => {

    return (
        <Card
            color="red"
            title={"Categories And Payment Methods"}
        >
            <InboxOutlined/>
            <Switch>
                <Route path="*/edit">
                    <EditCategoryAndPaymentMethod/>
                </Route>
                <Route path="*/">
                    <ShowCategoryAndPaymentMethod/>
                </Route>
            </Switch>
        </Card>
    );
}

export default CategoriesAndPaymentMethods;