import MainNavigation from "./Navigation/MainNavigation";
import React from "react";

const Layout = ({children}: any) => {
    return (
        <>
            <MainNavigation/>
            <main>{children}</main>
        </>
    )
};

export default Layout;
