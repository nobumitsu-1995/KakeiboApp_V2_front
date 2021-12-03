import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { itemState } from '../../reducks/items/type';

type Props = {
    items: itemState[];
    currentMonth: string;
    budget: number;
}

const LineChart: React.FC<Props> = (props) => {
    const [endOfMonth, setEndOfMonth] = useState<number>(0) 
    const [x, setX] = useState([""])
    const [incomeData, setIncomeData] = useState([0]);
    const [amountY, setAmountY] = useState([0]);

    useEffect(() => {
        const day = new Date(props.currentMonth)
        // 翌月の取得
        day.setMonth(day.getMonth() + 1);
        // 先月末日の取得
        day.setDate(0);
        setEndOfMonth(day.getDate())
        setX(Array(endOfMonth).fill(0).map((v, i) => `${i + 1}日`))
    }, [props.items, props.currentMonth])

    useEffect(() => {
        const initialAmountY = Array(endOfMonth).fill(0);
        setIncomeData(initialAmountY);
        
        props.items.forEach(item => {
            const date = new Date(item.date);
            const day = date.getDate();
            initialAmountY[day-1] += (item.category.big_category === "income" ? item.price : -item.price)
            setIncomeData(initialAmountY)
        });
    }, [endOfMonth, props.items])  

    useEffect(() => {
        const arr = incomeData.reduce((result, current) => {
            const price = result[result.length - 1] + current
            result.push(price)
            return result
        }, [props.budget])
        arr.shift();
        setAmountY(arr);
    }, [incomeData])


    
    const data = {
        labels: x,
        datasets: [
            {
                label: '今月残り予算',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderDash: [],
                borderDashOffset: 0.0,
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: amountY,
            },
        ],
    };
    
    return (
        <>
            <Line data={data} height={80}/>
            <div>
                <p>残高：　{amountY[amountY.length-1]}円</p>
                <p>月予算残高：　{amountY[amountY.length-1] - props.budget}円</p>
            </div>
            
        </>
    );
}

export default LineChart;