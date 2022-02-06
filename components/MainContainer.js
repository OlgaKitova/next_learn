import Head from "next/head";
import Link from "next/link";

export default function MainContainer ({children}) {
    return (
        <>
            <Head>
                <meta keywords="nextjs"></meta>
                <title>Главная страница</title>
            </Head>
            <Link href="/users"> Пользователи </Link>
            <div>
                {children}
            </div>
        </>
    );
};