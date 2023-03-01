import React, { useState } from 'react';

const Table = () => {

    const [data, setData] = useState([
        { column1: true, column2: 'xxxx-', column3: 3, column4: 'Київстар' },
        { column1: true, column2: 'xxxx-', column3: 2, column4: 'lifecell' },
        { column1: true, column2: 'xxxx-', column3: 1, column4: 'mongoDB' },
        { column1: true, column2: 'xxxx-', column3: 0, column4: 'Vodaphone' },
    ]);
    const newRow = [true, 'xxxx-', ' ',' '];
    function addRow(){
        setData(newRow)
    }

    return (
        <div className="table-wrapper">
        <button className="add-button" onClick={addRow}>Add</button>
            <table>
            <tr>
                <th>Статус</th>
                <th>Товар</th>
                <th>ID</th>
                <th>Название</th>
                <th>Actions</th>
            </tr>
            <tr className="selector">
                <th>_____</th>
                <th>_____</th>
                <th>_____</th>
                <th>
                    <input type="text" id="search-input" className="overflow-text find-by-name" />
                </th>
            </tr>

            {data.map((row, index) => (
                <tr key={index}>
                    <td><button className="overflow-text" value={row.column1}>{row.column1}</button></td>
                    <td><input className="overflow-text" value={row.column2}/></td>
                    <td><input className="overflow-text" value={row.column3} type="text"/></td>
                    <td><input className="overflow-text" value={row.column4} type="text"/></td>
                </tr>
            ))}
        </table>
        </div>
    );
};

export default Table;
