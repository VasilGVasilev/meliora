import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { useEffect, useState } from "react";

const Layout = () => {
    const [isTopOfPage, setIsTopOfPage] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Navbar isTopOfPage={isTopOfPage}></Navbar>
            <Outlet />
        </>
    )
};

export default Layout;
