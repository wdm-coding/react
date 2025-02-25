// 根组件 
// APP -> INDEX.JS -> index.html -> root
import { useState } from "react";
import PagesA from './pages-a/PagesA.js'
import PagesB from './pages-b/PagesB.js'
// pages-a-APP
function App() {
  const [compName] = useState('PagesB')
  return (
    <div className="App">
      <p style={{color:'red',fontSize:'42px'}}>React</p>
      {
        {
          PagesA:<PagesA />,
          PagesB:<PagesB />
        }[compName]
      }
    </div>
  );
}

export default App;
