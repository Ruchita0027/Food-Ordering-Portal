import React, { useRef } from "react";
import CartCountButton from "../../components/common/CartCountbutton";
import Footer from "../../components/common/Footer";
import Menu from "../../components/common/Menu";
import Banner from "../../components/Home/Banner";
import { menuItemsData } from "../../components/common/Menu/data";

const Home = () => {

    const menuRef = useRef();

    const handleScrollMenu = () => {
        menuRef.current.scollIntoView({behavior : 'smooth'});
    };
    return (
        <div>
            <Banner handleScrollMenu={handleScrollMenu} />
            <Menu list={menuItemsData} ref={menuRef} />
            <Footer />
            <CartCountButton />
        </div>
    );
};

export default Home;