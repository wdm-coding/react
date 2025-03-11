import { Card, Space } from 'antd';
import './index.scss'
function Login(){
    return (
        <div className='login_wrap'>
            <Card title="Card title" variant="borderless" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </div>
    )
}

export default Login;