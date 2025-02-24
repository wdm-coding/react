// 根组件 
// APP -> INDEX.JS -> index.html -> root
import "./index.css";
import { useState } from "react";
import CommentList from "./pages/comment-list.js";
import ContralBindInput from "./pages/contral-bind-input.js";
import GetDom from "./pages/get-dom.js";
import Father from "./pages/fatherSon/father.js";
import WrapApp from "./pages/fatherSon/wrap-app.js";
import UseEffectHook from "./pages/hooks/useEffect-hook.js";
import useToggle from "./pages/hooks/useToggle.js";
function App() {
  const [compName] = useState('UseEffectHook')
  // const [show,setShow] = useState(true)
  // const toggle = ()=>{
  //   setShow(!show)
  // }
  const {show,toggle} = useToggle()
  return (
    <div className="App">
      <p style={{color:'red',fontSize:'32px'}}>React</p>
      {
        show && {
          CommentList:<CommentList />,
          ContralBindInput:<ContralBindInput />,
          GetDom:<GetDom />,
          Father:<Father />,
          WrapApp:<WrapApp />,
          UseEffectHook:<UseEffectHook />
        }[compName]
      }
      <button onClick={toggle}>切换</button>
    </div>
  );
}

export default App;
