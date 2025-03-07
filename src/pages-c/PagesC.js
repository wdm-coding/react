import {RouterProvider} from 'react-router-dom'
import router from '../router/index.js'
function PagesC(){
    return (
        <div>
            <h1 style={{fontSize:'32px'}}>React-Router</h1>
            <hr />
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}
export default PagesC;