import { motion } from "framer-motion";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import Navbar from "~/components/Navbar";

const Layout = ({ children, ...customMeta }: any) => {
    const router = useRouter();
    const navbarRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    const meta = {
        title: "Veera Venkata Naga Surya Jaya Sai Padala - Portfolio",
        description: "Aspiring software engineer driven by a passion for product ownership and solving real-world challenges. Committed todelivering user-centric solutions that make a tangible impact.",
        image: "/avatar.png",
        type: "website",
        date: moment().format("MM-DD-YYYY"),
        ...customMeta,
    };

    useEffect(() => {
        if (navbarRef.current) {
            const navbarHeight = navbarRef.current?.getBoundingClientRect()
                .height;
            divRef.current?.setAttribute(
                "style",
                `height: calc(100vh - ${navbarHeight}px)`
            );
        }
    }, []);

    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://yourwebsite.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <main className="bg-gray-100 dark:bg-gray-800 w-full overflow-scroll">
                <Navbar ref={navbarRef} />
                <div ref={divRef} className="overflow-scroll">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        className="flex flex-col max-w-5xl mx-auto p-8"
                    >
                        {children}
                    </motion.div>
                </div>
            </main>
        </>
    );
}

export default Layout;