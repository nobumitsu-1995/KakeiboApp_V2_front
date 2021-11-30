import { Grid } from "@material-ui/core"
import CategoriesInfo from "../templates/CategoryInfo"
import MoneyInfo from "../templates/MoneyInfo"
import PaymentMEthodsInfo from "../templates/PaymentMethodsInfo"
import UserInfo from "../templates/UserInfo"


const User = () => {
    return (
        <Grid
            container 
            spacing={2} 
            justifyContent="center"
            alignItems="flex-start"
        >
            <Grid item>
                <UserInfo/>
            </Grid>
            <Grid item>
                <MoneyInfo/>
            </Grid>
            <Grid item>
                <CategoriesInfo/>
            </Grid>
            <Grid item>
                <PaymentMEthodsInfo/>
            </Grid>
        </Grid>
    )
}

export default User;