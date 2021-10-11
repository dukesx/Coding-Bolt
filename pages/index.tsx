import { Button, Container } from "@mantine/core";
import Wrapper from "../components/global/wrapper";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";
export default function Home() {
  return (
    <Wrapper>
      <Container className="py-20">
        <Link href="/here">
          <a>Go Here</a>
        </Link>
        <Button
          onClick={() =>
            supabase.auth.signIn({
              provider: "google",
            })
          }
        >
          Hello World
        </Button>
      </Container>
    </Wrapper>
  );
}
