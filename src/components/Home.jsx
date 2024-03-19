import React from "react";

//import components pages
import Header from "./Home page components/Header";
import Footer from "./Home page components/Footer";
import Hero from "./Home page components/Hero";
import Status from "./Home page components/Status";
import Product from "./Home page components/Product";
import Question from "./Home page components/Question";
import Review from "./Home page components/Review";

function Home(){

    return(
            <div>
                <Header />
                <Hero />
                {/*<Status />*/}
                <Product />
                <Question />
                <Review />
                <Footer />
            </div>
    );
}

export default Home;