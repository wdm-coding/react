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
import GetAxiosData from "./pages/get-axios-data.js";
function App() {
  const [compName] = useState('CommentList')
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
          UseEffectHook:<UseEffectHook />,
          GetAxiosData:<GetAxiosData />
        }[compName]
      }
      <button style={{position:"fixed",bottom:'30px'}} onClick={toggle}>切换</button>
    </div>
  );
}

export default App;
