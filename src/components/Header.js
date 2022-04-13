import React from 'react';
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { Menu } from 'antd';
import { Row, Col } from 'react-grid-system';

import {
  MailOutlined,
  SettingOutlined,
  GithubOutlined,
} from '@ant-design/icons';

export function Header() {

	return (
		<Row align="stretch" direction="row">
			<Menu mode="horizontal" style={{ height: '100%', borderRight: 0 }}>
				<Col xs={4} lg={6}>
					<Menu.Item icon={<GithubOutlined />}>
						<strong>Page One</strong>
					</Menu.Item>
				</Col>

				<Col xs={4} lg={6}>
					<Menu.Item icon={<SettingOutlined />}>
						Page Two
					</Menu.Item>
				</Col>

				<Col xs={4} lg={6}>
					<Menu.Item icon={<MailOutlined />}>
						Page Three
					</Menu.Item>
				</Col>
				
			</Menu>	

	</Row>	

		)
}

export default Header