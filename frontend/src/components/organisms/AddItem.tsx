import { IconButton, TextField, Typography } from "@material-ui/core";
import { AddCircle, AttachFile, Comment, MonetizationOn } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../../reducks/items/operations";
import { initialState } from "../../reducks/store/initialState";
import { getUserId } from "../../reducks/users/selectors";
import { Button, Input } from "../atoms";
import { Card, Modal, SelectForm } from "../molecules";


const AddItem: React.FC = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);
    const [currentItem, setCurrentItem] = useState(initialState.items);
    const big_categories = [
        { value: "fixed_cost", name: "固定費" },
        { value: "variable_cost", name: "変動費" },
        { value: "income", name: "収入" }
    ];
    const categories = [
        { value: 1, name: "住居費" },
        { value: 2, name: "保険料" },
        { value: 3, name: "通信費" },
        { value: 4, name: "自動車費" },
    ];
    const payment_methods = [
        { value: 1, name: "現金" },
        { value: 2, name: "カード" },
        { value: 3, name: "引き落とし" },
    ]

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setCurrentItem({...currentItem, [name]: value});
    }

    return (
        <Modal>
            <IconButton>
                <AddCircle color="secondary" style={{ fontSize: 80 }} />
            </IconButton>
            <form>
                <Card color={"green"} title={"支出情報"}>
                    <AttachFile/>
                    <>
                        <Typography color="textSecondary">
                            <SelectForm name={"big_category"} label={"大分類"} datas={big_categories} disabled={null} /> <span>/</span>
                            <SelectForm value={currentItem.category_id} name={"category_id"} label={"小分類"} datas={categories} disabled={null} onChange={handleInputChange} />
                        </Typography>
                        <Typography variant="h5" component="h2">
                            <Input name={"name"} label={"収支内容"} value={currentItem.name} type={"string"} onChange={handleInputChange}/>
                            <Input name={"price"} label={"値段"} value={currentItem.price} placeholder={"¥"} type={"number"} onChange={handleInputChange}/>
                        </Typography>
                        <Typography align="right" color="textSecondary">
                            <Input name={"date"} label={"収支発生日"} value={currentItem.date} type={"date"} onChange={handleInputChange} />
                        </Typography>
                    </>
                </Card>
                <Card color={"gold"}　title={"支払方法"}>
                    <MonetizationOn/>
                    <Typography>
                        <SelectForm value={currentItem.payment_method_id} name={"payment_method_id"} label={"支払方法"} datas={payment_methods} disabled={"disabled"} onChange={handleInputChange} />
                    </Typography>
                </Card>
                <Card color="green"　title={"備考"}>
                    <Comment/>
                    <TextField
                        name="note"
                        label="備考"
                        multiline
                        rows={4}
                        defaultValue={currentItem.note}
                        variant="outlined"
                        onChange={handleInputChange}
                    />
                </Card>
                <Button
                    color="primary"
                    variant="contained"
                    size="medium"
                    fullWidth={true}
                    onClick={() => {
                        dispatch(createItem(uid, currentItem))
                    }}
                >
                    Create
                </Button>
            </form>
        </Modal>
    );
}

export default AddItem;