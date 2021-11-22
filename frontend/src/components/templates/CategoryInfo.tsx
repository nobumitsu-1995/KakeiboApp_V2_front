import { Dns } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/categories/selectors";
import { List } from "../molecules";
import Card from "../molecules/Card";
import EditCategories from "../organisms/EditCategories";

const CategoriesInfo = () => {
    const selector = useSelector(state => state);
    const defaultList = getDefaultList(selector);
    const custumList = getCustumList(selector);

    return (
        <Card
            color="red"
            title={"Categories"}
        >
            <Dns/>
            <Switch>
                <Route path="*/edit">
                    <EditCategories custumList={custumList}/>
                </Route>
                <Route path="*/">
                    <List title="Default Categories" contents={defaultList}/>
                    <List title="Custum Categories" contents={custumList}/>
                </Route>
            </Switch>
        </Card>
    );
}

export default CategoriesInfo;