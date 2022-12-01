import "modern-normalize";
import "../assets/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import NextNProgress from "nextjs-progressbar";

interface IProps extends AppProps {
  example: string;
  user: any;
  isAuth: boolean;
}

export default function App({ Component, pageProps }: IProps) {
  return (
    <Provider store={store}>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={false}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}
