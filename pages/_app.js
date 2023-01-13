import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Navaneeth Portfolio</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/n-logo.png" />

            <link rel="preconnect" href="https://stijndv.com" />
            <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />


        </Head>
        <Component {...pageProps} />
    </>
);

export default MyApp;

