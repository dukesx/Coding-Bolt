import { Container } from "@mantine/core";
import Nav from "./nav";
import { signIn, signOut, useSession } from "next-auth/client";

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
      <Container size={1660}>{props.children}</Container>
    </Container>
  );
};

export default Wrapper;
