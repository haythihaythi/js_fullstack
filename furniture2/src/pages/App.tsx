// type HeaderProps = {
//   title: string;
//   body: string;
//@ = src, {} = hook
// };
// import { useState } from "react";
// import { Link } from "react-router";

// import { Button } from "@/components/ui/button";
// import { Spinner } from "@/components/ui/spinner";

// // type HeaderProps = {
// //   title: string;
// //   body: string;
// // };

// interface TitleProps {
//   title: string;
// }

// interface HeaderPropsInterface extends TitleProps {
//   body: string;
// }

// function Header({ title, body }: HeaderPropsInterface)
// {
//   return (
//     <>
//       <h1 className="text-red-500">This is {title}</h1>
//       <div>This is {body}</div>
//     </>
//   );
// }

// function Footer({ children }: { children: React.ReactNode }) {
//   return <div>{children}</div>;
// }

// // const TabButton = ({
// //   label,
// //   onPress,
// // }: {
// //   label: string;
// //   onPress: () => void;
// // }) => <button onClick={onPress}>{label}</button>;

// function App() {
//   const [counter, setCounter] = useState(0);
//   const date = new Date().toLocaleDateString();

//   const increment = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };

//   return (
//     <>
//       <Button className="bg-black mt-4 mb-4 ml-4">
//         <Link to="/login">Go to Login</Link>
//       </Button>

//       <Header title="Furniture Store" body="Welcome to our furniture store!" />
//       <h2>Today is {date}</h2>
//       <button onClick={increment}>Count - {counter}</button>
//       <Button size="sm" variant="outline" disabled>
//         <Spinner className="text-orange-300" />
//         Submit
//       </Button>
//       <Footer>
//         <p>This is Footer</p>
//       </Footer>
//     </>
//   );
// }

// export default App;

import { Button } from "@/components/ui/button";
import { useSession, signOut } from "@/lib/auth-client";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    // console.log("Session data:", session);
    if (!isPending && !session) {
      // Redirect to login page if not authenticated
      navigate("/login");
    }
  }, [session, isPending, navigate]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <>
      <h1>Welcome to the Furniture Store</h1>
      {session && <p>Hello, {session.user.name}!</p>}
      {session && <p>Your email: {session.user.email}</p>}
      {session ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <p>Please sign in to access your account.</p>
      )}
    </>
  );
}

export default App;