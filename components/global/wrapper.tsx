import React, { ReactChild, ReactChildren } from 'react';
import { Layout, Menu, Breadcrumb, Typography } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import useDarkMode from 'use-dark-mode';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;
export default function Wrapper(props: any) {
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const { toggle } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });
  return (
    <Layout>
      <Header className="fixed top-0 z-20 flex w-full p-5 bg-white shadow-md header dark:bg-dark">
        <img
          src={
            currentTheme == themes.light
              ? '/bolt-logo.svg'
              : '/bolt-logo-dark.svg'
          }
        />
        <div
          className="flex items-center p-3.5 ml-auto mr-10 align-middle border border-gray-300 cursor-pointer rounded-xl"
          onClick={() => toggle()}
        >
          <div className="font-segoe">Goto</div>
          <div className="mt-1.5 mx-2">
            {currentTheme == themes.light ? (
              <i className="ri-moon-fill ri-lg" />
            ) : (
              <i className="ri-sun-fill ri-lg" />
            )}
          </div>
          <div className="font-segoe">Mode</div>
        </div>
      </Header>
      <Content>
        <Layout>
          <Sider
            className="fixed z-10 h-screen overflow-auto top-16"
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={[props.route ? props.route : 'dashboard']}
              defaultOpenKeys={['types']}
              theme={currentTheme == themes.light ? 'light' : 'dark'}
              className="h-full"
            >
              <Menu.Item
                key="dashboard"
                icon={<i className="text-xl ri-dashboard-line align-sub" />}
              >
                Dashboard
              </Menu.Item>
              <SubMenu
                key="types"
                icon={
                  <i className="mr-4 text-xl ri-database-2-line align-sub" />
                }
                title="Types"
              >
                <Menu.Item
                  key="user-type"
                  icon={<i className="text-xl ri-user-smile-line align-sub" />}
                >
                  Users
                </Menu.Item>
                <Menu.Item
                  key="all-types"
                  icon={<i className="text-xl ri-node-tree align-sub" />}
                >
                  All
                </Menu.Item>
              </SubMenu>

              <SubMenu
                key="settings"
                icon={
                  <i className="mr-4 text-xl ri-settings-6-line align-sub" />
                }
                title="Settings"
              >
                <Menu.Item
                  key="general-settings"
                  icon={<i className="text-xl ri-information-line align-sub" />}
                >
                  General
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            className="mt-20 ml-64"
            style={{
              minHeight: 200,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
