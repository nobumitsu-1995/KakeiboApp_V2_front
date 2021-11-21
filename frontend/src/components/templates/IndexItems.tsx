import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, translateBigCategory } from "../../reducks/items/operations";
import { itemState } from "../../reducks/items/type";
import { getUserId } from "../../reducks/users/selectors";
import ItemMenu from "../molecules/ItemMenu";
import Table, { StyledTableCell, StyledTableRow } from "../molecules/Table";
import AddItem from "../organisms/AddItem";
import ShowItem from "../organisms/ShowItem";

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
                        {console.log(item.date)}
                        <StyledTableCell align="center">
                            {item.date}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            {translateBigCategory(item.category.big_category)}/{item.category.name}
                        </StyledTableCell>
                        <StyledTableCell align="center"><ShowItem item={item}/></StyledTableCell>
                        <StyledTableCell align="right">{item.price}円</StyledTableCell>
                        <StyledTableCell align="center">
                            <ItemMenu
                                edit={() => dispatch(push("/items"))}
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
            <AddItem/>
        </>
    );
}

export default IndexItems;