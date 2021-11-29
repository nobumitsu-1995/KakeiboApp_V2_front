import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMoneyInfo } from "../../reducks/moneyInfos/operations";
import { initialState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import {Button, Input} from "../atoms";

type Props = {
    total_assets: number;
    target_amount: number;
    deadline: string;
}

const EditMoneyInfo: React.FC<Props> = (props) => {
    const [currentMoneyInfo, setCurrentMoneyInfo] = useState(initialState.money_infos);
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentMoneyInfo({...currentMoneyInfo, [name]: value});
    }

    useEffect(() => {
        const prevMoneyInfo = {
            total_assets: props.total_assets,
            target_amount: props.target_amount,
            deadline: props.deadline,
            user_id: uid
        }
        setCurrentMoneyInfo(prevMoneyInfo);
    }, [])
    
    return (
        <form>
            <Input
                name="target_amount"
                label="Target Savings Amount"
                placeholder="¥"
                type="number"
                value={currentMoneyInfo.target_amount}
                onChange={handleInputChange}
            />
            <Input
                name="total_assets"
                label="Total Assets"
                placeholder="¥"
                type="number"
                value={currentMoneyInfo.total_assets}
                onChange={handleInputChange}
            />
            <Input
                name="deadline"
                label="Target Achievement Date"
                type="date"
                value={currentMoneyInfo.deadline}
                onChange={handleInputChange}
            />
            <Button
                color="primary"
                variant="contained"
                size="medium"
                fullWidth={true}
                onClick={() => {
                    dispatch(updateMoneyInfo(uid, currentMoneyInfo))
                }}
            >
                Update
            </Button>
        </form>
    );
}

export default EditMoneyInfo;