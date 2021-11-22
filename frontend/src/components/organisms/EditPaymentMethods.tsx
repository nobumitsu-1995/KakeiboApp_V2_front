import { Grid } from "@material-ui/core";
import { useState } from "react";
import { PaymentMethodState } from "../../reducks/paymentMethods/type";
import { initialPaymentMethodState } from "../../reducks/store/initialState";
import { Button, Input } from "../atoms";
import { List, SelectForm } from "../molecules";

type Props = {
    custumList: PaymentMethodState[];
}

const EditPaymentMethods: React.FC<Props> = props => {
    const [currentPaymentMethod, setCurrentPaymentMethod] = useState(initialPaymentMethodState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentPaymentMethod({...currentPaymentMethod, [name]: value});
    }

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
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <List title="Custum Payment Methods" contents={props.custumList}/>
            </>
    );
}

export default EditPaymentMethods;