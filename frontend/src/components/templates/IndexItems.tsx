import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, translateBigCategory } from "../../reducks/items/operations";
import { itemState } from "../../reducks/items/type";
import { getUserId } from "../../reducks/users/selectors";
import { Button } from "../atoms";
import { Modal } from "../molecules";
import ItemMenu from "../molecules/ItemMenu";
import Table, { StyledTableCell, StyledTableRow } from "../molecules/Table";
import ItemForm from "../organisms/ItemForm";
import ShowItem from "../organisms/ShowItem";
import { initialState } from "../../reducks/store/initialState";
import { IconButton } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

type Props = {
    items: itemState[];
}

const IndexItems: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const uid = getUserId(selector);

    return (
        <>
            <Table headerItems={["収支発生日","カテゴリ","内容","値段","操作"]}>
                {props.items.map((item) => (
                    <StyledTableRow key={item.id}>
                        <StyledTableCell align="center">
                            {item.date}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            {translateBigCategory(item.category.big_category)}/{item.category.name}
                        </StyledTableCell>
                        <StyledTableCell align="center"><ShowItem item={item}/></StyledTableCell>
                        <StyledTableCell align="right">{item.price}円</StyledTableCell>
                        <StyledTableCell align="center">
                            <Modal>
                                <Button
                                    children={"edit"}
                                    color="inherit"
                                    size="small"
                                    variant="text"
                                    startIcon={<EditIcon color="info"/>}
                                />
                                <ItemForm
                                    formType="edit"
                                    item={item}
                                />
                            </Modal>
                            <ItemMenu
                                delete={() => {
                                    window.confirm('削除しますか？') ?
                                    dispatch(deleteItem(uid, item.id))
                                    : alert('削除に失敗しました。')
                                }}
                            />
                        </StyledTableCell>
                    </StyledTableRow>
                ))}
            </Table>
            <Modal>
                <IconButton>
                    <AddCircle color="secondary" style={{ fontSize: 80 }} />
                </IconButton>
                <ItemForm formType="create" item={initialState.items}/>
            </Modal>
            
        </>
    );
}

export default IndexItems;