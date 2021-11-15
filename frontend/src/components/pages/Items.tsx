import IndexItems from "../templates/IndexItems";

const items = [
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
    {
        id: "1234",
        date: "12/12",
        category: {big_category: "fixed_cost", name: "qwerty"},
        payment_method: {name: "12345"},
        name: "hoge",
        price: 12345,
        note: "qwertyuiop@["
    },
]

const Items = () => {
    return (
        <IndexItems items={items}/>
    );
}

export default Items;