import { Card, Form, Input, Button,message } from "antd"
import "./index.scss"
import { useEffect, useState } from "react"
import {userLogin} from '@/store/modules/userStore.js'
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [loginSucesss, setLoginSucesss] = useState(false)
    const onFinish = async (values) => {
        setLoading(true)
        setTimeout(() => {
            dispatch(userLogin({...values}))
            setLoading(false)
            setLoginSucesss(true)
            navigate('/')
        }, 2000)
    }
    useEffect(()=>{
        if(loginSucesss) {
            message.success('登录成功');
            setLoginSucesss(false)
        }
    },[loginSucesss])
    const onFinishFailed = (errorInfo) => {
        // 输出错误信息
        console.log("Failed:", errorInfo)
    }
	return (
		<div className="login_wrap">
			<Card 
                title="登录" 
                variant="borderless" 
                style={{ width: 500}}
            >
				<Form
					name="basic"
                    labelAlign="left"
					labelCol={{span: 4}}
					wrapperCol={{span: 20}}
					style={{width: '90%'}}
					initialValues={{remember: true}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
                    size="large"
                    validateTrigger={['onBlur','onChange']}
				>
					<Form.Item
                        label="手机号"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "请输入手机号!",
                            },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: "手机号格式不正确!",
                            },
                        ]}
					>
						<Input autoComplete="off"/>
					</Form.Item>

					<Form.Item
						label="密码"
						name="password"
						rules={[{
								required: true,
								message: "请输入密码!",
							}]}
					>
						<Input.Password autoComplete="new-password"/>
					</Form.Item>
                    <Form.Item label=" " colon={false}>
                        <Button 
                            type="primary" 
                            htmlType="submit" 
                            style={{width:'100%'}}
                            loading={loading}
                            iconPosition="end"
                        >
                            登录
                        </Button>
                    </Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login
