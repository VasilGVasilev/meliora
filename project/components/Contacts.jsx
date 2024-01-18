


import { Maps } from "./Maps";

import { MdSmartphone } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";

const cardVariantsLeft = {
    offscreen: {
        opacity: 0, x: 70
    },
    onscreen: {
        opacity: 1, x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};

const cardVariantsRight = {
    offscreen: {
        opacity: 0, x: -70
    },
    onscreen: {
        opacity: 1, x: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
        }
    }
};

export function Contacts() {


    return (
        <section id="contacts" className="bg-white">
            <div className="flex flex-col gap-5 justify-center items-start">
                <div className="text-black mx-10 mt-10 text-3xl md:text-7xl relative before:absolute before:top-[30%] before:left-[10%] before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-yellow-500 before:z-10">Контакти</div>
                <div
                    className="w-full h-full flex flex-col justify-center items-center gap-14 md:flex-row py-20"
                >

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div
                            variants={cardVariantsLeft}
                        >

                            <div className="flex flex-col justify-center items-start bg-yellow-500 p-3">
                                <MdSmartphone size={40} className="text-white"></MdSmartphone>
                            </div>
                            <div className="bg-white shadow-xl flex flex-col gap-5 justify-center items-start p-10">
                                <span className="font-bold text-2xl">Позвънете ни</span>
                                <a href="tel:00359888888888" className="text-gray-500 hover:text-yellow-500">+359888888888</a>

                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div
                            variants={cardVariantsRight}
                        >
                            <div className="flex flex-col justify-center items-start bg-yellow-500 p-3">
                                <FaLocationArrow size={40} className="text-white"></FaLocationArrow>

                            </div>
                            <div className="bg-white shadow-xl flex flex-col gap-5 justify-center items-start p-10">
                                <span className="font-bold text-2xl">Адрес</span>
                                <span className="text-gray-500">гр. Гоце Делчев,<br /> ул. Иван Иванов 100</span>

                            </div>

                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <motion.div
                            variants={cardVariantsLeft}
                        >
                            <div className="flex flex-col justify-center items-start bg-yellow-500 p-3">
                                <IoIosMail size={40} className="text-white"></IoIosMail>
                            </div>
                            <div className="bg-white shadow-xl flex flex-col gap-5 justify-center items-start p-10">
                                <span className="font-bold text-2xl">Пишете ни</span>
                                <a href="mailto:mail" className="text-gray-500 hover:text-yellow-500">office@mail.bg</a>

                            </div>
                        </motion.div>
                    </motion.div>

                </div>
                <div className="w-full h-full">
                    <Maps></Maps>
                </div>
            </div>
        </section>
    )
}

