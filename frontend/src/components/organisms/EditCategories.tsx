import { Grid } from "@material-ui/core";
import { useState } from "react";
import { initialCategoryState } from "../../reducks/store/initialState";
import { Button, Input } from "../atoms";
import { List, SelectForm } from "../molecules";

const EditCategories = () => {
    const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentCategory({...currentCategory, [name]: value});
    }

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
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <List title="Custum Categories"/>
            </>
    );
}

export default EditCategories;