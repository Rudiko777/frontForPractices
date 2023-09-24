import React from "react";
import HeaderTop from "./page_1/header/header";
import HeaderMain from "./page_1/header/header-main";
import MainJs from "./page_1/main/mainJs";
import FooterMain from "./page_1/footer/footerGeneral";


export const App = ()=> {
    return (
        <div className={"App"}>
            <div className={"wrapper"}>
                <header className={"header"}>
                    <div className="header-top-color">
                        <div className="container">
                            <HeaderTop />
                        </div>
                    </div>
                    <div className="header-main">
                        <div className="container">
                            <HeaderMain />
                        </div>
                    </div>
                </header>
                <main className={"main"}>
                    <MainJs />
                </main>
                <footer className={"footer"}>
                    <FooterMain />
                </footer>
            </div>
        </div>
    )
}


