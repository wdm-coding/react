// 根组件 
// APP -> INDEX.JS -> index.html -> root
import { useState } from "react";
import PagesBase from './pages-base/index.js'
import PagesRedux from './pages-redux/index.js'
import PagesRouter from './pages-router/index.js'
import PagesClass from './pages-class/index.js'
import PagesZustand from './pages-zustand/index.js'
import AdminApp from './admin-page/index.js'
import './index.scss'
// pages-a-APP
function App() {
  const [compName] = useState('PagesZustand')
  return (
    <div className="App">
      {
        {
          PagesBase:<PagesBase />,
          PagesRedux:<PagesRedux />,
          PagesRouter:<PagesRouter />,
          AdminApp:<AdminApp />,
          PagesClass:<PagesClass />,
          PagesZustand:<PagesZustand />
        }[compName]
      }
    </div>
  );
}

export default App;
