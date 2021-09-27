import { Container, Button } from "@mantine/core";
import Nav from "./nav";
// import { signIn, signOut, useSession } from "next-auth/client";
import Script from "next/script";
import { useState, useEffect } from "react";
import { supabase } from "lib/supabaseClient";
import Flicking from "@egjs/react-flicking";
import { Arrow } from "@egjs/flicking-plugins";
// import {
//   AngularjsOriginalIcon,
//   SvelteOriginalIcon,
//   ReactOriginalIcon,
//   VuejsOriginalIcon,
//   DartOriginalIcon,
// } from "react-devicons";
import AngularjsOrignalIcon from "react-devicons/angularjs/original";
import VuejsOrignalIcon from "react-devicons/vuejs/original";
import ReactOrignalIcon from "react-devicons/react/original";
import SvelteOrignalIcon from "react-devicons/svelte/original";
import DartOrignalIcon from "react-devicons/dart/original";
import AngularjsOriginalIcon from "react-devicons/angularjs/original";
import DartOriginalIcon from "react-devicons/dart/original";
import VuejsOriginalIcon from "react-devicons/vuejs/original";
import SvelteOriginalIcon from "react-devicons/svelte/original";

const Wrapper = (props: any) => {
  const [session, setSession] = useState(null);
  const sessioner = supabase.auth.session();
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
      <div className="bg-gray-100 p-2 dark:bg-transparent">
        <Flicking
          // firstPanelSize="200px"
          // hideBeforeInit={true}
          circular={true}
          align="center"
          gap={15}
          horizontal
          // resizeOnContentsReady
          // adaptive
        >
          <Button
            leftIcon={<ReactOrignalIcon />}
            className="dark:bg-[#25262b] dark:font-bold dark:text-white"
            variant="white"
          >
            React
          </Button>
          <Button
            leftIcon={<AngularjsOriginalIcon />}
            className="dark:bg-[#25262b] dark:font-bold dark:text-white"
            variant="white"
          >
            Angular
          </Button>
          <Button
            leftIcon={<DartOriginalIcon />}
            className="dark:bg-[#25262b] dark:font-bold dark:text-white"
            variant="white"
          >
            Dart
          </Button>
          <Button
            leftIcon={<VuejsOriginalIcon />}
            className="dark:bg-[#25262b] dark:font-bold dark:text-white"
            variant="white"
          >
            Vue
          </Button>
          <Button
            leftIcon={<SvelteOriginalIcon />}
            className="dark:bg-[#25262b] dark:font-bold dark:text-white"
            variant="white"
          >
            Svelte
          </Button>
        </Flicking>
      </div>
      <Container className="xs:p-0 xxs:p-0 pt-0 px-0" size={1660}>
        {props.children}
      </Container>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
      ></Script>
    </Container>
  );
};

export default Wrapper;
