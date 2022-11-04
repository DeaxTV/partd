import { UilCircle, UilDesktop, UilUserCircle, UilAngleDown, UilEstate, UilUser, UilEnvelope, UilBox, UilSignInAlt, UilBars, UilTimes, UilSpinnerAlt, UilSignout, UilArrowCircleUp } from '@iconscout/react-unicons';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Tippy from '@tippyjs/react';

export default function Header() {
    const router = useRouter();
    const [ isClicked, setIsClicked ] = useState(false);
    const baseURL = 'https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/';
    
    const emojis = {
        wink: "1f609.png",
        sunglasses: "1f60e.png",
        ghost: "1f47b.png",
        ok: "1f44c.png",
        agent: "1f575.png",
        dove: "1f54a.png",
        bird: "1f426.png",
        wine: "1f37e.png",
        infinity: "267e.png"
    };
    
    return (
        <>
            <div className={"pb-10 w-full flex items-center justify-between"}>
                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <a className="pr-1 text-white font-bold text-4xl">deax<span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">.</span></span></a>
                    </Link>
                    <a target="_blank" href="https://discord.gg/hsry2nzTUd" className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-discord" />
                    </a>
                    <a target="_blank" href="https://github.com/DeaxTV" className="flex items-center justify-center cursor-pointer social w-10 h-10 rounded-lg">
                        <i className="fab fa-github" />
                    </a>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="block lg:hidden relative">
                        <Menu>
                            <Menu.Button className="focus:outline-none">
                                <a className="flex items-center cursor-pointer">
                                    <UilBars /> <h6 className="ml-1">Menu</h6>
                                </a>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="z-50 absolute right-0 bg-opacity-100 bg-[#101010] py-2 px-3 rounded gap-y-2 flex flex-col">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/">
                                                <a className={`flex items-center justify-between ${router.route == '/' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilEstate /> <h6 className="ml-2">Home</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/about">
                                                <a className={`flex items-center justify-between ${router.route == '/about' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilUser /> <h6 className="ml-2">About</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/projects">
                                                <a className={`flex items-center justify-between ${router.route == '/projects' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilBox /> <h6 className="ml-2">Projects</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link href="/contact">
                                                <a className={`flex items-center justify-between ${router.route == '/contact' ? 'text-gray-100 font-semibold' : ''}`}>
                                                    <UilEnvelope /> <h6 className="ml-2">Contact</h6>
                                                </a>
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <ul className="lg:space-x-6 hidden lg:flex lg:items-center">
                        <li>
                            <Link href="/">
                                <a className={`flex items-center ${router.route == '/' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilEstate /> <h6 className="ml-1">Home</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={`flex items-center ${router.route == '/about' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilUser /> <h6 className="ml-1">About</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a className={`flex items-center ${router.route == '/projects' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilBox /> <h6 className="ml-1">Projects</h6>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={`flex items-center ${router.route == '/contact' ? 'text-gray-100 font-semibold' : 'hover:text-white transition-all'}`}>
                                    <UilEnvelope /> <h6 className="ml-1">Contact</h6>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed bottom-10 left-10">
                <Transition
                    as={Fragment}
                    show={isClicked}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-0 -translate-x-40"
                    enterTo="transform opacity-100 scale-100 -translate-x-3"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 -translate-x-40 scale-0"
                >
                    <img className="w-6 h-6 translate-y-3 -translate-x-2 -rotate-12" src={baseURL + emojis[Object.keys(emojis)[Math.floor(Math.random() * Object.keys(emojis).length)]]} />
                </Transition>
                <Tippy interactive={true} content="Koralle">
                    <button onClick={() => {
                        if (isClicked) return;
                        setIsClicked(true);
                        setTimeout(() => setIsClicked(false), 1000);
                    }} className="focus:outline-none cursor-pointer hidden lg:block version text-sm py-1.5 px-3 rounded-md">
                        v<span className="font-bold">4.0.0</span>
                    </button>
                </Tippy>
            </div>
            <div id="toUp" className="z-50 hidden bg-[#101010] rounded-full fixed lg:bottom-10 lg:right-10 bottom-5 right-5">
                <a href="#">
                    <UilArrowCircleUp className="p-2 w-12 h-12" />
                </a>
            </div>
        </>
    );
};