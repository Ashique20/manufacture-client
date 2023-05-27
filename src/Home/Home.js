import React from "react";
import Banner from "../Banner";

import Services from "../Pages/Service/Services";
import Stat from "../Pages/Stat/stat";
import ShowReview from "../Pages/DashBoard/MyReview/ShowReview";
import Info from "./Info/Info";

const Home=()=>{
    return(
        <div>
            <Banner></Banner>
          
            <Services ></Services>
            <Stat></Stat>
            <Info></Info>
            <ShowReview></ShowReview>
        </div>
    )
}

export default Home;