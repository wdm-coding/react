import { Button, Layout, Menu, theme,Avatar,Popconfirm,message } from "antd"
import {useState} from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined,LoginOutlined,TableOutlined } from '@ant-design/icons';
import "./index.scss"
import classnames from 'classnames';
import {Outlet,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from "react-redux";
import {LayoutOut} from '@/store/modules/userStore'
const { Header, Sider, Content } = Layout;
function LayoutComp() {
	const {userInfo} = useSelector(state=>state.user)
	const naivate = useNavigate()
	const locarion = useLocation()
	const [collapsed, setCollapsed] = useState(false)
  const {token: { colorBgContainer, borderRadiusLG }} = theme.useToken();
	const dispatch = useDispatch()
	const confirm = () => {
		dispatch(LayoutOut())
		naivate('/login', { replace: true })
		message.success('退出成功!');
	};
	return (
		<div className="layout_wrap">
			<Layout style={{width:'100%',height:'100%'}}>
				<Sider trigger={null} collapsible collapsed={collapsed}>
					<div className={classnames(['logo_row',collapsed?'collapsed_logo':null])}>
						<img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" style={{width:'50px',height:'50px'}}/>
						<h3 style={{marginLeft:'10px'}}>后台管理系统</h3>
					</div>
					<Menu
						theme="dark"
						mode="inline"
						selectedKeys={locarion.pathname}
						items={[
							{
								key: "/",
								icon: <UserOutlined />,
								label: "首页",
							},
							{
								key: "/list",
								icon: <VideoCameraOutlined />,
								label: "列表",
							},
							{
								key: "/echarts",
								icon: <TableOutlined />,
								label: "Echarts图表",
							}
						]}
						onClick={({key})=>{
							naivate(key)
						}}
					/>
				</Sider>
				<Layout>
					<Header
						style={{
							padding: 0,
							background: colorBgContainer,
						}}
					>
						<Button
							type="text"
							icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
							onClick={() => setCollapsed(!collapsed)}
							style={{
								fontSize: "16px",
								width: 64,
								height: 64,
							}}
						/>
						<div style={{float:'right',marginRight:'20px',display:'flex',alignItems:'center'}}>
							<span style={{marginRight:'10px'}}>欢迎您，{userInfo.name}</span>
							<Avatar src={userInfo.avator} size='large' style={{margin:'0 85px 0 15px'}}/>
							<Popconfirm
								title="注意"
								description="你确定要退出吗？"
								onConfirm={confirm}
								okText="确定"
								cancelText="取消"
							>
								<div style={{display:'flex',alignItems:'center'}}>
									<LoginOutlined style={{fontSize:'26px',cursor:'pointer'}}/>
									<span style={{paddingLeft:'10px'}}>退出</span>
								</div>
							</Popconfirm>
						</div>
					</Header>
					<Content
						style={{
							margin: "24px 16px",
							padding: '10px',
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						<Outlet></Outlet>
					</Content>
				</Layout>
			</Layout>
		</div>
	)
}

export default LayoutComp
