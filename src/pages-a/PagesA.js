import "./index.css";
import { useState } from "react";
import CommentList from "./comment-list.js";
import ContralBindInput from "./contral-bind-input.js";
import GetDom from "./get-dom.js";
import Father from "./fatherSon/father.js";
import WrapApp from "./fatherSon/wrap-app.js";
import UseEffectHook from "./hooks/useEffect-hook.js";
import useToggle from "./hooks/useToggle.js";
import GetAxiosData from "./get-axios-data.js";
function PagesA(){
  const [compName] = useState('CommentList')
  const {show,toggle} = useToggle()
  return (
    <div className="PagesA">
      <p style={{color:'red',fontSize:'32px'}}>React基础</p>
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
export default PagesA;