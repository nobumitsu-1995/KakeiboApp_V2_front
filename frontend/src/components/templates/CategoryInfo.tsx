import { Dns } from "@mui/icons-material";
import { Route, Switch } from "react-router";
import { List } from "../molecules";
import Card from "../molecules/Card";
import EditCategories from "../organisms/EditCategories";

const CategoriesInfo = () => {

    return (
        <Card
            color="red"
            title={"Categories"}
        >
            <Dns/>
            <Switch>
                <Route path="*/edit">
                    <EditCategories/>
                </Route>
                <Route path="*/">
                    <List title="Default Categories"/>
                    <List title="Custum Categories"/>
                </Route>
            </Switch>
        </Card>
    );
}

export default CategoriesInfo;