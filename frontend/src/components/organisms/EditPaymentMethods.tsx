import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPaymentMethod } from "../../reducks/paymentMethods/operations";
import { initialPaymentMethodState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { SelectForm } from "../molecules";

type Props = {
    
}

const EditPaymentMethods: React.FC<Props> = props => {
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState(initialPaymentMethodState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentPaymentMethod({...currentPaymentMethod, [name]: value});
    }
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    return (
            <>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <SelectForm
                                value={currentPaymentMethod.income}
                                name="income"
                                datas={[{value: true, name: "収入"}, {value: false, name: "支出"}]}
                                label="Income or Expense"
                                onChange={handleInputChange}
                                disabled={null}
                            />
                        </Grid>
                        <Grid item xs={9}>
                            <Input
                                name="name"
                                label="Custum Payment Method"
                                placeholder="Name"
                                type="string"
                                value={currentPaymentMethod.name}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                color="primary"
                                variant="contained"
                                size="medium"
                                fullWidth={true}
                                onClick={() => {
                                    dispatch(createPaymentMethod(uid, currentPaymentMethod))
                                }}
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </>
    );
}

export default EditPaymentMethods;