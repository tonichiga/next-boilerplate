import { Layout } from "../Layouts";
import { Home as Main } from "../Views";
import ProtectedRoute from "../Routes/ProtectedRoute";
import getAuth from "../api/getAuth";

const isServer = () => typeof window === "undefined";

interface IProps {
  isAuth: boolean;
}

const Home = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};

export default Home;

// export const getServerSideProps = async () => {
//   const result = await getAuth();

//   return {
//     props: {
//       isAuth: result,
//     },
//   };
// };
