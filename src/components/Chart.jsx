import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = ({ quiz }) => {
    const { total } = quiz;
    console.log(total)
    return (
        <div>
            <h1>hello chat</h1>
            <LineChart width={500} height={400} data={quiz}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>

            </LineChart>
        </div>
    );
};

export default Chart;