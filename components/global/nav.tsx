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
    <Header className="fixed top-0 z-20 flex w-full p-3.5 bg-white dark:shadow-blue shadow-md header dark:bg-dark">
      <div className="items-center hidden xs:flex xxs:flex">
        <i className="mt-0.5 mr-4 text-xl xxsLmr-2 ri-menu-fill" />
      </div>
      <img
        className="ml-5 h-9 xs:ml-0 xxs:ml-0"
        src={
          currentTheme == themes.light
            ? '/bolt-letter.svg'
            : '/bolt-letter-dark.svg'
        }
      />
      <div
        className="flex items-center p-3.5 xs:p-0 xxs:p-0 xs:border-none xxs:border-none ml-auto mr-10 xs:mr-4 xxs:mr-4 align-middle border border-gray-300 cursor-pointer rounded-xl"
        onClick={() => toggle()}
      >
        <div className="font-segoe xs:hidden xxs:hidden">Goto</div>
        <div className="mt-1.5 mx-2 xxs:mr-0.5 xxs:ml-2">
          {currentTheme == themes.light ? (
            <i className="text-2xl align-sub ri-moon-fill" />
          ) : (
            <i className="text-2xl ri-sun-fill align-sub " />
          )}
        </div>
        <div className="font-segoe xs:hidden xxs:hidden">Mode</div>
      </div>
      <Button className="mt-0.5" type="primary" onClick={() => setModal(true)}>
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
