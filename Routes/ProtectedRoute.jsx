import { useRouter } from "next/router";

const onClient = typeof window !== "undefined";

const ProtectedRoute = ({ children, isAuth }) => {
  const route = useRouter();

  if (isAuth === true) {
    return <div>{children}</div>;
  }

  if (isAuth === false) {
    onClient && route.push("/signin");
    return null;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
