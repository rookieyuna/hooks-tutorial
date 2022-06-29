import React, { useState } from 'react';
import Counter from './Counter';
import ContextSample from './ContextSample';
import Info from './Info';
import Info2 from './Info2';
import Counter2 from './Counter2';
import Average from './Average';
import Average2 from './Average2';
import Average3 from './Average3';
import Info3 from './Info3';
import UsePromiseSample from './UsePromiseSample';


function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
        <h2>useState</h2>
        <Counter />
        
        <hr/>
        <h2>useEffect</h2>
        <button onClick={()=>{
          setVisible(!visible);
        }}>
          {visible ? '숨기기': '보이기'}
        </button>
        {visible && <Info />}

        <hr/>
        <h2>useContext</h2>
        <ContextSample/> 

        <hr/>
        <h2>useReducer</h2>
        <p>useState 보다 컴포넌트에서 더 다양한 상황에 따라 
          다양한 상태를 다른 값으로 업데이트해주고 싶을 때 사용하는 Hook</p>
        <Counter2/>
        <Info2/>

        <hr/>
        <h2>useMemo</h2>
        <p>함수형 컴포넌트 내부에서 발생하는 연산을 최적화하는 Hook</p>
        <Average/>

        <hr/>
        <h2>useCallback</h2>
        <p>useMemo와 비슷한 함수로 주로 렌더링 성능을 최적화해야 하는 상황에서 사용
          이벤트 핸들러 함수를 필요할 때만 생성하는 Hook</p>
        <p>*useMemo : 숫자, 문자열, 객체 처럼 일반 값을 재사용<br/>
           *useCallBack : 함수를 재사용 </p>
        <Average2/>

        <hr/>
        <h2>useRef</h2>
        <p>함수형 컴포넌트에서 ref 를 쉽게 사용 할 수 있게 해주는 Hook</p>
        <Average3/>
      
        <hr/>
        <h2>Custom Hooks</h2>
      
        <h3>useInputs</h3>
        <p> 기존에 Info 컴포넌트에서 여러개의 인풋을 관리하기 위하여 
          useReducer 로 해결했던 작성했던 로직을 useInputs 라는 Hook 으로 따로 분리</p>        
        <Info3/>

        <h3>usePromise</h3>
        <p>Promise 를 더 쉽게 사용 할 수 있는 Hook만들어 보기</p>
        <UsePromiseSample/>
        


        <p>[출처]https://velog.io/@velopert/react-hooks</p>
    </div>

  );
}

export default App;
