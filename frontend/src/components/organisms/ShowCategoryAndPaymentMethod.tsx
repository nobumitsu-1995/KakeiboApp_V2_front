import { Grid } from "@material-ui/core";
import { List } from "../molecules";

const ShowCategoryAndPaymentMethod = () => {
    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6}>
                <List title="Default Categories"/>
                <List title="Custum Categories"/>
            </Grid>
            <Grid item xs={6}>
                <List title="Default Payment Methods"/>
                <List title="Custum Payment Methods"/>
            </Grid>
        </Grid>
    );
}

export default ShowCategoryAndPaymentMethod;