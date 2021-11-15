import { Grid } from "@material-ui/core"
import CategoriesInfo from "../templates/CategoryInfo"
import MoneyInfo from "../templates/MoneyInfo"
import PaymentMEthodsInfo from "../templates/PaymentMethodsInfo"
import UserInfo from "../templates/UserInfo"


const User = () => {
    return (
        <>
            <br/><br/><br/><br/><br/><br/>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <UserInfo/>
                </Grid>
                <Grid item xs={8}>
                    <MoneyInfo/>
                </Grid>
                <Grid item xs={6}>
                    <CategoriesInfo/>
                </Grid>
                <Grid item xs={6}>
                    <PaymentMEthodsInfo/>
                </Grid>
            </Grid>
            
            
            
            
        </>
    )
}

export default User;