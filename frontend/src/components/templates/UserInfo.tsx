import { Avatar } from "@material-ui/core";
import { AccountBoxOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getUserIcon, getUserId, getUserName } from "../../reducks/users/selectors";
import Card from "../molecules/Card";

const UserInfo = () => {
    const selector = useSelector(state => state);
    const username = getUserName(selector);
    const icon = getUserIcon(selector);
    const id = getUserId(selector);

    return (
        <Card
            color="#1877D2"
            title={"User Infomation"}
        >
            <AccountBoxOutlined/>
            <>
                <Avatar
                    alt={username}
                    src={icon}
                    style={{ margin: "10px auto", width: 75, height: 75}}
                />
                <Typography variant="h5" component="h2">
                    {username}
                </Typography>
                <Typography color="textSecondary">
                    ID：{id}
                </Typography>
            </>
        </Card>
    );
}

export default UserInfo;