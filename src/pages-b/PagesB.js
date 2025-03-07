import { useState } from "react";

import ReactRedux from './views/react-redux.js'
import AsyncRedux from './views/async-redux.js'
function PagesB(){
    const [compName] = useState('AsyncRedux')
    return (
        <div>
            <h1 style={{fontSize:'32px'}}>Redux</h1>
            {
                {
                    'null':<div>null</div>,
                    ReactRedux:<ReactRedux/>,
                    AsyncRedux:<AsyncRedux/>
                }[compName]
            }
        </div>
    );
}
export default PagesB;