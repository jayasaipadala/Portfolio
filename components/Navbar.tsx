import { Disclosure } from '@headlessui/react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from 'next-themes'
import { forwardRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdCall, IoMdMail } from 'react-icons/io';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { VscChromeClose } from 'react-icons/vsc';

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <Disclosure as="nav" className="bg-blue-900 sticky top-0 z-20" ref={ref}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <Link href="/" className="flex flex-row justify-center items-center gap-2 hover:scale-105 hover:animate-pulse transition duration-300 ease-in-out">
                                <span className="flex items-center justify-center w-8 h-8 rounded bg-white text-blue-900">
                                    <p className="font-bold">YJ</p>
                                </span>
                                <span className="hidden sm:block uppercase tracking-[2px] text-sm text-white whitespace-nowrap">Surya Jaya Sai<br />Padala</span>
                            </Link>
                            <div className="flex flex-row items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    router.asPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-100 hover:bg-white hover:text-blue-900 transition duration-300 ease-in-out',
                                                    'px-3 py-2 rounded-md text-md font-medium'
                                                )}
                                                aria-current={router.asPath === item.href ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-end items-center">
                                <a href="https://www.linkedin.com/in/jaya-sai-surya-padala/" target="_blank" rel="noreferrer">
                                    <FaLinkedin className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />
                                </a>
                                <a href="https://github.com/jayasaipadala" target="_blank" rel="noreferrer">
                                    <FaGithub className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />
                                </a>
                                <a href="mailto:jaisaipadala@gmail.com">
                                    <IoMdMail className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />
                                </a>
                                <a href="tel:5732003850">
                                    <IoMdCall className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />
                                </a>
                                <span onClick={toggleTheme}>
                                    {(theme === 'light')
                                        ? <MdLightMode className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />
                                        : <MdDarkMode className="block h-6 w-6 text-white mx-3 my-2 cursor-pointer hover:scale-125 hover:animate-pulse transition duration-300 ease-in-out" />}
                                </span>
                                <div className="inset-y-0 left-0 flex items-center lg:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 outline-none text-white hover:bg-white hover:text-blue-900">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <VscChromeClose className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <GiHamburgerMenu className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="flex flex-col justify-center items-end space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        router.asPath === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white hover:text-blue-900',
                                        'px-3 py-2 rounded-md text-md font-medium'
                                    )}
                                    aria-current={router.asPath === item.href ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
})

Navbar.displayName = 'Navbar';

export default Navbar;