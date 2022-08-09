import React from "react";
import Header from "../Header/Header";


interface LayoutProps {
    children?:React.ReactNode

}

const Layout = ({children}:LayoutProps) => {
    return (
        <div className="max-w-7xl w-full mx-auto">
            <Header></Header>
            <main>{children}</main>
        </div>
    );
}
export default Layout