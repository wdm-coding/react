// 根组件 
// APP -> INDEX.JS -> index.html -> root
import { useState } from "react";
import PagesA from './pages-a/PagesA.js'
import PagesB from './pages-b/PagesB.js'
import PagesC from './pages-c/PagesC.js'
import AdminApp from './admin-page/AdminApp.js'
import './index.scss'
// pages-a-APP
function App() {
  const [compName] = useState('PagesA')
  return (
    <div className="App">
      {
        {
          PagesA:<PagesA />,
          PagesB:<PagesB />,
          PagesC:<PagesC />,
          AdminApp:<AdminApp />
        }[compName]
      }
    </div>
  );
}

export default App;
