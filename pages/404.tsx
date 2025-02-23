import Link from "next/link";

const Custom404Page = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
            <Link href="/">
                <p className="text-2xl font-bold text-blue-500 hover:underline">Go back to Homepage</p>
            </Link>
        </div>
    )
}

export default Custom404Page;