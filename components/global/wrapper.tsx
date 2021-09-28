import { Container, Button, Text } from "@mantine/core";
import Nav from "./nav";
// import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { supabase } from "lib/supabaseClient";
// import Flicking from "@egjs/react-flicking";
import ReactOrignalIcon from "react-devicons/react/original";
import AngularjsOriginalIcon from "react-devicons/angularjs/original";
import DartOriginalIcon from "react-devicons/dart/original";
import VuejsOriginalIcon from "react-devicons/vuejs/original";
import SvelteOriginalIcon from "react-devicons/svelte/original";

const Wrapper = (props: any) => {
  const [session, setSession] = useState(null);
  const sessioner = supabase.auth.session();
  const myRefer = useRef();
  supabase.auth.onAuthStateChange((event, session) => {
    setSession(session);
    fetch("/api/auth", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      credentials: "same-origin",
      body: JSON.stringify({ event, session }),
    }).then((res) => res.json());
  });

  useEffect(() => {
    setSession(sessioner);
  }, [sessioner]);
  // const plugins = [new Arrow()];
  return (
    <Container
      className="w-full"
      style={{
        padding: 0,
      }}
      fluid
    >
      <Nav session={session} />
      {/* <div className="bg-gray-100 p-2 dark:bg-transparent">
        <Flicking
          hideBeforeInit={true}
          align="center"
          horizontal
          circular={true}
          defaultIndex={0}
        >
          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>

          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>

          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<AngularjsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Angular
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<DartOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Dart
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<VuejsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Vue
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<SvelteOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Svelte
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<AngularjsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Angular
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<DartOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Dart
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<VuejsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Vue
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<SvelteOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Svelte
            </Button>
          </div>

          <div className="mx-2">
            <Button
              leftIcon={<ReactOrignalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              React
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<AngularjsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Angular
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<DartOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Dart
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<VuejsOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Vue
            </Button>
          </div>
          <div className="mx-2">
            <Button
              leftIcon={<SvelteOriginalIcon />}
              className="dark:bg-[#25262b] dark:font-bold dark:text-white"
              variant="white"
            >
              Svelte
            </Button>
          </div>
        </Flicking>
      </div> */}
      <Container className="xs:p-0 xxs:p-0 pt-0 px-0" size={1660}>
        {props.children}
      </Container>
    </Container>
  );
};

export default Wrapper;
