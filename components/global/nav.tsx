import type { WrapperProps } from 'lib/models/typescript/definitions';
import { Button, Modal, Layout } from 'antd';
import { FunctionComponent, useState } from 'react';

const { Header } = Layout;

const Nav: FunctionComponent<WrapperProps> = ({
  currentTheme,
  themes,
  firebase,
  toggle,
}) => {
  const [modal, setModal] = useState(false);

  return (
    <Header className="fixed top-0 z-20 flex w-full p-5 bg-white shadow-md header dark:bg-dark">
      <img
        className="h-7"
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
      <Button type="primary" onClick={() => setModal(true)}>
        Get Started
      </Button>
      <Modal visible={modal} onCancel={() => setModal(false)} footer={false}>
        <Button
          onClick={() => {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase
              .auth()
              .signInWithPopup(provider)
              .then((result) => {
                var credential = result.credential;
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Google
        </Button>
      </Modal>
    </Header>
  );
};

export default Nav;
