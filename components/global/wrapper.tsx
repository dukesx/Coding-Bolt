import React, { FunctionComponent } from 'react';
import { Layout, Menu, Typography, Button, Modal } from 'antd';
import { useThemeSwitcher } from 'react-css-theme-switcher';
import useDarkMode from 'use-dark-mode';
import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import type { WrapperProps } from 'lib/models/app/definitions/props';
import Nav from './nav';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;
const config = {
  apiKey: 'AIzaSyDlBtYlp4pfEhiisgDT1U9PIZNf9qsC-mg',
  authDomain: 'coding-bolt.firebaseapp.com',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const Wrapper: FunctionComponent<WrapperProps> = ({
  tokener,
  children,
  route,
  admin,
}) => {
  const { themes, currentTheme } = useThemeSwitcher();
  const { toggle } = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
  });
  const [token, setToken] = useState(tokener ? tokener : null);

  useEffect(() => {
    if (!firebase.apps.length) {
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
              '1036440562165-j7g06r27357plblbsbdosmf6k5gh6drv.apps.googleusercontent.com',
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
      <Nav
        firebase={firebase}
        currentTheme={currentTheme}
        themes={themes}
        toggle={toggle}
      />
      <Content>
        <Layout>
          {admin ? (
            <Sider
              className="fixed z-10 h-screen overflow-auto top-16"
              width={200}
              breakpoint="md"
              collapsedWidth="0"
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={[route ? route : 'dashboard']}
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
                    icon={
                      <i className="text-xl ri-user-smile-line align-sub" />
                    }
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
                    icon={
                      <i className="text-xl ri-information-line align-sub" />
                    }
                  >
                    General
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
          ) : null}

          <Content
            className="mt-20 ml-64"
            style={{
              minHeight: 200,
            }}
          >
            <p className="w-3/6 p-5 m-10 overflow-x-scroll h-60">{token}</p>
            {children}
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

export default Wrapper;
