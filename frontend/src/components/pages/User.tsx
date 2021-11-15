import CategoriesAndPaymentMethods from "../templates/CategoriesAndPaymentMethods"
import MoneyInfo from "../templates/MoneyInfo"
import UserInfo from "../templates/UserInfo"


const User = () => {
    return (
        <>
            <br/><br/><br/><br/><br/><br/>
            <UserInfo/>
            <MoneyInfo/>
            <CategoriesAndPaymentMethods/>
        </>
    )
}

export default User;