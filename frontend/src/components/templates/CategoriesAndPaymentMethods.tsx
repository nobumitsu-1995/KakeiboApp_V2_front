import { Grid } from "@material-ui/core";
import { InboxOutlined } from "@mui/icons-material";
import Card from "../molecules/Card";
import List from "../molecules/List";

const CategoriesAndPaymentMethods = () => {

    return (
        <Card
            color="red"
            title={"Categories And Payment Methods"}
        >
            <InboxOutlined/>
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
        </Card>
    );
}

export default CategoriesAndPaymentMethods;