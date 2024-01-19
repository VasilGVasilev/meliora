import { motion } from "framer-motion"

const imgVariants = {
    offscreen: {
        opacity: 0, scale: 0.5
    },
    onscreen: {
        opacity: 1, scale: 1,
        transition: {
            duration: 1
        }
    }
};

export const Description = () => {
    return (
        <section id="description" className="bg-black pb-5">
            <div className="flex flex-col gap-5 justify-center items-start">
                <div className="font-playfairDisplay text-white mx-10 mt-10 text-3xl md:text-7xl relative before:absolute before:top-[30%] before:left-[10%] before:w-full before:h-full before:border-r-2 before:border-b-2 before:border-yellow-500 before:z-10">За къщите</div>
                <div className="p-10 h-full w-full grid grid-cols-1 md:grid-cols-2 gap-14">

                    <motion.div
                        className="w-full h-full"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.3 }}
                    >

                        <motion.img
                            className="w-full h-full"
                            variants={imgVariants}
                            src="/meliora-front-angle.jpg"
                            alt="img"
                        />
                    </motion.div>
                    <div className="flex flex-col gap-3 text-left text-white relative before:absolute before:bottom-[5%] before:right-[5%] before:w-full before:h-full before:border-l-2 before:border-t-2 before:border-yellow-500 before:z-10">
                        <p>Представяме Ви един уникален архитектурен проект за две луксозни еднофамилни къщи, разположени в живописния град Гоце Делчев, с възхитителна гледка към величествената Пирин планина.</p>
                        <p>Тези къщи са създадени с изящество и внимание към детайла, като използват традиционни и съвременни материали, които гарантират не само естетическо изживяване, но и изключителен комфорт. Архитектурата им възхищава със своята изящност и балансиран дизайн, който се слива перфектно с околната природа.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

