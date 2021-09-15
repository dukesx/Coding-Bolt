import { Container } from "@mantine/core";
import Nav from "./nav";
import { signIn, signOut, useSession } from "next-auth/client";
import Script from "next/script";

const Wrapper = (props: any) => {
  const [session, loading] = useSession();

  return (
    <Container
      style={{
        padding: 0,
      }}
      fluid
    >
      <Nav
        session={session}
        loading={loading}
        signIn={signIn}
        signOut={signOut}
      />
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
