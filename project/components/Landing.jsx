import { motion } from "framer-motion";

import { FaCircleInfo } from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";


export const Landing = () => {


    return (

        <section
            id="landing"
        >
            <img

                className="relative inset-0 h-screen w-full object-cover opacity-60"
                src="/meliora-front.jpg"
                alt='pic'
            />

            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className={`absolute inset-0 px-3 flex flex-col items-center justify-center text-white text-center`}
            >
                <div className="font-playfairDisplay font-bold text-5xl md:text-7xl z-20">Meliora Luxury House</div>
                <div className="bg-yellow-500 w-2/3 h-[1px] z-10">
                </div>
                <HashLink
                    className="mt-10"
                    to="#description"
                    smooth
                ><FaCircleInfo className="hover:text-yellow-500 duration-200 transition ease-in animate-pulseScale hover:animate-none hover:scale-110" size={30} /></HashLink>

            </motion.div>


        </section>

    );
};

