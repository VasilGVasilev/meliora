


import { Footer } from 'flowbite-react';
import { HashLink } from 'react-router-hash-link';

export const FooterComponent = () => {
    return (
        <Footer className='bg-gray-900'>
            <div className="w-full">
                <div className="w-full flex flex-row justify-evenly gap-8 px-6 py-8">
                    <div>
                        <Footer.Title title="MELIORA LUXURY HOUSE" />
                        <Footer.LinkGroup col>
                            <HashLink
                                to="#landing"
                                smooth
                            ><Footer.Link>Начало</Footer.Link></HashLink>
                            <HashLink
                                to="#description"
                                smooth
                            ><Footer.Link>За къщите</Footer.Link></HashLink>
                            <HashLink
                                to="#plan"
                                smooth
                            ><Footer.Link>Разпределение</Footer.Link></HashLink>
                            <HashLink
                                to="#gallery"
                                smooth
                            ><Footer.Link>Галерия</Footer.Link></HashLink>
                            <HashLink
                                to="#contacts"
                                smooth
                            ><Footer.Link>Контакти</Footer.Link></HashLink>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="КОНТАКТИ" />
                        <Footer.LinkGroup col>
                            <Footer.Link >гр.Гоце Делчев</Footer.Link>
                            <Footer.Link href="mailto:mail@mail.com" className='hover:text-yellow-500'>mail@mail.com</Footer.Link>
                            <Footer.Link href="tel:00359888888888" className='hover:text-yellow-500'>+359888888888</Footer.Link>
                        </Footer.LinkGroup>
                    </div>

                </div>
                <div className="w-full bg-gray-800 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#landing" by="Meliora Luxury House" year={2024} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">

                    </div>
                </div>
            </div>
        </Footer>
    );
}
