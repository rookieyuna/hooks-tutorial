import { useState, useEffect } from "react";

//promiseCreator: Promise 생성하는 메서드
//deps: 언제 Promise를 생성하는지에 대한 조건, 배열

export default function usePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null); //Promise객체 저장
    const [loading, setLoading] = useState(false); //로딩 완료여부(Boolean)
    const [error, setError] = useState(null); //오류메세지

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreator();
            setResolved(result);
        } catch(e){
            setError(e);
        }
        setLoading(false);
    };

    /*
    -useEffect에 파라미터로 전달해주는 함수에서 async 를 사용하면 안됨
    -함수가 아닌 프로미스를 반환하여 오류를 발생시키기 때문
    [예시] useEffect(async () => {});
    */
    useEffect(()=> {
        process(); 
    }, deps);

    return [loading, resolved, error];
}