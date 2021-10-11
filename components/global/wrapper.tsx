import { useState, useEffect, useRef } from "react";
import { supabase } from "../../lib/supabaseClient";
import { Container } from "@mantine/core";
import Nav from "components/global/nav";
import { Session } from "@supabase/gotrue-js";
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
      data-testid="wrapper"
      className="w-full max-w-[1600px]"
      style={{
        padding: 0,
      }}
      // fluid
    >
      <Nav session={session} />
      <Container
        className="xs:p-0 xxs:p-0 pt-0 px-0"
        //  size={1660}
      >
        {props.children}
      </Container>
    </Container>
  );
};

export default Wrapper;
