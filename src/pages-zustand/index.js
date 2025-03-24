import useStore from '@/zustand/index.js';
function PagesZustand() {
    const store = useStore();
    console.log('store',store);
    return (
      <div>
        <p>PagesZustand</p>
        
        {/* <div style={{display:'flex'}}>
          <button onClick={increment}>+</button>
          <p>count: {count}</p>
          <button onClick={decrement}>-</button>
        </div>
        <button onClick={()=>{setCount(100)}}>设为100</button>
        <button onClick={asyncHandle}>异步操作</button> */}
        {/* <button onClick={setToken}>异步获取token:{token}</button> */}
      </div>
    );
}

export default PagesZustand;