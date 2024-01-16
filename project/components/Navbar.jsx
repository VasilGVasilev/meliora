import { useRef, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery"

import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import { PiBellRingingLight } from 'react-icons/pi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image


const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const navbarVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

const LinkMobileTemplate = ({ urlHash, page, setIsMenuToggled }) => {
    const location = useLocation();

    return (
        <div></div>
        // <Link
        //     to={`#${urlHash}`}
        //     className={`${location.hash === urlHash ? "text-yellow-500" : ""
        //         }  hover:scale-125 transition duration-300`}
        //     onClick={() => {
        //         setIsMenuToggled(false);
        //     }
        //     }
        // >
        //     {page}
        // </Link>
    );
};

const LinkTemplate = ({ urlHash, page }) => {
    const location = useLocation();

    return (
        <div>

        </div>
        // <Link
        //     to={`#${urlHash}`}
        //     className={`${location.hash == urlHash ? "text-yellow-500" : ""
        //         }  hover:scale-125 transition duration-300`}
        // >
        //     {page}
        // </Link>
    );
};



export const Navbar = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1120px)");

    const modalRef = useRef(null);

    const closeModal = (e) => {
        e.stopPropagation();
        if (e.target == modalRef.current) {
            setIsMenuToggled(!isMenuToggled)
        }
    }

    return (
        // animation works only on Home page:
        // the Navbar is fixed, meaning when we start the page, it is hidden and scroll makes it appear
        // but also if we refresh down the Home page, due to Navbar also being fixed to viewport, it will appear since being fixed makes it also constanlty inView
        <div
        >
            <nav className={`bg-blue-950 flex flex-col z-40 w-full`} >

                <div className="flex items-center justify-between mx-auto w-5/6">
                    <div></div>
                    {/* <Link className='saturate-200 duration-200 flex justify-center items-center h-14 w-20 sm:h-20 sm:w-32 ' to={'/'}>
                        <div className="relative rounded-full overflow-hidden h-10 w-14 sm:h-16 sm:w-24 shadow-lg hover:scale-110 transition duration-200">

                            <span className="absolute inset-0 z-10 rounded-full shadow-inner"></span>

                        </div>

                    </Link> */}
                    {/* DESKTOP NAV */}
                    {isDesktop ? (
                        <div className={`text-xl 2xl:text-2xl flex justify-between gap-10 2xl:gap-16 text-black font-bold`}>
                            <LinkTemplate
                                urlHash='/'
                                page="Начало"
                            />
                            <LinkTemplate
                                urlHash='/description/'
                                page="За сградата"
                            />
                            <LinkTemplate
                                urlHash='/apartments/'
                                page="Апартаменти"
                            />
                            <LinkTemplate
                                urlHash='/investor/'
                                page="Инвеститор"
                            />
                            <LinkTemplate
                                urlHash='/contacts/'
                                page="Контакти"
                            />
                        </div>
                    ) : (
                        <button
                            className="rounded-full text-black p-2"
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            aria-label="menu"
                        >
                            <GiHamburgerMenu size={24} />
                        </button>
                    )}

                    {/* MOBILE MENU POPUP */}
                    {!isDesktop && isMenuToggled && (
                        <div
                            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80"
                            onClick={closeModal}
                            ref={modalRef}
                        >
                            <motion.div
                                className="fixed right-0 bottom-0 h-full bg-blue-900 w-[300px]"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.3 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                {/* CLOSE ICON */}
                                <div className="flex justify-end p-12">
                                    <button
                                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                                        aria-label="close"
                                    >
                                        <AiOutlineClose size={24} className="text-neutral-600" />
                                    </button>
                                </div>

                                {/* MENU ITEMS */}
                                <motion.div
                                    className="flex flex-col gap-10 ml-[33%] text-2xl text-white"
                                    variants={container}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <motion.div
                                        variants={navbarVariant}
                                    >
                                        <LinkMobileTemplate
                                            urlHash='/'
                                            page="Начало"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                        viewport={{ once: true }}
                                    >
                                        <LinkMobileTemplate
                                            urlHash='/description'
                                            page="За сградата"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                        viewport={{ once: true }}
                                    >
                                        <LinkMobileTemplate
                                            urlHash='/apartments'
                                            page="Апартаменти"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                        viewport={{ once: true }}
                                    >

                                        <LinkMobileTemplate
                                            urlHash='/investor'
                                            page="Инвеститор"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                    <motion.div
                                        variants={navbarVariant}
                                        viewport={{ once: true }}
                                    >

                                        <LinkMobileTemplate
                                            urlHash='/contacts'
                                            page="Контакти"
                                            setIsMenuToggled={setIsMenuToggled}
                                        />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};
