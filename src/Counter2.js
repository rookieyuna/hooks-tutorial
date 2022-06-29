import React, { useReducer } from 'react';

/*
reducer 함수: 현재 상태와, 업데이트를 위해 필요한 정보를 담은 
    액션(action) 값을 전달 받아 새로운 상태를 반환하는 함수 
*/
function reducer(state, action){
    // action.type에 따라 다른 작업 수행
    switch (action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            //아무것도 해당되지 않으면 기존 상태 반환
            return state;
    }
}

const Counter2 = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});

    return (
        <div>
            <p>현재 카운터 값은 {state.value}입니다. </p>
            <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
            <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
        </div>
    )
}

export default Counter2;