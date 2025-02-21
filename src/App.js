// 根组件 
// APP -> INDEX.JS -> index.html -> root
import "./index.css";
import CommentList from "./pages/comment-list.js";
import ContralBindInput from "./pages/contral-bind-input.js";
import GetDom from "./pages/get-dom.js";
import Father from "./pages/fatherSon/father.js";
let number = 0;
const compName = "Father";
function App() {
  number++;
  console.log(`组件渲染第${number}次`)
  return (
    <div className="App">
      <p style={{color:'red',fontSize:'32px'}}>React</p>
      {
        {
          CommentList:<CommentList />,
          ContralBindInput:<ContralBindInput />,
          GetDom:<GetDom />,
          Father:<Father />
        }[compName]
      }
    </div>
  );
}

export default App;
