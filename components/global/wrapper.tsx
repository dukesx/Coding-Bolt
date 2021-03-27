import React, { ReactChild, ReactChildren } from 'react';
import { Layout, Menu, Breadcrumb, Typography, Button } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import useDarkMode from 'use-dark-mode';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import firebase from 'firebase/app';
import { EffectCallback, useEffect, useState } from 'react';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;
const config = {
  apiKey: 'AIzaSyAeue-AsYu76MMQlTOM-KlbYBlusW9c1FM',
  authDomain: 'myproject-1234.firebaseapp.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const Wrapper = (props: any) => {
  const AuthUser = useAuthUser();
  const { switcher, themes, currentTheme, status } = useThemeSwitcher();
  const { toggle } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });
  const [token, setToken] = useState(props.token ? props.token : null);

  useEffect(() => {
    if (firebase.apps.length) {
      var firebaseui = require('firebaseui');
      var ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(firebase.auth());
      const uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
          {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            clientId:
              '963385239831-0fkb07g5dpsb5n6kmfbv77o5e9120mk2.apps.googleusercontent.com',
          },
        ],
        callbacks: {
          signInSuccessWithAuthResult: (authResult, redirectUrl) => {
            setToken(authResult.credential.idToken);
          },
        },
        credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
      };

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          (async () => {
            const tokener = await user.getIdToken();
            setToken(tokener);
          })();
        } else {
          setToken(null);
        }
      });

      if (!token) {
        ui.start('#firebase-ui', uiConfig);
      }

      ui.disableAutoSignIn();
    }
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
            <p className="w-3/6 p-5 m-10 overflow-x-scroll h-60">{token}</p>
            {props.children}
            <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default withAuthUser()(Wrapper);
