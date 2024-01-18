import { useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

import { motion } from "framer-motion"

import { CiMenuFries } from "react-icons/ci";
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
        <a
            href={`#${urlHash}`}
            className={`${location.hash === urlHash ? "text-yellow-500" : ""
                }  hover:scale-125 transition duration-300`}
            onClick={() => {
                setIsMenuToggled(false);
            }
            }
        >
            {page}
        </a>
    );
};

const LinkTemplate = ({ urlHash, page }) => {
    const location = useLocation()

    return (

        <a
            href={`#${urlHash}`}
            className={`${location.hash == urlHash ? "text-yellow-500" : ""
                }  hover:text-yellow-500 transition duration-300`}
        >
            {page}
        </a>
    );
};



export const Navbar = ({ isTopOfPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const modalRef = useRef(null);

    const mobileMenuVisibility = isMenuToggled ? "flex" : "hidden";

    const navbarBackground = isTopOfPage ? "top-0 opacity-100" : "bg-gray-950 opacity-85";
    const navbarTextColor = isTopOfPage ? "text-black" : "text-white";


    const closeModal = (e) => {
        e.stopPropagation();
        if (e.target == modalRef.current) {
            setIsMenuToggled(!isMenuToggled)
        }
    }

    return (
        <>
            <nav className={`${navbarBackground} fixed flex flex-col z-40 w-full `} >

                {/* DESKTOP NAV */}
                <div className={`py-5 flex items-center justify-between mx-auto w-5/6 font-playfairDisplay`}>
                    <a
                        className={`duration-200 flex justify-center items-center ${navbarTextColor} font-bold text-lg sm:text-xl lg:text-2xl`}
                        href="#landing"
                    >
                        MELIORA LUXURY HOUSE
                    </a>
                    <>
                        <div className={` hidden ${navbarTextColor} text-xl 2xl:text-2xl lg:flex justify-center items-center gap-7 2xl:gap-16 font-roboto `}>
                            <LinkTemplate
                                urlHash='landing'
                                page="Начало"
                            />
                            <LinkTemplate
                                urlHash='description'
                                page="За къщите"
                            />
                            <LinkTemplate
                                urlHash='plan'
                                page="Разпределение"
                            />
                            <LinkTemplate
                                urlHash='gallery'
                                page="Галерия"
                            />
                            <LinkTemplate
                                urlHash='contacts'
                                page="Контакти"
                            />
                        </div>

                        <button
                            className={`block lg:hidden rounded-full ${navbarTextColor} p-2`}
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            aria-label="menu"
                        >
                            <CiMenuFries size={24} />
                        </button>
                    </>


                </div>
            </nav>
            {/* MOBILE MENU POPUP */}
            <div
                className={`${mobileMenuVisibility} fixed inset-0 z-40 items-center justify-center bg-gray-950 bg-opacity-85`}
                onClick={closeModal}
                ref={modalRef}
            >
                <motion.div
                    className="fixed right-0 bottom-0 h-full bg-black w-[350px]"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.1 }}
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
                        className="flex flex-col gap-10 ml-[25%] text-2xl text-white"
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            variants={navbarVariant}
                        >
                            <LinkMobileTemplate
                                urlHash=''
                                page="Начало"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </motion.div>
                        <motion.div
                            variants={navbarVariant}
                            viewport={{ once: true }}
                        >
                            <LinkMobileTemplate
                                urlHash='description'
                                page="За къщите"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </motion.div>
                        <motion.div
                            variants={navbarVariant}
                            viewport={{ once: true }}
                        >
                            <LinkMobileTemplate
                                urlHash='plan'
                                page="Разпределение"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </motion.div>
                        <motion.div
                            variants={navbarVariant}
                            viewport={{ once: true }}
                        >

                            <LinkMobileTemplate
                                urlHash='gallery'
                                page="Галерия"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </motion.div>
                        <motion.div
                            variants={navbarVariant}
                            viewport={{ once: true }}
                        >

                            <LinkMobileTemplate
                                urlHash='contacts'
                                page="Контакти"
                                setIsMenuToggled={setIsMenuToggled}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};
