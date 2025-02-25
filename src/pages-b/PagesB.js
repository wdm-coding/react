import { useState } from "react";
function PagesB(){
    const [compName] = useState('null')
    return (
        <div>
            <h1 style={{fontSize:'32px'}}>Redux</h1>
            {
                {
                    'null':<div>null</div>
                }[compName]
            }
        </div>
    );
}
export default PagesB;