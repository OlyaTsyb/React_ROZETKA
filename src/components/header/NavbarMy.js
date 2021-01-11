import React from "react";
import MenuList from "./MenuList";
import Middle from "./Middle";
import Carts from "./Carts";
import TopNavbarLine from "./TopNavbarLine";
import NavbarCatalog from "./NavbarCatalog";
import Logo from "./FooterNavbarLineLogo";
import InputBlock from "./NavbarInputBlock";
import NavbarFooterLineLastBlock from "./NavbarFooterLineLastBlock";
import SpanMiddleBlock from "./SpanMiddleBlock";

function NavbarMy() {
    return (
            <div className="top_navbar">
               <TopNavbarLine />
                <div className="footer_navbar_line">
                    <Logo />
                    <NavbarCatalog />
                    <InputBlock />
                    <NavbarFooterLineLastBlock />
                </div>
                <div className={"center_block row"}>
                   <MenuList />
                    <div className="middle_right container">
                           <Middle/>
                            <SpanMiddleBlock />
                           <Carts />
                    </div>
                </div>
            </div>
    )
}
export default NavbarMy;
