import Head from "next/head";
import { SWRConfig } from "swr";

import Layout from "../components/layout/layout";
import { NotificationContextProvider } from "../store/notification-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NotificationContextProvider>
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Layout>
          <Head>
            <title>Next Events</title>
            <meta name="description" content="NextJS Events" />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </NotificationContextProvider>
  );
}

export default MyApp;
