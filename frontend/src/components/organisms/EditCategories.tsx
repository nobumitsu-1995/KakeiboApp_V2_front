import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../reducks/categories/operations";
import { categoryState } from "../../reducks/categories/type";
import { initialCategoryState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { List, SelectForm } from "../molecules";

type Props = {
    custumList: categoryState[];
}

const EditCategories: React.FC<Props> = props => {
    const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentCategory({...currentCategory, [name]: value});
    }
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    return (
            <>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <SelectForm
                                value={currentCategory.big_category}
                                name="big_category"
                                datas={[{value: "fixed_cost", name: "固定費"}, {value: "variable_cost", name: "変動費"}, {value: "income", name: "収入"}]}
                                label="Major Category"
                                onChange={handleInputChange}
                                disabled={null}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Input
                                name="name"
                                label="Custum Category"
                                placeholder="Name"
                                type="string"
                                value={currentCategory.name}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                size="medium"
                                fullWidth={true}
                                onClick={() => {
                                    dispatch(createCategory(uid, currentCategory))
                                }}
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <List title="Custum Categories" contents={props.custumList}/>
            </>
    );
}

export default EditCategories;