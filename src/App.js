// 根组件 
// APP -> INDEX.JS -> index.html -> root
import { useState } from "react";
import PagesA from './pages-a/PagesA.js'
import PagesB from './pages-b/PagesB.js'
import PagesC from './pages-c/PagesC.js'
// pages-a-APP
function App() {
  const [compName] = useState('PagesC')
  return (
    <div className="App">
      <p style={{color:'red',fontSize:'42px'}}>React</p>
      {
        {
          PagesA:<PagesA />,
          PagesB:<PagesB />,
          PagesC:<PagesC />,
        }[compName]
      }
    </div>
  );
}

export default App;
