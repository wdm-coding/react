// 根组件 
// APP -> INDEX.JS -> index.html -> root
import "./index.css";
import CommentList from "./pages/comment-list.js";
let number = 0;
function App() {
  number++;
  console.log(`组件渲染第${number}次`)
  return (
    <div className="App">
      <p style={{color:'red',fontSize:'32px'}}>this is a react project</p>
      <CommentList />
    </div>
  );
}

export default App;
