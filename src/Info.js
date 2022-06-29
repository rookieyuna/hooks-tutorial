import React, { useEffect, useState } from 'react';

const Info = () => {
    const [name, setname] = useState('');
    const [nickname, setNickname] = useState('');

    
    useEffect(()=>{
        console.log('렌더링 완료');
        console.log({
            name,
            nickname
        });

        return() => {
            console.log('cleanup');
            console.log(name);
        } //뒷정리함수

    }); //마운팅&업데이트 시 모두 렌더링
    //},[]); // 마운팅 시에만 렌더링
    //},[name]); // name 업데이트 시 렌더링


    const onChangeName = e => {
        setname(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
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

export default Info;