import React, { useState, useMemo, useRef } from 'react';

const getAverage = numbers => {
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b)=> a + b);
    return sum / numbers.length;
};

const Average3 = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onChange = e => {
        setNumber(e.target.value);
    }

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus(); //inputEl에 포커스 주기
    };

    //useMemo를 사용하지 않으면 getAverage가 계속 실행됨
    const avg = useMemo(()=> getAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index)=> (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                {/* <b>평균 값:</b> {getAverage(list)} */}
                <b>평균 값:</b> {avg}
            </div>
        </div>
    )
}

export default Average3;