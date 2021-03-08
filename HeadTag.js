import Head from 'next/head';

const HeadTag = ({ title }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.png" />
            <link href="//db.onlinewebfonts.com/c/cf67b63a12a22d6fe21be02b8dfdf060?family=GeForce" rel="stylesheet" type="text/css"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;600&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
    );
};

export default HeadTag;
