import { useRouter } from "next/router";

const onClient = typeof window !== "undefined";

const PublicRoute = ({ children, isAuth }) => {
  const route = useRouter();

  if (isAuth === true) {
    onClient && route.push("/");
  }

  if (isAuth === false) {
    return <div>{children}</div>;
  }

  return null;
};

export default PublicRoute;
