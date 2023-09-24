import React from "react";
import '../../.././css/style.css'
import logo from '../../../images/page_1/header-main/logo.svg'
import sidebar from '../../../images/page_1/header-main/sidebar.svg'
import NavigationMain from "./navigation";
import {ConnectionMain} from "./connection";
import Catalogs from "./catalogs";

class HeaderMain extends React.Component{
    render(){
        return(
            <>
                <div className={"header-main-box"}>
                    <a href={"#"} className={"header-main-sidebar-link"}>
                        <img className={"header-main-sidebar"} src={sidebar} alt={"Sidebar"}/>
                    </a>
                    <div className="header-main-logo-container">
                        <a href={"#"} className={"header-main-logo-link"}>
                            <img className={"header-main-logo"} src={logo} alt={"Logo"}/>
                        </a>
                    </div>
                    <h4 className={"header-main-advertisement"}><span className={"header-main-advertisement-time"}>10 лет</span> превосходим ваши ожидания</h4>
                    <NavigationMain />
                    <ConnectionMain />
                </div>
                <Catalogs />
            </>
        )
    }
}

export default HeaderMain