import { getProviders, signIn } from "next-auth/client";
import { Button } from "@mantine/core";
interface Signin {
  providers: [
    {
      name: string;
      id: string;
    }
  ];
}
const SignIn: React.FC<Signin> = ({ providers }) => {
  return (
    <>
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: "foobar://?token=123",
          })
        }
      >
        Sign in with Google
      </Button>
    </>
  );
};

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}

export default SignIn;
