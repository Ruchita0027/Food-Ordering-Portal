import React from "react";
import './styles.css';
import Logo from "../../common/Logo";

const Banner = ({ handleScrollMenu }) => {
    return (
        <header>
            <div className="header-content">
                <Logo />
                <div className="content-main">
                    <h1>Food Ordering Portal</h1>
                    <p>We made fresh and healthy meals with different recipes</p>
                    <button  onClick={handleScrollMenu}>
                        View Menu 
                    </button>
                </div>
            </div>
            <img src="http://thepizzacottage.com/wp-content/uploads/2019/11/combo-1-1-600x355.png" alt="banner" className="header-img" />
        </header>
    );
};
export default Banner;