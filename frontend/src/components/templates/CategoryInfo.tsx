import { Dns } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { getCustumList, getDefaultList } from "../../reducks/categories/selectors";
import { List } from "../molecules";
import Card from "../molecules/Card";
import CategoriesForm from "../organisms/CategoriesForm";

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
                    <CategoriesForm formType='create'/>
                    <List
                        title="Custum Categories"
                        contents={custumList}
                        listType="category"

                    />
                </Route>
                <Route path="*/category/:categoryId">
                    <CategoriesForm formType='edit'/>
                    <List
                        title="Custum Categories"
                        contents={custumList}
                        listType="category"
                    />
                </Route>
                <Route path="*/">
                    <List
                        title="Default Categories"
                        contents={defaultList}
                    />
                    <List
                        title="Custum Categories"
                        contents={custumList}
                        listType="category"
                    />
                </Route>
            </Switch>
        </Card>
    );
}

export default CategoriesInfo;