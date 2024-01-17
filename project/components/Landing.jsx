import { motion } from "framer-motion";




export const Landing = () => {


  return (

    <section
      id="landing"
    >
      <div
        className="relative"
      >
        <img
          className="relative h-screen w-full object-cover opacity-50 transition-shadow"
          src="/meliora-front.jpg"
          alt='pic'
        />
      </div>

      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.5 }}
        className={`font-playfair absolute top-1/3 ml-10 text-base ss:text-xl`}
      >
        <span className="text-shadow-default font-semibold">Създаване на съвършенство</span>
        <div className="mt-3 text-shadow-default font-medium flex flex-col gap-3 text-xl ss:text-4xl">
          <span className="" >Открийте</span>
          <span className="" >Meчтания Дом</span>
          <span className="" >Днес</span>
        </div>
        <a href="#проекти" className="mt-10 inline-block bg-black text-white px-3 py-4 font-semibold text-base md:text-lg transition hover:bg-black hover:text-white">За къщите</a>

      </motion.div>

    </section>

  );
};

