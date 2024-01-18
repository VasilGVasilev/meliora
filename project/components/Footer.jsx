
export const Footer = () => {
    return (
        <footer className="h-auto bg-[#ffffff] text-black py-10 ">
            <div className="flex flex-col gap-5 w-10/12 mx-auto text-xs">
                <div className="flex flex-col md:flex-row justify-around items-start gap-5">
                    <div className="flex flex-col gap-3">

                        <a
                            className="font-semibold text-base md:text-xl hover:text-yellow-500"
                            href={`#landing`}
                        >
                            MELIORA LUXURY HOUSE
                        </a>
                        <div className="">
                            © Meliora Luxury House 2024
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 text-left">
                        <p className="font-semibold text-sm">КОНТАКТИ</p>
                        <p className="">гр.Гоце Делчев</p>
                        <a href="mailto:mail" className="hover:text-yellow-500">mail</a>
                        <a href="tel:00359888888888" className="text-sm hover:text-yellow-500">+359888888888</a>

                    </div>

                </div>

            </div>
        </footer>
    )
}

