import {Switch, Route} from "react-router"
import { Home, Items, User } from "./components/pages";
import { useAuth0 } from "@auth0/auth0-react";

const Router = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <Switch>
            {!isAuthenticated ?
                <Route exact path="/" component={Home} />
            :
                <>
                    <Route path="/user" component={User} />
                    <Route exact path="/items" component={Items} />
                </>
            }
        </Switch>
    );
}

export default Router;