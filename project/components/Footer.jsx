
export const Footer = () => {
    return (
        <footer className="h-auto bg-[#E5E7EB] text-black py-10 ">
            <div className="flex flex-col gap-5 w-10/12 mx-auto text-xs">
                <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                    <div className="font-semibold text-base md:text-lg">
                        MELIORA LUXURY HOUSE
                    </div>
                    <div className="flex flex-col gap-3 text-left">
                        <p className="font-semibold text-sm">КОНТАКТИ</p>
                        <p className="">гр.Гоце Делчев</p>
                        <a href="mailto:mail">mail</a>
                        <a href="tel:00359888888888" className="text-sm">+359888888888</a>

                    </div>

                </div>
                <div className="">
                    © Meliora Luxury House 2024. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}

