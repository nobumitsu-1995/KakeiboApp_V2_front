import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { AppBar, Typography } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../../reducks/users/operations";
import HeaderUserMenu from "./HeaderUserMenu";
import { push } from "connected-react-router";

const Header: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(signIn(user))
        } 
    }, [isAuthenticated, user, dispatch])

    return (
        <AppBar position="fixed">
            <Toolbar className="header">
                <Typography variant="h6" component="div">
                    <Button
                        children="KakeiboApp"
                        color="inherit"
                        size="large"
                        variant="text"
                        onClick={() => dispatch(push('/'))}
                    />
                </Typography>
                {!isAuthenticated ?
                    <Button
                        children="ログイン"
                        color="primary"
                        size="medium"
                        variant="contained"
                        onClick={loginWithRedirect}
                    />
                :
                    <div className="flex">
                        <Button
                            children="月別収支情報"
                            color="inherit"
                            size="large"
                            variant="text"
                            onClick={() => dispatch(push('/items'))}
                        />
                        <HeaderUserMenu/>
                    </div>
                    
                }
            </Toolbar>
        </AppBar>
    );
}

export default Header;