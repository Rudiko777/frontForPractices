import React from "react";
import CarsInStock from "./main-files/cars_in_stock";
import SpecialOffers from "./main-files/special_offers";
import Reviews from "./main-files/reviews";
import SideBar from "./main-files/asidiks";
import {MainSlider} from "./main-slider/main-slider";
import {QuickCarInstallation} from "./QuickCarInstallation/QuickCarInstallation";
import {Komb} from "./main-files/komb";
import {Komb2} from "./main-files/komb-2";


class MainJs extends React.Component{
    render() {
        return(
            <>
                <MainSlider />
                <QuickCarInstallation />
                <div className={"container"}>
                    <CarsInStock />
                    <SpecialOffers />
                    <Reviews />
                    <SideBar />
                    <Komb />
                    <Komb2 />
                </div>
            </>
        )
    }
}

export default MainJs