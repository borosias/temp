import React, { useState } from 'react';

const AddRowForm = ({ onSubmit }) => {
    const [column1, setColumn1] = useState('');
    const [column2, setColumn2] = useState('');
    const [column3, setColumn3] = useState('');
    const [column4, setColumn4] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ column1, column2, column3, column4 });
        setColumn1('');
        setColumn2('');
        setColumn3('');
        setColumn4('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="checkbox"
                placeholder="Column 1"
                value={column1}
                onChange={(event) => setColumn1(event.target.value)}
            />
            <input
                type="text"
                value={"xxxx-"} readOnly
                onChange={(event) => setColumn2(event.target.value)}
            />
            <input
                type="text"
                placeholder="Column 3"
                value={column3}
                onChange={(event) => setColumn3(event.target.value)}
            />
            <input
                type="text"
                placeholder="_____________"
                value={column4}
                onChange={(event) => setColumn4(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddRowForm;