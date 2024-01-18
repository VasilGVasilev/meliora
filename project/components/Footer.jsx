


import { Footer } from 'flowbite-react';

export const FooterComponent = () => {
    return (
        <Footer className='bg-gray-900'>
            <div className="w-full">
                <div className="w-full flex flex-row justify-evenly gap-8 px-6 py-8">
                    <div>
                        <Footer.Title title="MELIORA LUXURY HOUSE" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#landing">Начало</Footer.Link>
                            <Footer.Link href="#description">За къщите</Footer.Link>
                            <Footer.Link href="#plan">Разпределение</Footer.Link>
                            <Footer.Link href="#gallery">Галерия</Footer.Link>
                            <Footer.Link href="#contacts">Контакти</Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="КОНТАКТИ" />
                        <Footer.LinkGroup col>
                            <Footer.Link href="#contacts">гр.Гоце Делчев</Footer.Link>
                            <Footer.Link href="mailto:mail@mail.com" className='hover:text-yellow-500'>mail@mail.com</Footer.Link>
                            <Footer.Link href="tel:00359888888888" className='hover:text-yellow-500'>+359888888888</Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                </div>
                <div className="w-full bg-gray-800 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Meliora Luxury House" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                    </div>
                </div>
            </div>
        </Footer>
    );
}
