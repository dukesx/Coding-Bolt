import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Container } from "@mantine/core";
import Nav from "components/global/nav";
import Head from "next/head";
/**
 * This is default wrapper component to wrap Nav and Pages
 * @param {*} props
 * @function Wrapper
 * @returns JSX.Element
 */
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
    <>
      <Head>
        <script async src="https://unpkg.com/phosphor-icons"></script>
      </Head>
      <Container
        data-testid="wrapper"
        className="w-full max-w-[1600px]"
        style={{
          padding: 0,
        }}
        // fluid
      >
        <Nav session={session} supabase={supabase} />
        <Container className="xs:p-0 xxs:p-0 pt-0 px-0" size="xl">
          {props.children}
        </Container>
      </Container>
    </>
  );
};

export default Wrapper;
