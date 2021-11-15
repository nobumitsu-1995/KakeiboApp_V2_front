import { Grid, Paper } from "@material-ui/core";
import { useState } from "react";
import { initialCategoryState } from "../../reducks/store/initialState";
import { Input } from "../atoms";
import { List, SelectForm } from "../molecules";

const EditCategoryAndPaymentMethod = () => {
    const [currentCategory, setCurrentCategory] = useState(initialCategoryState);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentCategory({...currentCategory, [name]: value});
    }

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6}>
                <Paper>
                    <SelectForm
                        value={currentCategory.big_category}
                        name="big_category"
                        datas={[{value: "fixed_cost", name: "固定費"}, {value: "variable_cost", name: "変動費"}, {value: "income", name: "収入"}]}
                        label="Major Category"
                        onChange={handleInputChange}
                        disabled={null}
                    />
                    <Input
                        name="name"
                        label="Custum Category"
                        placeholder="Name"
                        type="string"
                        value={currentCategory.name}
                        onChange={handleInputChange}
                    />
                </Paper>

                <List title="Custum Categories"/>
            </Grid>
            <Grid item xs={6}>
                
                <List title="Custum Payment Methods"/>
            </Grid>
        </Grid>
    );
}

export default EditCategoryAndPaymentMethod;