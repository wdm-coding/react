import { Button, Layout, Menu, theme } from "antd"
import {useState} from "react"
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import "./index.scss"
import classnames from 'classnames';
import {Outlet,useLocation,useNavigate} from 'react-router-dom'
const { Header, Sider, Content } = Layout;
function LayoutComp() {
	const naivate = useNavigate()
	const locarion = useLocation()
	const [collapsed, setCollapsed] = useState(false)
  const {token: { colorBgContainer, borderRadiusLG }} = theme.useToken();
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
