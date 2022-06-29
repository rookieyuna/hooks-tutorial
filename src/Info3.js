import React, { useReducer } from 'react';
import useInputs from './useInputs';

//Info2의 useReducer를  useInputs이라는 커스텀 hook으로 분리하기

const Info3 = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });

    const {name, nickname} = state;


    return(
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    )
}

export default Info3;